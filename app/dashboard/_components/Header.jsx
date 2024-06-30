"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useRouter } from 'next/navigation'

function Header() {
    const path = usePathname();
    const router = useRouter();
  return (
    <div className='flex p-4 justify-between items-center bg-secondary shadow-sm'>
        <Image src={'/logo.svg'} width={160} height={100} alt='logo' className='cursor-pointer'/>
        <ul className=' hidden md:flex gap-6'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-primary font-bold'}`} onClick={() => router.replace('/dashboard')}>Dashboard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/queries' && 'text-primary font-bold'}`} onClick={() => router.replace('dashboard/queries')}>Send Queries</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-primary font-bold'}`} onClick={() => router.replace('/dashboard/upgrade')}>Upgrade</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/reviews' && 'text-primary font-bold'}`} onClick={() => router.replace('dashboard/reviews')}>Reviews</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header