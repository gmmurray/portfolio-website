/* eslint-disable @next/next/no-img-element */

import { Box, Fade, Grid, IconButton, Typography } from '@mui/material';
import React, { Fragment, useCallback, useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IFeaturedContent } from '../../../types/PortfolioContent';
import MarkdownViewer from '../../MarkdownViewer';
import SectionHeader from '../SectionHeader';
import Tags from '../../Tags';
import { pageLinks } from '../../../constants/links';

type Props = {
  content: IFeaturedContent[];
};

const FeaturedSection = ({ content }: Props) => {
  const [visibleProjectIndex, setVisibleProjectIndex] = useState(0);

  const resetSectionRoute = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    document.querySelector(pageLinks.featured.getHashId())?.scrollIntoView();
  }, []);

  const prevDisabled = visibleProjectIndex === 0;
  const handlePrevClick = useCallback(() => {
    if (prevDisabled) {
      return;
    }

    resetSectionRoute();
    setVisibleProjectIndex(state => Math.max(0, state - 1));
  }, [prevDisabled, resetSectionRoute]);

  const nextDisabled = visibleProjectIndex === content.length - 1;
  const handleNextClick = useCallback(() => {
    if (nextDisabled) {
      return;
    }

    resetSectionRoute();
    setVisibleProjectIndex(state => Math.min(state + 1, content.length - 1));
  }, [content.length, nextDisabled, resetSectionRoute]);

  const visibleProject = content[visibleProjectIndex];

  return (
    <Fragment>
      <SectionHeader text="featured_projects" />
      <Grid container spacing={1} sx={{ my: 2, flex: 1 }}>
        <Grid
          item
          sx={{
            display: {
              xs: 'none',
              lg: 'flex',
            },
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={handlePrevClick}
            disabled={prevDisabled}
            edge="start"
          >
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} lg sx={{ flex: 1 }}>
          <Fade in unmountOnExit>
            <Grid container spacing={2} sx={{ height: '100%' }}>
              <Grid
                item
                xs={12}
                lg={6}
                sx={{
                  display: 'flex',
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    flex: 1,
                    border: theme =>
                      `2px solid ${theme.palette.text.secondary}`,
                    height: {
                      xs: '40vh',
                      lg: '100%',
                    },
                  }}
                >
                  <img
                    src={visibleProject.imageUrl}
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'contain',
                    }}
                    alt={`${visibleProject.title} image`}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: {
                    xs: 'flex',
                    lg: 'none',
                  },
                  alignItems: 'center',
                }}
              >
                <IconButton
                  onClick={handlePrevClick}
                  disabled={prevDisabled}
                  edge="start"
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton
                  onClick={handleNextClick}
                  disabled={nextDisabled}
                  edge="end"
                  sx={{ ml: 'auto' }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    textAlign: {
                      xs: 'center',
                      md: 'left',
                    },
                  }}
                >
                  {visibleProject.title}
                </Typography>
                <Tags
                  items={visibleProject.tags}
                  gridProps={{
                    sx: {
                      justifyContent: {
                        xs: 'center',
                        md: 'left',
                      },
                    },
                  }}
                />
                <Box>
                  <MarkdownViewer value={visibleProject.content} />
                </Box>
              </Grid>
            </Grid>
          </Fade>
        </Grid>
        <Grid
          item
          sx={{
            display: {
              xs: 'none',
              lg: 'flex',
            },
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={handleNextClick}
            disabled={nextDisabled}
            edge="end"
          >
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FeaturedSection;
function SlideProps(arg0: string) {
  throw new Error('Function not implemented.');
}
