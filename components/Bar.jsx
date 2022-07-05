import { Text, Button, Tabs } from '@geist-ui/core';
import { Sun, Moon, Coffee } from '@geist-ui/icons';
import { useState } from 'react';
import styles from '../styles/Bar.module.css';

export default function Bar(props) {
  const [currentPage, gotoPage] = useState(0);
  const onChange = (value) => gotoPage(value);
  const { currentTheme, toggleTheme} = props;

  return (
    <div className={styles['bar']}>
      <div>
        <Text h3 className={styles['bar-title']}><Coffee className={styles['bar-icon']}/> i-spin</Text>
      </div>
      <Tabs className={styles['bar-tabs']} initialValue={0} hideDivider hideBorder onChange={onChange}>
        <Tabs.Item label='Home' value={0} />
        <Tabs.Item label='Commissions' value={1} />
        <Tabs.Item label='Settings' value={2} />
      </Tabs>
      <div className={styles['bar-controls']}>
        <Button iconRight={(currentTheme === 'light') ? <Sun /> : <Moon />} auto onClick={toggleTheme}></Button>
      </div>
    </div>
  )
}