import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { Button } from './components/HeroPage';
import { useGlobalContext } from './components/Context';

const Services = () => {

  const { services } = useGlobalContext();
  console.log(services);

  return (
    
    <Wrapper className='section'>
     <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { id, title, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={title} />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
                <NavLink to="/service">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
  </Wrapper>
  );

};

const Wrapper = styled.section`
padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  
  .container {
    max-width: 120rem;
    grid-gap: 80px;
  }
  .common-heading{
    margin: 50px;
    font-weight: bold;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
  /* background-color: #94cdea5d; */
  background-color: #FFDEE9;
background-image: -webkit-linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
background-image: -moz-linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
background-image: -o-linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);

    .card-data {
      padding: 0 2rem;
    }
    h3 {
      
      font-weight: 500;
      font-size: 2.4rem;
  margin: 10px 0 5px 0;
  text-align: center;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;
      font-weight: 520;
      border-radius: 8px;
      line-height: 13px;
      text-decoration: unset;
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }
  figure {
    border-top-left-radius: 20px;
  border-top-right-radius: 20px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }





/* css */
/* display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background: #e8eff7;

  .cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  margin: 20px 0;
}
.card-top img {
  display: block;
  width: 100%;
}
.container {
  width: 95%;
  margin: auto;
}
.card {
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
}
.card-top {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
}
.card-info h3 {
  font-size: 18px;
  margin: 10px 0 5px 0;
  text-align: center;
}
.date {
  margin-bottom: 10px;
}
span,p {
  font-size: 15px;
  display: block;
}
.excerpt {
  color: #aeaeae;
}
.flex-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card-bottom {
  margin-top: 20px;
}
.button {
  text-decoration: unset;
  font-weight: 600;
  text-transform: uppercase;
  color: #4e4e4e;
  width: 80px;
  text-align: center;
  font-size: 15px;
  line-height: 30px;
  border-radius: 5px;
  background: #f2f4f6;
}
.read-more {
  text-decoration: unset;
  color: #000;
  font-weight: 600;
}
.btn-yellow {
  background: #ffb91d;
}
.btn-sky {
  background: #d2f9fe;
}
.btn-dpink {
  background: #e8d3fc;
} */
`;

export default Services
