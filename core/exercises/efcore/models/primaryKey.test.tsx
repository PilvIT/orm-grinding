import { primaryKey } from "./primaryKey";
import { randomizer } from "../randomizer";
import { render } from "@testing-library/react";

randomizer.entity = jest.fn(() => "Car");

describe("EF Core: Primary Key", () => {
  const { question, check } = primaryKey(randomizer);
  it("should formulate the question", () => {
    const { container } = render(<>{question}</>);
    expect(container.textContent).toEqual(
      `Define a model for Car where primary key id has the type Guid.`
    );
  });

  it("should accept the answer", () => {
    const answer = `public class Car {
      [Key]
      public Guid Id { get; set; }
    }`;
    expect(check(answer)).toBeTruthy();
  });
});
