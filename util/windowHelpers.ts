export const getScrollbarWidth = () => {
  if (typeof window === 'undefined') {
    return 0;
  }

  return window.innerWidth - window.document.body.clientWidth;
};

export const getNavbarHeight = () => {
  if (typeof window === 'undefined') {
    return 0;
  }

  return document.getElementById('navbar')?.clientHeight ?? 0;
};
