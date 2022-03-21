import { DataType } from "../../../types";
import { orderBy } from "./orderBy";
import { randomizer } from "../randomizer";
import { render } from "@testing-library/react";

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

describe("EF Core: OrderBy -queries", () => {
  describe("ascending", () => {
    randomizer.integer = jest.fn(() => 0);
    const { question, check, code } = orderBy(randomizer);

    it("should formulate the question", () => {
      const { container } = render(<>{question}</>);
      expect(container.textContent).toEqual(
        `Query all Cars and sort by property year in ascending order.`
      );
      expect(code).toEqual(codeView);
    });

    it.each([
      ["db.Cars.OrderBy(car => car.Year);"],
      ["db.Cars.OrderBy(car=>car.Year);"],
      ["db.Cars.OrderBy(\n\tcar => car.Year);"],
    ])("should accept the answers for ascending sort", (answer: string) => {
      expect(check(answer)).toBeTruthy();
    });
  });

  describe("descending", () => {
    randomizer.integer = jest.fn(() => 1);
    const { question, check, code } = orderBy(randomizer);

    it("should formulate descending question", () => {
      const { container } = render(<>{question}</>);
      expect(container.textContent).toEqual(
        `Query all Cars and sort by property year in descending order.`
      );
      expect(code).toEqual(codeView);
    });

    it.each([
      ["db.Cars.OrderByDescending(car => car.Year);"],
      ["db.Cars.OrderByDescending(car=>car.Year);"],
      ["db.Cars.OrderByDescending(\n\tcar => car.Year);"],
    ])("should accept the answers for descending sort", (answer: string) => {
      expect(check(answer)).toBeTruthy();
    });
  });
});
