import { Link } from "../atoms/Link";

export const ExerciseSetMenu = () => {
  return (
    <nav className="flex gap-5 my-4 justify-center">
      <Link href="/ef-core/models" shallow>
        Model Definitions
      </Link>
      <Link href="/ef-core/basic-queries" shallow>
        Basic Queries
      </Link>
      <a href="" className="text-neutral-400">
        Joins
      </a>
      <a href="" className="text-neutral-400">
        Group
      </a>
      <a href="" className="text-neutral-400">
        Mutations
      </a>
    </nav>
  );
};
