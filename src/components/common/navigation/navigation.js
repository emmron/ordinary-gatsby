import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Scrollspy from "react-scrollspy";
import { Menu, X } from "react-feather";
import "./navigation.css";
import "./adobefonts.css";

import { Container } from "../../global";
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer
} from "./style";
import { Link } from "../../../../.cache/gatsby-browser-entry";
import styled from "styled-components";

const NAV_ITEMS = ["Home", "SEO", "Web", "PPC", "About", "Contact"];


export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    console.log("here!!");
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = (item, item_url) => (

    <AnchorLink data-scroll href={`#${item_url.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile} className="oa__navlistWrapper">
      <Link to="/about/">About</Link>
      <Link to="/seo-perth/">SEO</Link>
      <Link to="/ppc-perth/">PPC</Link>
      <Link to="/web/">Web Design</Link>
      <Link to="/contact-us/">Contact</Link>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props} scrolled={this.state.hasScrolled}>
        <StyledContainer>
          <Brand>
            <Scrollspy offset={-64} item={["top"]} currentClassName="active">
              <AnchorLink href="#top" onClick={this.closeMobileMenu}>
                <Link to="/" className="front-page-link">oa</Link>
              </AnchorLink>
            </Scrollspy>
          </Brand>

        <Mobile>
            <button
              onClick={this.toggleMobileMenu}
              style={{ color: "black", background: "none" }}
            >
              {this.state.mobileMenuOpen ? (
                <X size={24} alt="close menu" />
              ) : (
                <Menu size={24} alt="open menu" />
              )}
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}
const HeaderTextGroup = styled.div`
.oa__navlistWrapper a {
color: #fb72a7;  
    border: 3px solid #fb72a7c9;   
    font-weight: 900;     
 font-family: 'Poppins', sans-serif;     
     text-decoration: none;        
      margin-right: 0.6rem;    
 margin-left: 0.6rem; 
      padding: 0.3rem;     
       border-radius: 13px;
       }
`
const NavListWrappersLinks = styled.a`
  color: {props => props.theme.color.pink};
`;
