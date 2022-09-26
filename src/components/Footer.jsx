import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './HeroPage';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div className="contact-short-btn">
              <NavLink to="/">
                <Button>Get Started</Button>
              </NavLink>
            </div>
          </div>
        </section>


        {/* Footer Section */}
        <footer>
          <div12 className="container grid grid-four-column">
            <div className="footer-about">
              <h3>BENGAL IT SOLUTIONS.</h3>
              <p>One of the top leading software development company in India. </p>
            </div>


            {/* 2ND COLUMN */}
            <div className="footer-subscribe">
              <h3>Join Us to get important updates</h3>
              <form action="#">
                <input
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Email"
                />
                <input type="submit" value="Join Us" />
              </form>
            </div>

            {/* 3RD COLUMN */}
            <div className="footer-social">
              
              <h3>Follow Us</h3>
              <div className="footer-social-icons">
 
                <div>
                  <a href="">
                    <FaLinkedin className='icons' />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/ajinkyabengal1" target="_blank">
                    <FaGithub className='icons' />
                  </a>
                </div>
                <div>
                  <a href="">
                    <FaWhatsapp className='icons' />
                  </a>
                </div>
   
              </div>
           
            </div>


            {/* 4TH COLUMN  */}
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 8669116768</h3>
            </div>
            </div12>


            {/* BOTTOM SECTION */}
      <div className="footer-bottom-section">
      <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} BengalITSolution.. All Rights Reserved.
            </p>
            <div className='bottom-para'>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
      </div>

          
        </footer>


      </Wrapper>
    </>
  )
}


const Wrapper = styled.section`
 .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child{
      justify-self: end;
      align-self: center;
    }
  }
  
footer {
  padding: 14rem 0 9rem 0;
  background-color: ${({ theme }) => theme.colors.footer_bg};

  h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-size: large;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social-icons {
      display: flex;
      gap: 2rem;

      div {
        padding: .1rem;
        border-radius: 50%;
        /* border: 2px solid ${({ theme }) => theme.colors.white}; */
        
        .icons {
          /* color: ${({ theme }) => theme.colors.white}; */
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
          /*  */
        
  display: inline-block;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  position: relative;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  transition: 300ms;
           }

           .icons:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  content: '';
  box-sizing: content-box;
  box-shadow: 0 0 0 3px #fff;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 300ms;
}
.icons:hover {
  background-color: #fff;
  color: #00989A;
}

.icons:hover:after {
  opacity: 1;
  transform: scale(1.15);
}
        }
      }


      .footer-bottom-section {
      padding-top: 9rem;
     
      hr {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0;
      }
      .bottom-para{
    
      /* text-align: end; */
      }
    }
    }


  `;

export default Footer