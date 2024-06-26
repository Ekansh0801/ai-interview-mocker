import React from 'react'

function QuestionSections({MockInterviewQuestions}) {
    console.log(MockInterviewQuestions)
  return (
    <div className='p-5 border rounded-lg'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        { MockInterviewQuestions && 
            MockInterviewQuestions.map((question,index) => (
                <h2 className='p-2 bg-secondary rounded-full text:xs md:test-sm text-center cursor-pointer'>Question #{index + 1}</h2>
            ))
        }
      </div>
    </div>
  )
}

export default QuestionSections