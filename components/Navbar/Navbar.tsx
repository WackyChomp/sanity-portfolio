'use client'

import Image from "next/image"
import { navLinks } from "@/constants"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import '@/components/Navbar/Navbar.css'
import MenuSharpIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="fixed bg-blue-500 w-full flex justify-between items-center p-2 backdrop-blur-lg border-4 border-green-600">

      {/* Logo */}
      <div className="">
        <Image 
          src='https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif'
          alt='emptiness'
          width={50}
          height={50}
          unoptimized
          className="bg-red-500 p-1 m-2 rounded-lg"
        />
      </div>

      {/* Nav Items */}
      <div className="items-center justify-center flex-1 flex bg-yellow-400 space-x-8 mx-8 p-2 border border-none rounded-2xl">
        {navLinks.map((link) =>{
          return(
            <Link href={link.route} key={link.label} className="text-2xl bg-blue-400 p-3 hover:font-bold hover:text-red-600">
              <div className="w-3 h-3 border rounded-full hover:bg-green-400" />
              {link.label}
            </Link>
          )
        })}
      </div>

      <div className="app__navbar-menu">
        <MenuSharpIcon onClick={() => setToggle(true)} />

        {toggle &&(
          <div className="bg-green-700">
            <CloseIcon onClick={() => setToggle(false)} />

            <ul className="flex flex-col">
              {navLinks.map((link) =>{
                return(
                  <Link 
                    href={link.route} 
                    key={link.label} 
                    onClick={() => setToggle(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </ul>
          </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar