import type { NextPage } from 'next'
import { useState } from 'react'
import { Head } from '../components/Head'

const Home: NextPage = () => {

  const [content, setContent] = useState<string>('This content')

  return (
    <div>

      <Head title='Jared Griggs - Full Stack Developer' description='Jared Griggs - Full Stack Developer' />

      <header className='h-screen w-full bg-gray-300'>
        <div className="container">
          <div className="w-24 h-24 bg-black text-white">image</div>
          <div>
            <h1>Jared Griggs</h1>
            <h2>Full Stack Developer</h2>
          </div>
        </div>
      </header>

      <main className='w-full'>
        <div className='container mx-auto bg-white -mt-40 h-[1000px]'>
          <header className='flex justify-between'>
            <div className='flex justify-start'>
              <span>208-251-9086</span>
              <span> Boise, Idaho</span>
            </div>
            <div className='flex justify-end'>
              <span>Linked In</span>
              <span>GitHub</span>
            </div>
          </header>
          <div>
            <div>
              <h3>Overview</h3>
              <p>Lorem ipsum</p>
            </div>
            <div>
              <h3>Hightlights</h3>
              <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
            </div>
            <div>
              <h3>Skills</h3>
              <ul>
                <li>Category: One, Two, Three</li>
                <li>Category: One, Two, Three</li>
                <li>Categort: One, Two. Three</li>
              </ul>
            </div>

            <div>
              <h3>Expierience</h3>c
              <div>
                <header>
                  <h4>Employer</h4>
                  <h5>Role</h5>
                  <span>Month Year - Now</span>
                </header>
                <ul>
                  <li>What about it?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
