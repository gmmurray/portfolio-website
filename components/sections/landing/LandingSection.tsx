import { BLOG_URL, GAME_URL, LINKEDIN_URL } from '../../../constants/urls';
import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';

import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MessageIcon from '@mui/icons-material/Message';
import React from 'react';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { useContactForm } from '../../ContactProvider';

const LandingSection = () => {
  const { openContactForm } = useContactForm();
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box>
        <Image src="/icon.png" alt="greg logo" height="200" width="200" />
      </Box>
      <Box>
        <Typography variant="h1">Welcome</Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="h4" sx={{ color: 'text.secondary' }}>
          My name is Greg
        </Typography>
      </Box>
      <Stack spacing={1} direction="row">
        <Tooltip title="Contact">
          <IconButton color="primary" size="large" onClick={openContactForm}>
            <MessageIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Game">
          <IconButton
            color="primary"
            size="large"
            href={GAME_URL}
            target="_blank"
          >
            <VideogameAssetIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Blog">
          <IconButton
            color="primary"
            size="large"
            href={BLOG_URL}
            target="_blank"
          >
            <MenuBookIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            color="primary"
            size="large"
            href={LINKEDIN_URL}
            target="_blank"
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default LandingSection;
