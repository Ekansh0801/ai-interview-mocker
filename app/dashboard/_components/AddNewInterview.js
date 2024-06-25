"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAIModel';
import { LoaderCircle } from 'lucide-react';
  
function AddNewInterview() {
    const [openDialog,setOpenDialog] = useState(false);
    const [jobPosition,setJobPosition] = useState();
    const [jobDesc,setJobDesc] = useState();
    const [jobExperience,setJobExperience] = useState();
    const [loading,setLoading] = useState(false);

    const onSubmit = async(e) => {
      setLoading(true);
      e.preventDefault();
      console.log(jobPosition,jobDesc,jobExperience);

      const InputPrompt = "Job Position: "+jobPosition+", Job Description: "+jobDesc+", Years of Experience: "+jobExperience+", Depending on Job Position, Job Description and Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview quetions along with answers in JSON Format, Give Quetions and Answers as field in JSON"

      const result = await chatSession.sendMessage(InputPrompt);
      console.log(result.response.text());
      // const MockJsonResp = (result.response.text()).replace('```json','').replace('```','')
      // console.log(JSON.parse(MockJsonResp));
      setLoading(false);
    }
  return (
    <div>
        <div className='p-10 border rounded-lg cursor-pointer bg-secondary hover:scale-105 hover:shadow-md transition-all' onClick={() => setOpenDialog(true)}>
            <h2 className='font-bold text-lg text-center '>+ Add New</h2>
        </div>
        <Dialog open={openDialog}>
        <DialogContent className="max-x-2xl">
            <DialogHeader>
            <DialogTitle className='text-2xl'>Tell us More about your Job Interview</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
               <div>
                <h2>Add Details about your Job Position/role, Job Descriptionand years of Experience</h2>
                <div className='mt-7 my-3'>
                  <label>Job Role/Job Position</label>
                  <Input placeholder="Ex. Full Stack Developer" required onChange={(event) => setJobPosition(event.target.value)}/>
                </div>
                <div className='my-3'>
                  <label>Job Description/Tech Stack</label>
                  <Textarea placeholder="Ex. React, Angular, NodeJS, MySQL etc." required onChange={(event) => setJobDesc(event.target.value)}/>
                </div>
                <div className='my-3'>
                  <label>Years of Experience</label>
                  <Input placeholder="Ex. 2" type="Number" min="0" max="100" required onChange={(event) => setJobExperience(event.target.value)}/>
                </div>
               </div>
               <div className='flex gap-5 justify-end'>
                   <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                   <Button type="submit" disabled={loading}>
                    {loading ?
                      <>
                     <LoaderCircle/>'Generating From AI'
                     </>
                      : 'Start Interview'}
                    </Button>
               </div>
              </form>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddNewInterview