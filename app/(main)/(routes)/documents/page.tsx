'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/clerk-react'
import { useMutation } from 'convex/react'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { toast } from 'sonner'

const DocumentsPage = () => {

    const create = useMutation(api.documents.create)

    const onCreate = () => {
        const promise = create({ title : "Untitle" })
        
        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create new note!"
        })
    }

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
        <Button onClick={onCreate}> 
            <PlusCircle className='h-4 w-4 mr-2' />
            create new note
        </Button>
    </div>
  )
}

export default DocumentsPage
