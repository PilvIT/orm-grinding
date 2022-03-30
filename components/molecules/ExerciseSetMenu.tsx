import { Link } from "../atoms/Link";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const cssActive = "text-red-500 underline underline-offset-2";

export const ExerciseSetMenu = () => {
  const {
    query: { set },
  } = useRouter();

  return (
    <nav className="flex gap-5 my-4 justify-center">
      <ExerciseLink set={"models"}>Model Definitions</ExerciseLink>
      <ExerciseLink set={"basic-queries"}>Basic Queries</ExerciseLink>
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

interface ExerciseLinkProps {
  children: ReactNode;
  set: string;
}

const ExerciseLink = ({ children, set }: ExerciseLinkProps) => {
  const { query } = useRouter();

  return (
    <Link
      className={query.set === set ? cssActive : undefined}
      href={`/ef-core/${set}`}
      shallow
    >
      {children}
    </Link>
  );
};
