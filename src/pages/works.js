import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import { media } from '../utils/media';
import one from '../assets/work_snapshots/1.jpg';
import two from '../assets/work_snapshots/2.jpg';
import three from '../assets/work_snapshots/3.jpg';
import four from '../assets/work_snapshots/4.jpg';
console.log(one);
console.log(two);
console.log(three);
console.log(four);
import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const WorkItemHolder = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WorkItem = styled.div`
  min-width: 45%;
  min-height: 10rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-image: linear-gradient(rgba(0, 5, 15, 0.7), rgba(0, 5, 15, 0.7)),
    ${props => `url(${props.bg})`};
  background-size: cover;
  background-position: top;
  position: relative;
  transition: all 0.3s;
  .title {
    color: ${props => props.theme.bg};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.6);
    .title {
      top: 5%;
      transform: translate(-50%, 0%) scale(1.2);
    }
    .links {
      opacity: 1;
    }
    &::after {
      opacity: 0;
      transform: scaleX(1.2) scaleY(1.4);
    }
  }
  .links {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0;
    transition: all 0.3s;
    a {
      border: 1px solid ${props => props.theme.bg};
      background-color: rgba(0, 5, 15, 0.2);
      padding: 0.5rem 2rem;
      color: ${props => props.theme.bg};
      &:hover {
        background-color: ${props => props.theme.primary};
      }
    }
  }
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.theme};
    transition: all 0.3s ease-in;
    z-index: -1;
  }
`;

const Works = props => {
  return (
    <Layout>
      <Wrapper>
        <Helmet title={`Works`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <SectionTitle>Works</SectionTitle>
          <WorkItemHolder>
            <WorkItem bg={one}>
              <h3 className="title">Should I Use?</h3>
              <div className="links">
                <a href="https://shouldiuse.herokuapp.com/">Live</a>
                <a href="https://github.com/braincap/shouldiuse">Code</a>
              </div>
            </WorkItem>
            <WorkItem bg={two}>
              <h3 className="title">Vision Board</h3>
              <div className="links">
                <a href="https://fcc-vision-board.herokuapp.com/">Live</a>
                <a href="https://github.com/braincap/fcc-vision-board">Code</a>
              </div>
            </WorkItem>
            <WorkItem bg={three}>
              <h3 className="title">Pollster</h3>
              <div className="links">
                <a href="https://fcc-new-pollster.herokuapp.com/">Live</a>
                <a href="https://github.com/braincap/fcc-rc-pollster">Code</a>
              </div>
            </WorkItem>
            <WorkItem bg={four}>
              <h3 className="title">NightLife</h3>
              <div className="links">
                <a href="https://fcc-rc-nightlife.herokuapp.com/">Live</a>
                <a href="https://github.com/braincap/fcc-nightlife-coordination">
                  Code
                </a>
              </div>
            </WorkItem>
          </WorkItemHolder>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Works;
