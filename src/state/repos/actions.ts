import { createAction } from "@reduxjs/toolkit";

export type Repo = {
  id: number;
  name: string;
  description: string;
  stars: number;
  organization: string;

  language?: string;
  issues?: number;
  forks?: number;
  watchers?: number;
  htmlUrl?: string;
  cloneUrl?: string;
  sshUrl?: string;
};

export const addRepo = createAction<Repo>("repos/addRepo");
export const deleteRepo = createAction<number>("repos/deleteRepo");
export const typeNameInput = createAction<string>("repos/typeNameInput");
export const typeStarsInput = createAction<number[]>("repos/typeStarsInput");
