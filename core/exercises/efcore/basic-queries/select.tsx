import { Attribute, ExerciseGenerator } from "../../../types";
import { CodeInline } from "../../../../components/atoms/CodeInline";
import { checkAnswer } from "../../checkAnswer";

export const select: ExerciseGenerator = (random) => {
  const entity: string = random.entity();
  const attribute: Attribute = random.attribute();

  return {
    question: (
      <>
        Read property <CodeInline>{attribute.name.toLowerCase()}</CodeInline>{" "}
        from <CodeInline>{entity}</CodeInline> into anonymous object:{" "}
        <CodeInline>{"{ Value }"}</CodeInline>.
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
