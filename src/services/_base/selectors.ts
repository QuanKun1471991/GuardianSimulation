import { isEqual } from "lodash";
import { createSelectorCreator, defaultMemoize } from "reselect";

export const createMemoSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
);
