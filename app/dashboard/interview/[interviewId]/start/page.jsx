"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionSections from './_components/QuestionSections';
import RecordAnswerSection from './_components/RecordAnswerSection';

function StartInterview({params}){

    const [interviewData,setInterviewData] = useState();
    const [MockInterviewQuestions,setMockInterviewQuestions] = useState();

    const [activeQuestionIndex,setActiveQuestionIndex] = useState(0);
    useEffect(() => {
        GetInterviewDetails();
    },[]);

    const GetInterviewDetails = async() => {
        const result = await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))

        const jsonMockResp = JSON.parse(result[0].jsonMockResp);
        setMockInterviewQuestions(jsonMockResp.questions);
        setInterviewData(result[0]);
        // console.log(jsonMockResp);
    }    
    return(
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <QuestionSections MockInterviewQuestions={MockInterviewQuestions} activeQuestionIndex={activeQuestionIndex}/>
              <RecordAnswerSection/>

          </div>
        </div>
    )
}

export default StartInterview