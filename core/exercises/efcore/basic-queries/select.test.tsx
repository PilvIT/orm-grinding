import { DataType } from "../../../types";
import { randomizer } from "../randomizer";
import { render } from "@testing-library/react";
import { select } from "./select";

randomizer.entity = jest.fn(() => "Car");
randomizer.attribute = jest.fn(() => ({
  name: "Year",
  type: DataType.Integer,
}));

const codeView = `public class AppDbContext : DbContext {
  public DbSet<Car> Cars { get; set; }
}

public class Car {
  [Key]
  public int Id { get; set; }
  public int Year { get; set; }
}

var db = new AppDbContext();`;

describe("EF Core: Select -queries", () => {
  const { question, check, code } = select(randomizer);

  it("should formulate question", () => {
    const { container } = render(<>{question}</>);
    expect(container.textContent).toEqual(
      `Read property year from Car into anonymous object: { Value }.`
    );
    expect(code).toEqual(codeView);
  });

  it.each([
    ["db.Cars.Select(car => new { Value = car.Year });"],
    ["db.Cars.Select(car=>new{Value=car.Year});"],
    ["db.Cars.Select(\ncar => new {\nValue = car.Year });"],
  ])("should accept the answers", (answer: string) => {
    expect(check(answer)).toBeTruthy();
  });
});
