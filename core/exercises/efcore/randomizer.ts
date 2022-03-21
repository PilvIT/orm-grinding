import { Attributes } from "./Attributes";
import { EntityNames } from "./EntityNames";
import { Randomizer } from "../../types";
import { pickOne } from "../../utils/pickOne";

export const randomizer: Randomizer = {
  entity: () => pickOne(EntityNames),
  attribute: () => pickOne(Attributes),
  id: () => Math.floor(Math.random() * 1000),
  integer: (from, to) => Math.floor(Math.random() * (to - from) + from),
};
