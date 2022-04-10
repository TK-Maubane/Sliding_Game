import React, {useState} from 'react';
import Navbar from "./Navbar/Index";
import Sidebar from "./sidebar";


export default function Layout({ children }) {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
    //console.log('clicked')
  }

  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <main>{children}</main>
    </>
  )
}


