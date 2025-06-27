import React from 'react'

import  gsap  from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
        <h1 className='text-3xl text-red-500'>hello you stupid fucking idiot</h1>
    </div>
  )
}

export default App