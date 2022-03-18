import { Exercise } from "../../../types";
import { chooseEntity } from "../EntityNames";

export const find = (): Exercise => {
  const entity = chooseEntity();
  const id = Math.floor(Math.random() * 1000);
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
