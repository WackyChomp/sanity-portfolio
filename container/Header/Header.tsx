import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='app__header app__flex'>
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>**Wave**</span>
          <div className='ml-5'>
            <p className='p-text'>Hello, I am</p>
            <h1 className='head-text'>Markie</h1>
          </div>
        </div>

        <div className="tag-cmp app_flex">
          <p className='p-text'>Coaching</p>
          <p className='p-text'>Adventurer</p>

        </div>
      </div>


      <div className="app__header-img">
        <Image 
          src='https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif'
          alt='emptiness'
          width={700}
          height={700}
          unoptimized
          className="bg-red-500 p-1 m-2 rounded-lg"
        />
        <div className="circle">dogs are fun</div>
      </div>

      <div className="">

      </div>
    </div>
  )
}

export default Header