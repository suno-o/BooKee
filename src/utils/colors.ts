const themes = ['primary', 'secondary', 'success', 'warning', 'failure', 'sky_blue', 'sky_purple'];

export const getListItemLightBgColor = (index: number) => {
  const selectedTheme = themes[index%themes.length];

  if (selectedTheme.indexOf('sky') !== -1)
    return [selectedTheme, 'cc'];
  
  const hexOpacity = Math.floor(Math.random() * 20) + 21; // 21-40
  return [selectedTheme, hexOpacity];
};