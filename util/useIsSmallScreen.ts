import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export const useIsSmallScreen = (down?: Breakpoint) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(down ?? 'md'));

  return isSmallScreen;
};
