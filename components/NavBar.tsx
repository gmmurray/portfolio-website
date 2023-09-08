import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import React, { Fragment, useCallback, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { pageLinks } from '../constants/links';
import { useIsInViewport } from '../util/useIsInViewport';

const links = [
  pageLinks.about,
  pageLinks.experiences,
  pageLinks.featured,
  pageLinks.other,
];

const getButtonColor = (isVisible: boolean, theme: Theme) =>
  theme.palette.text[isVisible ? 'primary' : 'secondary'];

const NavBar = () => {
  const theme = useTheme();

  const buttonColors = {
    about: getButtonColor(useIsInViewport(pageLinks.about.getHashId()), theme),
    experiences: getButtonColor(
      useIsInViewport(pageLinks.experiences.getHashId()),
      theme,
    ),
    featured: getButtonColor(
      useIsInViewport(pageLinks.featured.getHashId()),
      theme,
    ),
    other: getButtonColor(useIsInViewport(pageLinks.other.getHashId()), theme),
  };

  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | undefined>(
    undefined,
  );

  const handleOpenMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) =>
      setMenuAnchor(event.currentTarget),
    [],
  );

  const handleCloseMenu = useCallback(() => setMenuAnchor(undefined), []);

  return (
    <Fragment>
      <AppBar position="sticky" id="navbar">
        <Toolbar
          sx={{ backgroundColor: theme => theme.palette.background.default }}
        >
          <Container
            maxWidth="xl"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Box>
              <Link href="/" passHref>
                <IconButton>
                  <Image
                    src="/favicon.ico"
                    alt="greg murray logo"
                    height="40"
                    width="40"
                  />
                </IconButton>
              </Link>
            </Box>
            <Box sx={{ ml: 'auto', display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" onClick={handleOpenMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={menuAnchor}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={!!menuAnchor}
                onClose={handleCloseMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {links.map(link => {
                  const color =
                    buttonColors[link.id as keyof typeof buttonColors];
                  return (
                    <MenuItem
                      key={link.id}
                      onClick={handleCloseMenu}
                      component={Link}
                      href={link.getHref()}
                    >
                      <Typography textAlign="center" sx={{ color }}>
                        {link.label}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
            <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'block' } }}>
              {links.map(link => {
                const color =
                  buttonColors[link.id as keyof typeof buttonColors];
                return (
                  <Button
                    key={link.id}
                    component={Link}
                    href={link.getHref()}
                    sx={{
                      color,
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
