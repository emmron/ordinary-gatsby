import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../global"

const Header = () => {
  const data = useStaticQuery(graphql`
      query {
          file(sourceInstanceName: { eq: "product" }, name: { eq: "green-skew" }) {
              childImageSharp {
                  fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid_tracedSVG
                  }
              }
          }
      }
  `)

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>OA</Subtitle>
            <h1>
              SEO Perth
              <br />
            </h1>
            <h2>
              Search engine optimization can make or break your business's growth. SEO is how easily the right people can search for and find your websites
            </h2>

          </HeaderTextGroup>
          <h3 className="inner-subtitle">
            Search engine optimization can make or break your business's growth. SEO is how easily the right people can search for and find your websites
          </h3>
        </Flex>
      </Container>

      <SEOSteps>
        <div className="seoWrapper">
        <h2>Long Term SEO</h2>
        <p>We want to be your SEO company for the long term. Today's SEO goes beyond picking keywords, changing page titles and trying to rank on Google Page 1. We pull data from search console, Google Analytics, Ahrefs, and SEMRush to benchmark where your website is at, general SEO health, and what's needed to close the gap and crush your competitors.</p>
        </div>
      </SEOSteps>
      <SEOSteps>
        <div className="seoWrapper">
          <h2>Ordinary SEO is White Hat SEO</h2>
          <ul>
            <li>Stick to the guidelines and rules set out by Google</li>
            <li>Prioritise winning over the user, not gaming the algorithm.</li>
            <li>The long-term approach that has a lasting effect on a website vs quick wins and cheating the system.</li>
          </ul>
          <p>If you hear "Quick wins and SEO", stay away!
            We don't do Black Hat SEO because it will make your website blacklisted on Google.</p>
        </div>

      </SEOSteps>
    </HeaderWrapper>
  )
}

export default Header

const SEOProcess = styled.div`
  background-color: ${props => props.theme.pink};
  min-height: 20rem;
  width: 100%;
  display: flex;
  text-align: center; 
`
const SEOSteps = styled.div`
  background-color: ${props => props.theme.pink};
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #000;
  font-family: 'Brevia';
  
  
  p, h2, h3 {
    text-align: center;
  }
  
  .seoWrapper {
    font-family: 'Brevia';
    
    @media (max-width: ${props => props.screen.sm }) {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
  
  > div {
    max-width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
const HeaderWrapper = styled.header`
  background-color: #000;
  padding: 160px 0 80px 0;
  padding-bottom: 10rem;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.pink};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const navLinks = styled.a`
  color: ${props => props.theme.color.pink};
`
const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }
  

  h5 {
    display: none;
    opacity: 0;
  }
  
  .oa__navlistWrapper a {
    color: ${props => props.theme.color.pink};

  }
  
  
  a {
  color: ${props => props.theme.color.white.regular};
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.white.regular};
  }

  h2 {
    margin-bottom: 24px;
    color: ${props => props.theme.color.accent};
    font-family: ${props => props.theme.font.normal};
  }
  
  nav a {
      font-family: ${props => props.theme.font.normal};
  }

  p {
    margin-bottom: 48px;
    color: ${props => props.theme.color.pink};
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const FormSubtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
`

const FormSubtitleLink = styled(Link)`
  color: ${props => props.theme.color.white.regular};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.color.white.regular};
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.pink};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
