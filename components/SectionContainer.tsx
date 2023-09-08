import { Box, Container } from '@mui/material';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { getNavbarHeight, getScrollbarWidth } from '../util/windowHelpers';

type Props = {
  first?: boolean;
  last?: boolean;
  id?: string;
  centerHorizontally?: boolean;
} & PropsWithChildren;
const SectionContainer = ({
  id,
  first = false,
  last = false,
  centerHorizontally = true,
  children,
}: Props) => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const setProperties = () => {
      setScrollbarWidth(getScrollbarWidth());
      setNavbarHeight(getNavbarHeight());
    };

    if (typeof window !== 'undefined') {
      setProperties();
      window.addEventListener('resize', () => {
        setProperties();
      });
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: `calc(100vw - ${scrollbarWidth}px)`,
        maxWidth: `calc(100vw - ${scrollbarWidth}px)`,
        pb: {
          xs: 0,
          lg: last ? 10 : 0,
        },
      }}
    >
      <Container
        id={id}
        maxWidth="xl"
        sx={{
          minHeight: '100vh',
          pt: first ? undefined : `${navbarHeight}px`,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: centerHorizontally ? 'center' : undefined,
            flexDirection: 'column',
            maxWidth: '100%',
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default SectionContainer;
