import { Attribute, ExerciseGenerator } from "../../../types";
import { checkAnswer } from "../../checkAnswer";

export const select: ExerciseGenerator = (random) => {
  const entity: string = random.entity();
  const attribute: Attribute = random.attribute();

  return {
    question: (
      <>
        Read property <code>{attribute.name.toLowerCase()}</code> from{" "}
        <code>{entity}</code> into anonymous object: <code>{"{ Value }"}</code>.
      </>
    ),
    check: (answer: string) => {
      const pattern = `db.${entity}s.Select\\(.* => new { Value = .*.${attribute.name} }\\);`;
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
