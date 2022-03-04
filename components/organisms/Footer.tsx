export const Footer = () => {
  return (
    <footer className="mt-10 block text-center space-y-5">
      <p>
        This product is offered by{" "}
        <a
          href="https://pilvit.fi/"
          target="_blank"
          rel="noreferrer"
          className="text-red-500"
        >
          PilvIT Oy
        </a>{" "}
        as a part of Open Source adventures.
      </p>

      <p className="opacity-70">Copyright &copy; 2022 PilvIT Oy</p>
    </footer>
  );
};
