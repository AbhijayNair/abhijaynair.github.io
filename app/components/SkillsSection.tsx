import React from 'react'

const SkillsSection = () => {
  return (
    <section className="lg:py-20 py-14" id='experience'>
      <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl sm:text-5xl lg:text-6xl lg:leading-snug font-semibold">
          <h2>Skills</h2>
      </div>
      <div className='container flex justify-around py-6'>
        <div className="">
          <h4 className='text-2xl text-wiretapmiddle text-center'>Languages</h4>
          <ul className='flex justify-center flex-col text-center py-3'>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>Dart</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="">
          <h4 className='text-2xl text-secondary text-center'>Frameworks & Tools</h4>
          <ul className='flex justify-center flex-col text-center py-3'>
            <li>Docker</li>
            <li>AWS</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>PyTorch</li>
            <li>Express</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection