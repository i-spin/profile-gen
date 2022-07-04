import { Divider, Loading, Text } from '@geist-ui/core';
import styles from '../styles/Blankslate.module.css';

export default function LoadingBlankslate() {
  return (
    <div className={styles['blankslate-page']}>
      <div className={styles['blankslate-title']}>
        <Loading />
        <Text h2>Loading...</Text>
      </div>
      <Divider />
      <div className={styles['blankslate-content']}>
        <Text h6>Refresh this page if it is loading for too long.</Text>
      </div>
    </div>
  )
}