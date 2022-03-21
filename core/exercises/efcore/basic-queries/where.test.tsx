import { randomizer } from "../randomizer";
import { render } from "@testing-library/react";
import { where } from "./where";

randomizer.entity = jest.fn(() => "Car");
randomizer.integer = jest.fn(() => 2022);

const codeView = `public class AppDbContext : DbContext {
  public DbSet<Car> Cars { get; set; }
  
  [Range(1900, 2100)]
  public int Year { get; set; }
}`;

describe("EF Core: Where -queries", () => {
  const { question, check, code } = where(randomizer);

  it("should formulate question", () => {
    const { container } = render(<>{question}</>);
    expect(container.textContent).toEqual("Filter Cars by year 2022.");
    expect(code).toEqual(codeView);
  });

  it.each([
    ["db.Cars.Where(car => car.Year == 2022);"],
    ["db.Cars.Where(car=>car.Year==2022);"],
    ["db.Cars.Where(\ncar=>car.Year==2022);"],
  ])("should accept the answers", (answer: string) => {
    expect(check(answer)).toBeTruthy();
  });
});
