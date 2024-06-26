"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModel'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import moment from 'moment/moment'

function RecordAnswerSection({MockInterviewQuestions,activeQuestionIndex,interviewData}){
    const [userAnswer,setUserAnswer] = useState('');
    const {user} = useUser();
    const [loading,setLoading] = useState(false);

    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

    //   if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

      useEffect(() => {
        results.map((result) => (
            setUserAnswer(prevAns => prevAns + result?.transcript)
        ))
      },[results])

      useEffect(() => {
        if(!isRecording && userAnswer.length > 10){
          UpdateUserAnswer();
        }
        
      },[userAnswer])

      const StartStopRecording = async() => {
        if(isRecording){
          stopSpeechToText();
        }
        else{
          startSpeechToText();
        }
      }

      const UpdateUserAnswer = async() => {
        console.log(userAnswer);
        setLoading(true);
        const feedbackPrompt = "Question:"+MockInterviewQuestions[activeQuestionIndex]?.question+", User Answer:"+ userAnswer+", Depending on Question and user answer for given interview question"+
        ", Please give us rating for answer and feedback as area of improvement"+ 
        "if any in just 3 to 5 lines to improve it in json format with rating field and feedback field";

        const result = await chatSession.sendMessage(feedbackPrompt);
        const mockJsonResp = (result.response.text()).replace('```json','').replace('```','')
        console.log(mockJsonResp);
        const JsonFeedbackResp = JSON.parse(mockJsonResp);

        const resp = await db.insert(UserAnswer).values({
          mockIdRef:interviewData?.mockId,
          question:MockInterviewQuestions[activeQuestionIndex]?.question,
          correctAns:MockInterviewQuestions[activeQuestionIndex]?.answer,
          userAns:userAnswer,
          feedback:JsonFeedbackResp.feedback,
          rating:JsonFeedbackResp.rating,
          userEmail:user?.primaryEmailAddress?.emailAddress,
          createdAt:moment().format('DD-MM-yyyy'),
        })
        if(resp){
          toast('User answer recorded successfully!!');
          setUserAnswer('');
          setResults([]);
        }
        setResults([]);
        setLoading(false)
      }

    return(
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col mt-20 justify-center items-center bg-black p-5 rounded-lg '>
            <Image src={'/webcam.png'} width={200} height={200} className='absolute'/>
            <Webcam mirrored={true} style={{height:300, width:'100%', zIndex:10}}/>
        </div>
          <Button disabled={loading} variant="outline" className="my-10 " onClick={StartStopRecording}>
          {isRecording ? 
            <h2 className='text-red-600 flex gap-2 '>
            <StopCircle/>
            'Stop Recording....'
            </h2>
            :
            <h2 className='flex gap-2'>
            <Mic/>
            'Record Answer'
            </h2>
            }
          </Button>
          {/* <Button onClick={() => console.log(userAnswer)}>Show Answer</Button> */}
        </div>
    )
}

export default RecordAnswerSection