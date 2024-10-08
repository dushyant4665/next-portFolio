import React from 'react'
import Title from './Title'
import projectIMG1 from '../images/projectIMG1.png'
import ProjectsContainer from './ProjectsContainer'
import projectIMG2 from '../images/projectIMG2.png'
import projectIMG3 from '../images/projectIMG3.png'
const Project = () => {
  return (
    <div className='wrapper' data-aos="fade-in"
    data-duration='2000'>
       <Title text={'Projects'} icon=''/>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
         <ProjectsContainer
              img={projectIMG1.src} 
              link={'https://crispshopping-mern-project-dushyant.vercel.app'}
              text='Full Stack MERN Ecommerce Web App with Firbase Google Authentication And Stripe Payment Gateway Feature'/>
              <ProjectsContainer
              img={projectIMG2.src} 
              link={'https://flex-burn.vercel.app'}
              text='A reactjs workout app with firebase google authentication'/>
           <ProjectsContainer
              img={projectIMG3.src} 
              link={'https://blogcrisp1.netlify.app/'}
              text='A blog static web app Using HTML CSS and JAVASCRIPT'/>
         </div>  
    </div>
  )
} 
export default Project
