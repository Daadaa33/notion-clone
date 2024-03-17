'use client'

import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DocumentsPage = () => {

    const { user } = useUser()
  return (
    <div className='h-full flex flex-col justify-center items-center space-y-4'>
        <Image src="/empty.png"
         width="300"
         height="300"
         alt='emty'
         className='dark:hidden'
        />
        <Image src="/empty-dark.png"
         width="300"
         height="300"
         alt='emty'
         className='hidden dark:block'
        />
        <h2 className='text-lg font-medium'>welcome {user?.fullName}&apos;s to Jotion</h2>
        <Button>
            <PlusCircle className='h-4 w-4 mr-2' />
            create new note
        </Button>
    </div>
  )
}

export default DocumentsPage
