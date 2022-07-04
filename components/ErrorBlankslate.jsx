import { Code, Divider, Text } from '@geist-ui/core';
import { AlertOctagon } from '@geist-ui/icons';
import styles from '../styles/Error.module.css';

export default function ErrorBlankslate(props) {
  return (
    <div className={styles['blankslate-page']}>
      <div className={styles['blankslate-title']}>
        <AlertOctagon size={45} />
        <Text h2>An Error Occured.</Text>
      </div>
      <Divider />
      <div className={styles['blankslate-content']}>
        <Text h6>Refresh this page, or contact site admin if issue persists.</Text>
        <Code block>{props.stack}</Code>
      </div>
    </div>
  )
}