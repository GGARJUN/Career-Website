import React, { ReactNode } from 'react'
import  Navbar  from "./navbar/Navbar";
const page =  ({ children } : { children: ReactNode })  => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}

export default page