import React, {useEffect} from 'react'
import { useGlobalContext } from './components/Context'
import HeroPage from './components/HeroPage'

const About = () => {

  // const data ={
  //   para:"Hello I Am",
  //   name: "Ajinkya Bengal",
  //   image : "./images/feeling_proud.svg",
  //   about: "I care deeply about creating world-class, useful, and beautiful products that help people and make a difference. I can be as involved in your project as you need me to be; from the seed of the idea, to sketches, creative direction, design, copywriting, system design, and even the front-end and React build.",
  // }

  const {updateAboutPage} = useGlobalContext();

  useEffect(() => updateAboutPage(), []);

  return (
    <div>
     {/* <HeroPage {...data}/> */}
     <HeroPage />
    </div>
  )
}

export default About
