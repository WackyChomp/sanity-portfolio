'use client'

import Image from "next/image"
import { navLinks } from "@/constants"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import MenuSharpIcon from '@mui/icons-material/Menu';

type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

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
            <Link href={link.route} className="text-2xl bg-blue-400 p-3 hover:font-bold hover:text-red-600">
              <div className="w-3 h-3 border rounded-full hover:bg-green-400" />
              {link.label}
            </Link>
          )
        })}
      </div>

      <div className="">
        <MenuSharpIcon />
      </div>

    </nav>
  )
}

export default Navbar