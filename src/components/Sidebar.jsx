import React from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import Badge from "./Badge";
import {Link} from "react-router-dom"
import AvatarImage from "../assets/logo.png";
function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Balance Pad</Name>
        <Badge content="Your Buddy" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Lin>
            <RiHomeLine />
            <Link to="/break"><h3>Relaxation Pad</h3></Link>
          </Lin>
          <Lin>
            <RiFileCopyLine />
            <Link to="/classpad"><h3>Class Pad</h3></Link>
          </Lin>
          <Lin>
            <FaWallet />
            <a href="https://belikeamitesh.github.io/Quick-Chat-App/"><h3>Consult Pad</h3></a>
          </Lin>
          <Lin>
            <FaWallet />
            <Link to="/todo"><h3>Keep Track Pad</h3></Link>
          </Lin>
          <Lin>
            <FaWallet />
            <Link to="/quiz"><h3>Quiz Pad</h3></Link>
          </Lin>
          
        </Links>
        <ContactContainer>
          <span>Want to know about us?</span>
          <Link to="/about">About us</Link>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  height: 100vh;
  background-color: #abe9cd;
background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
background-color: #485461;
background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  height: 100vh;
  width: 100%;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Lin = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  text-decoration: none;
  gap: 1rem;
  color: white;
  cursor: pointer;
  h3 {
    font-weight: 300;
    color:white;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  margin-top:10px;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
