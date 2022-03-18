import { ExerciseGenerator } from "../../../types";

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
      return answer === `db.${entity}s.Find(${id});`;
    },
    question: `How would you retrieve entity ${entity} by id ${id}?`,
  };
};
