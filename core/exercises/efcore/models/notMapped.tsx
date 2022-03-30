import { CodeInline } from "../../../../components/atoms/CodeInline";
import { ExerciseGenerator } from "../../../types";
import { checkAnswer } from "../../checkAnswer";

export const notMapped: ExerciseGenerator = (random) => {
  const entity: string = random.entity();

  return {
    question: (
      <>
        Define a property <CodeInline>bool Completed</CodeInline> but exclude it
        from database operations.
      </>
    ),
    check: (answer) => {
      const pattern = `\\[NotMapped\\] public bool Completed { (get;|set;){2} }`;
      return checkAnswer(pattern, answer);
    },
    placeholder: "attributes\npublic ...",
    code: `public class AppDbContext : DbContext {
  public DbSet<${entity}> ${entity}s { get; set; }
}

public class ${entity} {
  [Key]
  public int Id { get; set; }

  // properties 
}`,
  };
};
