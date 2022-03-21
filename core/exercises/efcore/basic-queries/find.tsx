import { ExerciseGenerator } from "../../../types";
import { checkAnswer } from "../../checkAnswer";

export const find: ExerciseGenerator = (random) => {
  const entity = random.entity();
  const id = random.id();
  const code = `public class AppDbContext : DbContext {
  public DbSet<${entity}> ${entity}s { get; set; }
}

public class ${entity} {
  [Key]
  public int Id { get; set; }
}

var db = new AppDbContext();`;

  return {
    code,
    check: (answer: string) => {
      return checkAnswer(`db.${entity}s.Find\\(${id}\\);`, answer);
    },
    question: (
      <>
        Retrieve <code>{entity}</code> by id <code>{id}</code>.
      </>
    ),
  };
};
