import { Attribute, ExerciseGenerator } from "../../../types";
import { checkAnswer } from "../../checkAnswer";

export const orderBy: ExerciseGenerator = (random) => {
  const entity: string = random.entity();
  const attribute: Attribute = random.attribute();
  const descending = random.integer(0, 2) >= 1;

  return {
    question: (
      <>
        Query all <code>{entity}</code>s and sort by property{" "}
        <code>{attribute.name.toLowerCase()}</code> in{" "}
        {descending ? "descending" : "ascending"} order.
      </>
    ),
    check: (answer: string) => {
      let pattern = `db.${entity}s.OrderBy\\(.* => .*.${attribute.name}\\);`;
      if (descending) {
        pattern = `db.${entity}s.OrderByDescending\\(.* => .*.${attribute.name}\\);`;
      }
      console.log(pattern, answer);
      return checkAnswer(pattern, answer);
    },
    code: `public class AppDbContext : DbContext {
  public DbSet<${entity}> ${entity}s { get; set; }
}

public class ${entity} {
  [Key]
  public int Id { get; set; }
  public ${attribute.type} ${attribute.name} { get; set; }
}

var db = new AppDbContext();`,
  };
};
