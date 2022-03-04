export const Footer = () => {
  return (
    <footer className="my-10 block text-center space-y-5">
      <p>
        This site is a part of{" "}
        <a
          href="https://pilvit.fi/"
          target="_blank"
          rel="noreferrer"
          className="text-red-500 hover:text-red-400 hover:underline underline-offset-2"
        >
          PilvIT Oy
        </a>{" "}
        Open Source adventures.
      </p>

      <p className="opacity-70">Copyright &copy; 2022 PilvIT Oy</p>
    </footer>
  );
};
