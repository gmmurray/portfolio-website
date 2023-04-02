import { BLOG_URL, GAME_URL, LINKEDIN_URL } from '../constants/urls';
import {
  Backdrop,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  useScrollTrigger,
} from '@mui/material';
import React, { Fragment, useCallback, useState } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MessageIcon from '@mui/icons-material/Message';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { pageLinks } from '../constants/links';
import { useContactForm } from './ContactProvider';

const ActionSpeedDial = () => {
  const { openContactForm } = useContactForm();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const [open, setOpen] = useState(false);

  const handleBackToTopClick = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }
    setOpen(false);

    const anchor = document.querySelector(pageLinks.landing.getHashId());

    if (anchor) {
      anchor.scrollIntoView();
    }
  }, []);

  const handleContactClick = useCallback(() => {
    openContactForm();
  }, [openContactForm]);
  return (
    <Fragment>
      <Backdrop open={open} />
      <SpeedDial
        hidden={!trigger}
        ariaLabel="Show website actions"
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <SpeedDialAction
          icon={<KeyboardArrowUpIcon />}
          tooltipTitle="Top"
          tooltipOpen
          onClick={handleBackToTopClick}
          FabProps={{
            sx: {
              color: theme => theme.palette.text.primary,
            },
          }}
          sx={{
            ['& .MuiSpeedDialAction-staticTooltipLabel']: {
              color: theme => theme.palette.text.primary,
            },
          }}
        />
        <SpeedDialAction
          icon={<MessageIcon />}
          tooltipTitle="Contact"
          tooltipOpen
          onClick={handleContactClick}
          FabProps={{
            sx: {
              color: theme => theme.palette.text.primary,
            },
          }}
          sx={{
            ['& .MuiSpeedDialAction-staticTooltipLabel']: {
              color: theme => theme.palette.text.primary,
            },
          }}
        />
        <SpeedDialAction
          icon={<VideogameAssetIcon />}
          tooltipTitle="Game"
          tooltipOpen
          FabProps={{
            href: GAME_URL,
            sx: {
              color: theme => theme.palette.text.primary,
            },
          }}
          sx={{
            ['& .MuiSpeedDialAction-staticTooltipLabel']: {
              color: theme => theme.palette.text.primary,
            },
          }}
        />
        <SpeedDialAction
          icon={<MenuBookIcon />}
          tooltipTitle="Blog"
          tooltipOpen
          FabProps={{
            href: BLOG_URL,
            sx: {
              color: theme => theme.palette.text.primary,
            },
          }}
          sx={{
            ['& .MuiSpeedDialAction-staticTooltipLabel']: {
              color: theme => theme.palette.text.primary,
            },
          }}
        />
        <SpeedDialAction
          icon={<LinkedInIcon />}
          tooltipTitle="LinkedIn"
          tooltipOpen
          FabProps={{
            href: LINKEDIN_URL,
            sx: {
              color: theme => theme.palette.text.primary,
            },
          }}
          sx={{
            ['& .MuiSpeedDialAction-staticTooltipLabel']: {
              color: theme => theme.palette.text.primary,
            },
          }}
        />
      </SpeedDial>
    </Fragment>
  );
};

export default ActionSpeedDial;
