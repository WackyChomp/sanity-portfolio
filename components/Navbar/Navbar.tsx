'use client'

import Image from "next/image"
import { navLinks } from "@/constants"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="bg-blue-500 flex justify-between items-center p-2 backdrop-blur-lg border-4 border-green-600">

      {/* Logo */}
      <div>
        <Image 
          src='https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif'
          alt='emptiness'
          width={50}
          height={50}
          unoptimized
          className="bg-red-500 p-1 m-2"
        />
      </div>

      {/* Nav Items */}
      <div className="bg-yellow-400 space-x-5 p-2 border border-none rounded-2xl">
        {navLinks.map((link) =>{
          return(
            <Link href={link.route} className="bg-blue-400">
              {link.label}
            </Link>
          )
        })}
      </div>

    </nav>
  )
}

export default Navbar