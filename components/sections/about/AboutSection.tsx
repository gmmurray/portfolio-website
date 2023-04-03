/* eslint-disable @next/next/no-img-element */

import { Box, Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react';

import { IAboutContent } from '../../../types/PortfolioContent';
import SectionHeader from '../SectionHeader';

type Props = {
  content: IAboutContent;
};

const AboutSection = ({ content }: Props) => {
  return (
    <Fragment>
      <SectionHeader text="about_me" />
      <Grid container spacing={2}>
        <Grid item xs={12} md="auto" sx={{ textAlign: 'center' }}>
          <img
            src={content.imageUrl}
            alt="photo of Greg"
            style={{ maxHeight: '50vh', maxWidth: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md>
          <Box>
            <Typography
              variant="h6"
              component="p"
              sx={{ color: 'text.secondary' }}
            >
              {content.description}
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Technologies
            </Typography>
            <Grid container spacing={1}>
              {content.technologies.map((item, key) => {
                return (
                  <Grid key={key} item xs={6}>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary' }}
                    >
                      -{item}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AboutSection;
