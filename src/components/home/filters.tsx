import React from "react";
import { Container, Form } from "react-bulma-components";
import { useRepoActionHandlers, useRepoState } from "../../state/repos/hooks";
import RangeSlider from "./slider";
import { DEFAULT_RANGE_VALUES } from "../../constants";

const { Field, Label, Control, Input } = Form;

export default function Filters() {
  const { nameInputValue } = useRepoState();
  const { onTypeNameInput, onTypeStarsInput } = useRepoActionHandlers();

  const handleNameInput = (event: any) => {
    onTypeNameInput(event.target.value);
  };

  const handleStarsInput = (event: any) => {
    onTypeStarsInput(event);
  };

  return (
    <Container style={{ marginBottom: "3rem" }}>
      <Field>
        <Label>Name Filter</Label>
        <Control>
          <Input
            placeholder="Name"
            value={nameInputValue}
            onChange={handleNameInput}
          />
        </Control>
      </Field>
      <Field>
        <Label>Stars Filter</Label>
        <Control>
          <RangeSlider
            min={0}
            max={500000}
            onChange={handleStarsInput}
            marks={{ 0: "0", 500000: "500000" }}
            defaultValues={DEFAULT_RANGE_VALUES}
          />
        </Control>
      </Field>
    </Container>
  );
}
