// app/page.tsx
"use client"

import { CardPassword } from '@/components/CardPassword';
import {Button} from '@nextui-org/button'; 
import {useTheme} from "next-themes";

export default function Page() {
  const { theme, setTheme } = useTheme()
  return (
    <div className='w-full h-[80vh] grid place-items-center'>
      
      <CardPassword />

    </div>
  )
}