import { Text, Button, Tabs } from '@geist-ui/core';
import { Sun, Moon } from '@geist-ui/icons';
import { useState } from 'react';
import styles from '../styles/Bar.module.css';

export default function Bar(props) {
  const { themeType, toggleTheme, parallaxRef, extraPages, title } = props;
  let totalPages = 0;
  const [currentPage, gotoPage] = useState(0);
  const onChange = (value) => {
    gotoPage(value);
    parallaxRef.current.scrollTo(value);
  };

  return (
    <div className={styles['bar']}>
      <div>
        <Text h3 className={styles['bar-title']}>{title}</Text>
      </div>
      <Tabs className={styles['bar-tabs']} value={currentPage} hideDivider onChange={onChange}>
        <Tabs.Item label='Home' value={totalPages++} />
        <Tabs.Item label='Gallery' value={totalPages++} />
        {
          extraPages.map((p) => (
            <Tabs.Item key={p.name} label={p.name} value={totalPages++} />
          ))
        }
      </Tabs>
      <div className={styles['bar-controls']}>
        <Button iconRight={(themeType !== 'light') ? <Sun /> : <Moon />} auto onClick={toggleTheme}></Button>
      </div>
    </div>
  )
}