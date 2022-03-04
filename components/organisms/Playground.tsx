import { Code } from "../atoms/Code";
import { CodeField } from "../atoms/CodeField";

export const Playground = () => {
  const code = `public class AppDbContext : DbContext {
  public DbSet<Car> Cars { get; set; }
}

public class Car {
  [Key]
  public int Id { get; set; }
}

var db = new AppDbContext();
`;

  return (
    <div className="text-left rounded-md overflow-clip bg-orange-50 min-h-[50vh] grid md:grid-cols-2">
      <div className="p-5">
        <h3 className="font-bold">Filtering</h3>
        <p>How do you retrieve single entity Car by id?</p>

        <CodeField />

        <button>Submit</button>
      </div>
      <Code code={code} lang="cs" />
    </div>
  );
};
