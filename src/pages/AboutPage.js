import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/picture_2.jpg'

const AboutPage = () => {
  return (
  <main>
    <PageHero title= 'about' />
    <Wrapper className= 'page section section-center'>
      <img src= {aboutImg} alt= 'about' />
      <article>
        <div className= 'title'>
          <h2>our story</h2>
          <div className= 'underline'>  </div>
        </div>
        <p>
        Explorify is a web application that attempts to simplify the travel planning process for its customers through offering pre-bundled travel packages. 
        Travel packages include flight plans, hotel reservations, and popular tourist attractions. By offering these travel packages, 
        planning for vacation trips will be largely streamlined and more accessible for customers. 
        We provide these holiday packages to help people to build great holiday memories with their loved ones.
        </p>
      </article>
    </Wrapper>
  </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
