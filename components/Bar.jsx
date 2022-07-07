import { Text, Button, Tabs } from '@geist-ui/core';
import { Sun, Moon, Coffee } from '@geist-ui/icons';
import { useState } from 'react';
import styles from '../styles/Bar.module.css';

export default function Bar(props) {
  const { themeType, toggleTheme, parallaxRef } = props;
  const [currentPage, gotoPage] = useState(0);
  const onChange = (value) => {
    gotoPage(value);
    parallaxRef.current.scrollTo(value);
  };

  return (
    <div className={styles['bar']}>
      <div>
        <Text h3 className={styles['bar-title']}><Coffee className={styles['bar-icon']}/> i-spin</Text>
      </div>
      <Tabs className={styles['bar-tabs']} value={currentPage} hideDivider onChange={onChange}>
        <Tabs.Item label='Home' value={0} />
        <Tabs.Item label='Gallery' value={1} />
        <Tabs.Item label='Commissions' value={2} />
      </Tabs>
      <div className={styles['bar-controls']}>
        <Button iconRight={(themeType !== 'light') ? <Sun /> : <Moon />} auto onClick={toggleTheme}></Button>
      </div>
    </div>
  )
}