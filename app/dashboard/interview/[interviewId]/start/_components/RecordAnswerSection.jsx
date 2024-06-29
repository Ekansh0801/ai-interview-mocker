"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'

function RecordAnswerSection(){
    const [userAnswer,setUserAnswer] = useState('')
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
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

    return(
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col mt-20 justify-center items-center bg-black p-5 rounded-lg '>
            <Image src={'/webcam.png'} width={200} height={200} className='absolute'/>
            <Webcam mirrored={true} style={{height:300, width:'100%', zIndex:10}}/>
        </div>
          <Button variant="outline" className="my-10 " onClick={isRecording?stopSpeechToText : startSpeechToText}>
          {isRecording ? 
            <h2 className='text-red-600 flex gap-2 '>
            <Mic/>
            'Stop Recording....'
            </h2>
            :'Record Answer'
            }
          </Button>

          <Button onClick={() => console.log(userAnswer)}>Show User Answer</Button>
        </div>
    )
}

export default RecordAnswerSection