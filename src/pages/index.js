import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

import { media } from '../utils/media';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media ${media.tablet} {
    padding: 3rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.dark};

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media ${media.phone} {
      font-size: 1.25rem;
    }
    @media ${media.tablet} {
      font-size: 1.45rem;
    }
  }
`;

const PulsatingAnchor = styled.a`
  &:link,
  &:visited {
    margin-right: 2rem;
    display: inline-block;
    padding: 0.5rem 1.5rem;
    color: ${props => props.theme.bg};
    background-color: ${props => props.theme.primary};
    border-radius: 1000px;
    position: relative;
    transition: all 0.2s;
    box-shadow: rgba(0, 5, 15, 0.11) 0px 4px 6px,
      rgba(0, 0, 0, 0.08) 0px 1px 3px;
  }
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.1rem 0.2rem ${props => props.theme.light};
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.primary};
    border-radius: 1000px;
    z-index: -50;
    transition: all 0.4s;
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.05rem 0.2rem ${props => props.theme.light};
  }
`;

const IndexPage = props => {
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Wrapper>
        <Hero>
          <h1>Hi.</h1>
          <p>
            I&apos;m Jai Tiwari, a Full Stack Developer who loves to find and
            solve small and big problems with my coding skills.
          </p>
          <PulsatingAnchor href="mailto:contactjaitiwari@gmail.com">
            Contact
          </PulsatingAnchor>
          <Link to="/works">
            <PulsatingAnchor href="#">Works</PulsatingAnchor>
          </Link>
        </Hero>
        <Content>
          <SectionTitle>Latest stories</SectionTitle>
          {postEdges.map(post => (
            <Article
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              timeToRead={post.node.timeToRead}
              slug={post.node.fields.slug}
              category={post.node.frontmatter.category}
              key={post.node.fields.slug}
            />
          ))}
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
