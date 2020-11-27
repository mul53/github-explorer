import { createReducer } from "@reduxjs/toolkit";
import {
  Repo,
  addRepo,
  deleteRepo,
  typeNameInput,
  typeStarsInput,
} from "./actions";
import { MOCK_REPOS } from "../../constants/mock";
import { DEFAULT_RANGE_VALUES } from "../../constants";

export interface RepoState {
  readonly repos: Repo[];
  readonly nameInputValue?: string;
  readonly starsInputValue?: number[];
}

const initialState: RepoState = {
  repos: [...MOCK_REPOS],
  nameInputValue: "",
  starsInputValue: DEFAULT_RANGE_VALUES,
};

export default createReducer<RepoState>(initialState, (builder) =>
  builder
    .addCase(addRepo, (state, { payload: repo }) => {
      const repos = [...state.repos, repo];
      return {
        ...state,
        repos,
      };
    })
    .addCase(deleteRepo, (state, { payload: id }) => {
      const repos = state.repos.filter((repo) => repo.id !== id);
      return {
        ...state,
        repos,
      };
    })
    .addCase(typeNameInput, (state, { payload: typedValue }) => {
      return {
        ...state,
        nameInputValue: typedValue,
      };
    })
    .addCase(typeStarsInput, (state, { payload: typedValue }) => {
      return {
        ...state,
        starsInputValue: typedValue,
      };
    })
);
