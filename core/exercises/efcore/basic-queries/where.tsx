import { ExerciseGenerator } from "../../../types";
import { checkAnswer } from "../../checkAnswer";

export const where: ExerciseGenerator = (random) => {
  const entity = random.entity();
  const property = "Year";
  const year = random.integer(1900, 2100);

  return {
    question: (
      <>
        Filter <code>{entity}s</code> by <code>{property.toLowerCase()}</code>{" "}
        {year}.
      </>
    ),
    check: (answer: string) => {
      const pattern = `db.${entity}s.Where\\(.* => .*\.${property} == ${year}\\);`;
      return checkAnswer(pattern, answer);
    },
    code: `public class AppDbContext : DbContext {
  public DbSet<${entity}> ${entity}s { get; set; }
  
  [Range(1900, 2100)]
  public int ${property} { get; set; }
}`,
  };
};
