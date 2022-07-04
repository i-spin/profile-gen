import { Button } from '@geist-ui/core';
import { Sun, Moon } from '@geist-ui/icons';

export default function Bar(props) {
  return (
    <div className="bar">
      <Button icon={(themeType === 'light') ? <Sun /> : <Moon />} onClick={() => dispatch(toggle())}>{themeType}</Button>
    </div>
  )
}