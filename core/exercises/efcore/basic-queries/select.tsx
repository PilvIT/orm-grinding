import { Attribute, ExerciseGenerator } from "../../../types";

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
      const cleanAnswer = answer.replaceAll(/\s/g, "");
      const regex = new RegExp(
        `db.${entity}s.Select\\(.* => new { Value = .*.${attribute.name} }\\);`.replaceAll(
          /\s/g,
          ""
        )
      );

      return cleanAnswer.match(regex) !== null;
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
