'use client';

import { useEffect, useState } from 'react';
import { Icon } from './Icons';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('iam-theme');
      if (saved === 'dark') {
        document.documentElement.dataset.theme = 'dark';
        setDark(true);
      }
    } catch (e) {}
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    try {
      if (next) {
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('iam-theme', 'dark');
      } else {
        delete document.documentElement.dataset.theme;
        localStorage.setItem('iam-theme', 'light');
      }
    } catch (e) {}
  };

  return (
    <button className="theme-toggle" onClick={toggle} type="button">
      <Icon name={dark ? 'sun' : 'moon'} size={16} />
      <span>{dark ? 'Light mode' : 'Dark mode'}</span>
    </button>
  );
}
