import Image from 'next/image'
import React from 'react'

import '@/container/Header/Header.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <div id='home' className='app__header app__flex'>
      <div className="app__header-info">
        
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>🫡</span>
            <div className='ml-5'>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Markie</h1>
            </div>
          </div>

          <div className="tag-cmp app_flex">
            <p className='p-text'>Coaching</p>
            <p className='p-text'>Consultant</p>
            <p className='p-text'>Engineer</p>
            <p className='p-text'>Field Agent</p>
            <p className='p-text'>Researcher</p>
          </div>
        </div>

      </div>


      <div className="app__header-img">
        <Image 
          src='https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif'
          alt='emptiness'
          width={600}
          height={600}
          unoptimized
          className="bg-red-500 p-1 m-2 rounded-lg"
        />
        <div className="circle-one"></div>
        <div className="circle-two"></div>
        <div className="circle-three"></div>
      </div>

      <div className="app__header-circles">
        <img src='/next.svg' />
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
        <div className="">4</div>
        <div className="">5</div>
      </div>

    </div>
  )
}

export default Header