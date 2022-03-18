import { DataType, Picker } from "../../../types";
import { render } from "@testing-library/react";
import { select } from "./select";

const picker: Picker = {
  pickEntity: () => "Car",
  pickAttribute: () => ({
    name: "Year",
    type: DataType.Integer,
  }),
};

const codeView = `public class AppDbContext : DbContext {
  public DbSet<Car> Cars { get; set; }
}

public class Car {
  [Key]
  public int Id { get; set; }
  public int Year { get; set; }
}

var db = new AppDbContext();`;

describe("select -queries", () => {
  const { question, check, code } = select(picker);

  it("should formulate question correctly", () => {
    const { container } = render(<>{question}</>);
    expect(container.textContent).toEqual(
      `Read property year from Car into anonymous object: { Value }.`
    );
    expect(code).toEqual(codeView);
  });

  it("should pass the basic answer", () => {
    expect(check("db.Cars.Select(car => new { Value = car.Year });")).toEqual(
      true
    );
    expect(check("db.Cars.Select(car=>new{Value=car.Year});")).toEqual(true);
    expect(
      check(`db.Cars.Select(\ncar => new {\nValue = car.Year });`)
    ).toEqual(true);
  });
});
