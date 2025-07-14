import React from 'react';
import { useTheme } from '../../shared/lib/theme/useTheme';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={{ margin: 16 }}>
      Сменить тему (текущая: {theme})
    </button>
  );
} 