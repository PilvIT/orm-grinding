import { Exercise } from "../../../types";
import { chooseEntity } from "../EntityNames";

export const simpleFilter = (): Exercise => {
  const entity = chooseEntity();
  const property = "Year";

  return {
    question: `Filter ${entity}s by ${property.toLowerCase()} ${2015}?`,
    check: (answer: string) => {
      const regex = new RegExp(
        `db.${entity}s.Where\(.* => .*\.${property} == 2015\)`
      );
      console.debug("Check", regex, answer);
      return answer.match(regex) !== null;
    },
    code: `public class AppDbContext : DbContext {
  public DbSet<${entity}> ${entity}s { get; set; }
  
  [Range(1900, 2100)]
  public int ${property} { get; set; }
}`,
  };
};
