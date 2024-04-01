'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";


const DocumentIdPage = ({params} : {params : any}) => {
  return (
    <div>
         <Button asChild>
        <Link href="/documents">
          Go back
        </Link>
      </Button>
    </div>
  )
}

export default DocumentIdPage