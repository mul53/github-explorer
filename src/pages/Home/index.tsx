import React from "react";
import Navbar from "../../components/Navigation";
import { Hero, Container, Heading } from "react-bulma-components";
import RepoCardList from "../../components/RepoCardList";
import Filters from "../../components/home/filters";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero color="primary" size="medium" style={{ marginBottom: "3rem" }}>
        <Hero.Body>
          <Container>
            <Heading>Github Explorer</Heading>
            <Heading subtitle size={3}>
              Explore open source github repositories
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
      <Filters />
      <RepoCardList />
    </>
  );
}
