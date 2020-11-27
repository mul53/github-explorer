import React, { useState } from "react";
import { Hero, Container, Form, Button, Columns } from "react-bulma-components";
import Navigation from "../../components/Navigation";
import useForm from "../../hooks/useForm";
import GithubService from "../../services/github";
import { transformRepoData } from "../../utils";
import SearchResult from "../../components/SearchResult";
import { Repo } from "../../state/repos/actions";

const { Field, Input } = Form;

export default function Search() {
  const [form, , handleChange]: any[] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState<Repo[]>([]);

  const handleSearch = () => {
    if (!form.q) return;

    setIsLoading(true);

    GithubService.search(form.q)
      .then((res) => res.data.items)
      .then((items) => items.map(transformRepoData))
      .then(setRepos)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Navigation />
      <Hero size="medium" color="primary" style={{ marginBottom: "3rem" }}>
        <Hero.Body>
          <Container>
            <Field kind="addons">
              <Input
                placeholder="Search repos"
                name="q"
                onChange={handleChange}
                value={form?.q}
                size="large"
              />
              <Button
                type="primary"
                onClick={handleSearch}
                loading={isLoading}
                size="large"
              >
                Search
              </Button>
            </Field>
          </Container>
        </Hero.Body>
      </Hero>
      <Container>
        <Columns>
          {isLoading
            ? "Loading..."
            : repos.map((repo) => (
                <Columns.Column size="3" key={repo.id}>
                  <SearchResult repo={repo} />
                </Columns.Column>
              ))}
        </Columns>
      </Container>
    </>
  );
}
