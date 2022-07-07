import { Card, Link, Modal, Text } from "@geist-ui/core";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownCard(props) {
  const [visible, setState] = useState(false);

  return (
    <>
      <Card>
        <Text h3>{props.title}</Text>
        <Text
          p
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {truncateText(props.children)}
        </Text>
        <Card.Footer>
          <Link
            onClick={() => {
              setState(true);
            }}
            href="#"
            block
          >
            View Full Content
          </Link>
        </Card.Footer>
      </Card>
      <Modal visible={visible} onClose={() => {setState(false)}} width="80%">
        <Modal.Title>{props.title}</Modal.Title>
        <Modal.Content>
          <Text p>{props.children}</Text>
        </Modal.Content>
      </Modal>
    </>
  );
}

function truncateText(content) {
  return content.length > 20 ? content.substring(0, 17) + "..." : str
}