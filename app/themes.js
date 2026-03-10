// Toggle Code From :
// https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9
function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}

function keepTheme() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light')
    }
  } else {
    setTheme('theme-dark')
  }
}

module.exports = {
  setTheme,
  keepTheme
}