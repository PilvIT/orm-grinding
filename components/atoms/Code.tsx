import Prism from "../../plugins/prism";

interface Props {
  code: string;
  lang: "cs";
}

export const Code = ({ code, lang }: Props) => {
  const highlightedHTML = Prism.highlight(
    code,
    Prism.languages[lang as never],
    lang
  );

  return (
    <pre className={`language-${lang}`}>
      <code dangerouslySetInnerHTML={{ __html: highlightedHTML }} />
    </pre>
  );
};
