import { useState } from "react";

export const CodeField = () => {
  const [code, setCode] = useState("");
  return (
    <textarea
      className="font-mono text-opacity-0 w-full"
      value={code}
      spellCheck={false}
      onKeyDown={(e) => e.code === "Tab" && e.preventDefault()}
      onChange={(e) => setCode(e.target.value)}
    />
  );
};
