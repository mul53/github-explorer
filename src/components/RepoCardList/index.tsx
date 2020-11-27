import React from "react";
import { useDerivedRepoState } from "../../state/repos/hooks";
import { Link } from "react-router-dom";
import RepoTile from "../RepoCard";
import { Container, Columns } from "react-bulma-components";

export default function RepoList() {
  const { filteredRepos: repos } = useDerivedRepoState();

  return (
    <Container>
      <Columns>
        {repos.map((repo) => (
          <Columns.Column size={3} key={repo.id}>
            <Link to={`/${repo.organization}/${repo.name}`}>
              <RepoTile repo={repo} />
            </Link>
          </Columns.Column>
        ))}
      </Columns>
    </Container>
  );
}
