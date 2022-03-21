import { find } from "./find";
import { randomizer } from "../randomizer";
import { render } from "@testing-library/react";

randomizer.entity = jest.fn(() => "Car");
randomizer.id = jest.fn(() => 1);

const codeView = `public class AppDbContext : DbContext {
  public DbSet<Car> Cars { get; set; }
}

public class Car {
  [Key]
  public int Id { get; set; }
}

var db = new AppDbContext();`;

describe("EF Core: Find by Id", () => {
  const { question, check, code } = find(randomizer);

  it("should formulate the question", () => {
    const { container } = render(<>{question}</>);
    expect(container.textContent).toEqual(`Retrieve Car by id 1.`);
    expect(code).toEqual(codeView);
  });

  it.each([
    ["db.Cars.Find(1);"],
    ["db.Cars.Find( 1 );"],
    ["db.Cars.Find(\n\t1);"],
  ])("should accept the answers", (answer: string) => {
    expect(check(answer)).toBeTruthy();
  });
});
