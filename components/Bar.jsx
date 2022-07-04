export default function Bar(props) {
  return (
    <div className="bar">
      <Button icon={(themeType === 'light') ? <Sun /> : <Moon />} onClick={switchThemes}>{themeType}</Button>
    </div>
  )
}