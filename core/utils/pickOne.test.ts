import { pickOne } from "./pickOne";

describe("pickOne.ts", () => {
  it("should pick one from array", () => {
    expect(pickOne([])).toBeUndefined();
    expect(pickOne([1])).toEqual(1);

    const items = [1, 2, 3];
    expect(items.includes(pickOne(items))).toBeTruthy();
  });
});
