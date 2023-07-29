// app/page.tsx
"use client"

import {Button} from '@nextui-org/button'; 
import {useTheme} from "next-themes";

export default function Page() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <Button>Click me</Button>

    </div>
  )
}