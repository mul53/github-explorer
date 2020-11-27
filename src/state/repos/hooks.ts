import { useSelector, useDispatch } from "react-redux";
import { AppState, AppDispatch } from "../index";
import { useCallback, useMemo } from "react";
import {
  addRepo,
  Repo,
  deleteRepo,
  typeNameInput,
  typeStarsInput,
} from "./actions";

export function useRepoState(): AppState["repos"] {
  return useSelector<AppState, AppState["repos"]>((state) => state.repos);
}

export function useDerivedRepoState(): { filteredRepos: Repo[] } {
  const { repos, nameInputValue, starsInputValue } = useRepoState();

  const filteredRepos = useMemo(() => {
    let result = repos;

    if (nameInputValue) {
      const regex = new RegExp(nameInputValue, "i");
      result = result.filter((repo) => regex.test(repo.name));
    }

    if (starsInputValue) {
      const [minStarsValue, maxStarsValue] = starsInputValue;
      result = result.filter(
        (repo) => repo.stars >= minStarsValue && repo.stars <= maxStarsValue
      );
    }

    return result;
  }, [nameInputValue, repos, starsInputValue]);

  return {
    filteredRepos,
  };
}

export function useRepoActionHandlers(): {
  onAddRepo: (repo: Repo) => void;
  onDeleteRepo: (id: number) => void;
  onTypeNameInput: (typedValue: string) => void;
  onTypeStarsInput: (typedValue: number[]) => void;
} {
  const dispatch = useDispatch<AppDispatch>();

  const onAddRepo = useCallback(
    (repo: Repo) => {
      dispatch(addRepo(repo));
    },
    [dispatch]
  );

  const onDeleteRepo = useCallback(
    (id: number) => {
      dispatch(deleteRepo(id));
    },
    [dispatch]
  );

  const onTypeNameInput = useCallback(
    (typedValue: string) => {
      dispatch(typeNameInput(typedValue));
    },
    [dispatch]
  );

  const onTypeStarsInput = useCallback(
    (typedValue: number[]) => {
      dispatch(typeStarsInput(typedValue));
    },
    [dispatch]
  );

  return {
    onAddRepo,
    onDeleteRepo,
    onTypeNameInput,
    onTypeStarsInput,
  };
}
