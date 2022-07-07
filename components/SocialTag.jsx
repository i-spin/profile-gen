import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useClipboard, useToasts, Tooltip } from "@geist-ui/core";

export default function SocialTag(props) {
  const { platform, user, iconSize } = props;
  const { setToast } = useToasts();
  const { copy } = useClipboard();

  switch (platform) {
    case "Discord":
      return (
        <Link underline href='#' onClick={() => {
          copy(user);
          setToast({text: 'Copied to clipboard.', delay: 2000});
        }}>
          <FaDiscord size={iconSize} style={{ margin: "0.5rem" }} />
          <Tooltip text={'Click to copy.'}>{user}</Tooltip>
        </Link>
      );
    case "GitHub":
      return (
        <Link icon underline href={`https://github.com/${user}`}>
          <FaGithub size={iconSize} style={{ margin: "0.5rem" }} />
          {user}
        </Link>
      );
    case "Twitter":
      return (
        <Link icon underline href={`https://twitter.com/${user}`}>
          <FaTwitter size={iconSize} style={{ margin: "0.5rem" }} />
          {user}
        </Link>
      );
    case "Instagram":
      return (
        <Link icon underline href={`https://instagram.com/${user}`}>
          <FaInstagram size={iconSize} style={{ margin: "0.5rem" }} />
          {user}
        </Link>
      );
    default:
      return;
  }
}
