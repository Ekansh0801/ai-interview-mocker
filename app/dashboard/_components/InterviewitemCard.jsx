import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewitemCard({interview}) {

    const onStart = () => {
        router.push('/dashboard/interview/' + interview?.mockId)
    }
    
    const onFeedback = () => {
        router.push('/dashboard/interview/'+interview?.mockId+"/feedback")
    }
    const router = useRouter();
  return (
    <div className='border shadow-sm p-3 rounded-lg'>
      <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
      <h2 className='text-sm text-gray-600'>{interview?.jobExperience}</h2>
      <h2 className='text-xs text-gray-400'>Created At:{interview?.createdAt}</h2>

      <div className='flex justify-between my-2 gap-5'>

        <Button size="sm" variant="outline" className="w-full" onClick={onFeedback}>Feedback</Button>
        <Button size="sm" className="w-full" onClick={onStart}>Start</Button>
      </div>
    </div>
  )
}

export default InterviewitemCard