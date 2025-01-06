import { NavigateFunction } from 'react-router-dom';

export const navigateAndScroll = (navigate: NavigateFunction, path: string) => {
  window.scrollTo(0, 0);
  navigate(path);
}; 