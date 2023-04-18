const themes = ['primary', 'secondary', 'success', 'warning', 'failure', 'sky_blue', 'sky_purple'];

export const getRandomColor = () => {
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];

  if (randomTheme.indexOf('sky') !== -1)
    return [randomTheme, 'cc'];
  
  const hexOpacity = Math.floor(Math.random() * 20) + 21; // 21-40
  return [randomTheme, hexOpacity];
};