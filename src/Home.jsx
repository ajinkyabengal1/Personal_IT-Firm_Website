import   React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from './components/Context';
import HeroPage from './components/HeroPage';
import Contact from './Contact';
import Services from './Services';


const Home = () => {
    

  // const data ={
    
  //   name: "Bengal IT Solutions.",
  //   image : "./images/cloud_hosting.svg",
  //   about : "Website Designing & Development by Experts. Best UI Design. Designing from Scratch. Contact Us For High Quality Websites with Supportive Mobile App Development. 360° Web Solutions. 2+ Years Of Expertise. Complete Business Support."
  // }

  const { updateHomePage } = useGlobalContext();

  useEffect(() =>updateHomePage(),[]);


  return (
    <>
    {/* <HeroPage {...data}/> */}
    <HeroPage/>
    <Services/>
    <Contact/>
    </>
  )
}

export default Home;
