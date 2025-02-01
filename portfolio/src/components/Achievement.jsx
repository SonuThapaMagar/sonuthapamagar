import React from 'react'
import deerImg from "../assets/deer.jpg"
import hackImg from "../assets/hacks.jpg"

const achievement=[
    {
        id:1,
        title:"Deerhack Hackathon - Interactive Technology Track Winner",
        description:"Won the Interactive Technology track at Deerhack Hackathon for creating an IoT-based Solid Waste Management system, contributing to sustainable urban development with smart waste solutions.",
        year:"2024",
        image:deerImg,
        link:"https://www.linkedin.com/in/sonu-thapa-magar-b281b8275/recent-activity/all/",
    }
]
const Achievement = () => {
  return (
   <section className='mt-12 mx-auto max-w-6xl px-8'>
    <h2 className='text-3xl font-bold text-center mb-8 gradient-text'>Achievements</h2>
   </section>
  )
}

export default Achievement
