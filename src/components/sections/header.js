import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import "./../common/navigation/adobefonts.css";

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
              Ordinary
              <br />
            </h1>
            <h2>
              We're an honest and upfront Digital Agency based in West Perth.
            </h2>
            <HeaderForm onSubmit={handleSubmit}>
              <HeaderInput placeholder="Your email" />
              <HeaderButton>Sign Up</HeaderButton>
            </HeaderForm>
            <FormSubtitle>
              Already have a beta account?{" "}
              <FormSubtitleLink to="/">Stay in the know</FormSubtitleLink>
            </FormSubtitle>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

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
  
  .front-page-link {
  border: 3px solid #ff488f;
    border-radius: 47%;
    padding: 8px;
        padding-top: 3px;
    padding-bottom: 8px;
  }

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
    border: 3px solid #fb72a7c9;
    font-weight: 900;
    text-decoration: none;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
    padding: 0.3rem;
    border-radius: 13px;
    font-family: brevia, sans-serif;
font-weight: 700;
font-style: normal;
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
    font-family: ${props => props.theme.font.bold};
    font-weight: 400;
  }
  
  nav a {
      font-family: ${props => props.theme.font.bold};
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
