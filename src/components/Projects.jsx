import React from "react";
import styled from "styled-components";
import AvatarImage from "../assets/4.jpeg";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title><Link to="/break">Break Page</Link></Title>
          <SubTitle>Timed for 1hr</SubTitle>
        </Detail>
      </Project>
      <AllProjects><a href="https://youtube.com/">Switch to youtube instead!</a></AllProjects>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 5rem;
    width: 5rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 22px;
  text-aling:center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: center;
  font-size:18px;
  color: ${themeColor};
  cursor: pointer;
`;

export default Projects;
