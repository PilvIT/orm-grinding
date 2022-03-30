import { CodeInline } from "../../../../components/atoms/CodeInline";
import { ExerciseGenerator } from "../../../types";
import { checkAnswer } from "../../checkAnswer";

export const maxLength: ExerciseGenerator = (random) => {
  const entity: string = random.entity();
  const length: number = random.integer(1, 500);

  return {
    question: (
      <>
        Define table <CodeInline>{entity}</CodeInline> with column{" "}
        <CodeInline>Name</CodeInline> that is string and has maximum length of{" "}
        {length}.
      </>
    ),
    check: (answer) => {
      const pattern = `public class ${entity} {
  \\[MaxLength\\(${length}\\)\\]
  public stringName { (get;|set;){2} }
}`;

      return checkAnswer(pattern, answer);
    },
    code: `public class AppDbContext : DbContext {
  public DbSet<${entity}> ${entity}s { get; set; }
}`,
    placeholder: "public class ...",
  };
};
