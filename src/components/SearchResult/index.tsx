import React from "react";
import { Card, Content } from "react-bulma-components";
import { Repo } from "../../state/repos/actions";
import { useRepoState, useRepoActionHandlers } from "../../state/repos/hooks";
import { truncateText } from "../../utils";

type SearchResultProps = {
  repo: Repo;
};

export default function SearchResult({ repo }: SearchResultProps) {
  const { id, name, description, organization, stars } = repo;
  const { repos } = useRepoState();
  const { onAddRepo, onDeleteRepo } = useRepoActionHandlers();

  const isMember = repos.find((repo) => repo.id === id);

  let handler: (...args: any) => void, text: string, args: any[];
  if (isMember) {
    handler = onDeleteRepo;
    text = "Delete";
    args = [id];
  } else {
    handler = onAddRepo;
    text = "Add";
    args = [repo];
  }

  return (
    <Card>
      <Card.Header>
        <Card.Header.Title>{name}</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Content>{truncateText(description)}</Content>
        <Content>
          ({organization}/{name})
        </Content>
        <Content>Stars: {stars}</Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item renderAs="a" onClick={() => handler(...args)}>
          {text}
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  );
}
