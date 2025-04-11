import ReactMarkdown from "react-markdown";

export default function Results({ content }: { content: string }) {
  return (
    <div className="mt-8 prose dark:prose-invert max-w-none">
      {content && <ReactMarkdown>{content}</ReactMarkdown>}
    </div>
  );
}