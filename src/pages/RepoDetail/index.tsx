import React, { useState, useEffect } from "react";
import GithubService from "../../services/github";
import { Repo } from "../../state/repos/actions";
import { RouteComponentProps } from "react-router-dom";
import Navigation from "../../components/Navigation";
import {
  Card,
  Container,
  Content,
  Heading,
  Hero,
} from "react-bulma-components";
import { transformRepoData } from "../../utils";

export default function RepoDetail({
  match: {
    params: { organization, name },
  },
}: RouteComponentProps<{
  organization?: string;
  name?: string;
}>) {
  const [repo, setRepo] = useState<Repo | null>(null);

  useEffect(() => {
    if (!organization || !name) return;

    GithubService.getRepo(organization, name)
      .then((res) => res.data)
      .then(transformRepoData)
      .then(setRepo)
      .catch(console.error);
  }, [name, organization]);

  return (
    <>
      <Navigation />
      <Hero color="primary" size="medium" style={{ marginBottom: "3rem" }}>
        <Hero.Body>
          <Container>
            <Heading>{repo ? `${organization}/${name}` : "-/-"}</Heading>
          </Container>
        </Hero.Body>
      </Hero>
      <Container>
        <Card>
          <Card.Header>
            <Card.Header.Title>{repo?.name}</Card.Header.Title>
          </Card.Header>
          <Card.Content>
            <Content>{repo?.description}</Content>
            <Content>
              <p>
                SSH url: <a href={repo?.sshUrl}>{repo?.sshUrl}</a>
              </p>
              <p>
                Clone url: <a href={repo?.cloneUrl}>{repo?.cloneUrl}</a>
              </p>
            </Content>
            <Content>
              <ul>
                <li>Language: {repo?.language}</li>
                <li>Stars: {repo?.stars}</li>
                <li>Watchers: {repo?.watchers}</li>
                <li>Forks: {repo?.forks}</li>
                <li>Issues: {repo?.issues}</li>
              </ul>
            </Content>
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Item renderAs="a" href={repo?.htmlUrl} target="_blank">
              View Repo
            </Card.Footer.Item>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
}
