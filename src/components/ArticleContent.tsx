import React from "react";

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  // Parse MDX content into HTML-like structure
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let inBlockquote = false;
  let blockquoteLines: string[] = [];
  let inList = false;
  let listItems: string[] = [];
  let listType: "ul" | "ol" = "ul";

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) {
        elements.push(
          <p key={elements.length} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(text) }} />
        );
      }
      currentParagraph = [];
    }
  };

  const flushBlockquote = () => {
    if (blockquoteLines.length > 0) {
      const text = blockquoteLines.join(" ").trim();
      elements.push(
        <blockquote key={elements.length} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(text) }} />
      );
      blockquoteLines = [];
      inBlockquote = false;
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      const Tag = listType;
      elements.push(
        <Tag key={elements.length}>
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
          ))}
        </Tag>
      );
      listItems = [];
      inList = false;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // Horizontal rule
    if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
      flushParagraph();
      flushBlockquote();
      flushList();
      elements.push(<hr key={elements.length} />);
      continue;
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushBlockquote();
      flushList();
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      elements.push(
        <Tag key={elements.length} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(text) }} />
      );
      continue;
    }

    // Blockquote
    if (trimmed.startsWith(">")) {
      flushParagraph();
      flushList();
      inBlockquote = true;
      blockquoteLines.push(trimmed.replace(/^>\s?/, ""));
      continue;
    } else if (inBlockquote) {
      if (trimmed === "") {
        flushBlockquote();
      } else {
        blockquoteLines.push(trimmed);
      }
      continue;
    }

    // Unordered list
    if (trimmed.match(/^[-*]\s+/)) {
      flushParagraph();
      flushBlockquote();
      if (!inList || listType !== "ul") {
        flushList();
        listType = "ul";
      }
      inList = true;
      listItems.push(trimmed.replace(/^[-*]\s+/, ""));
      continue;
    }

    // Ordered list
    if (trimmed.match(/^\d+\.\s+/)) {
      flushParagraph();
      flushBlockquote();
      if (!inList || listType !== "ol") {
        flushList();
        listType = "ol";
      }
      inList = true;
      listItems.push(trimmed.replace(/^\d+\.\s+/, ""));
      continue;
    }

    // Empty line = end of paragraph
    if (trimmed === "") {
      flushParagraph();
      flushBlockquote();
      flushList();
      continue;
    }

    // Regular text
    currentParagraph.push(trimmed);
  }

  // Flush remaining
  flushParagraph();
  flushBlockquote();
  flushList();

  return <div className="prose">{elements}</div>;
}

function formatInlineMarkdown(text: string): string {
  return text
    // Bold + Italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Inline code
    .replace(/`(.+?)`/g, "<code>$1</code>");
}
