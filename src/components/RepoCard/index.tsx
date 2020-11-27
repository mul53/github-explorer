import React from "react";
import { Card, Content } from "react-bulma-components";
import { Repo } from "../../state/repos/actions";
import { truncateText } from "../../utils";

type RepoTileProps = {
  repo: Repo;
};

export default function RepoCard({
  repo: { name, description, stars, organization },
}: RepoTileProps) {
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
    </Card>
  );
}
