import { CodeInline } from "../../../../components/atoms/CodeInline";
import { ExerciseGenerator } from "../../../types";
import { checkAnswer } from "../../checkAnswer";

export const primaryKey: ExerciseGenerator = (random) => {
  const entity: string = random.entity();

  return {
    question: (
      <>
        Define a model for <CodeInline>{entity}</CodeInline> where primary key{" "}
        <CodeInline>id</CodeInline> has the type <CodeInline>Guid</CodeInline>.
      </>
    ),
    check: (answer) => {
      const pattern = `public class ${entity} {
  \\[Key\\]
  public Guid Id { (get;|set;){2} }
}`;
      return checkAnswer(pattern, answer);
    },
    placeholder: `public class ...`,
    code: `public class AppDbContext : DbContext {
  public DbSet<${entity}> ${entity}s { get; set; }
}`,
  };
};
