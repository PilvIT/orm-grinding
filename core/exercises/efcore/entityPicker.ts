import { Attributes } from "./Attributes";
import { EntityNames } from "./EntityNames";
import { Picker } from "../../types";
import { pickOne } from "../../utils/pickOne";

export const entityPicker: Picker = {
  pickEntity: () => pickOne(EntityNames),
  pickAttribute: () => pickOne(Attributes),
};
