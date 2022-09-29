import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const GetStarted = () => (
  <StyledSection id="contact">
    <GetStartedContainer>
      <GetStartedTitle>SEO West Perth</GetStartedTitle>
      <TryItButton>Let's Talk</TryItButton>
      <Subtitle>No Ordinary Results.</Subtitle>
    </GetStartedContainer>
  </StyledSection>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.dark};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
  color: #fff;
`

const TryItButton = styled.button`
  font-weight: 800;
  font-size: 14px;
  color: #fb72a7;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.rose.regular};
  color: ${props => props.theme.color.white.regular};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  transition: all 0.25s ease-in-out;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
    background: ${props => props.theme.color.pink};
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: #fff;
`
