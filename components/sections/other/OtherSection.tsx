import { Box, Button, Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react';

import { IOtherContent } from '../../../types/PortfolioContent';
import MarkdownViewer from '../../MarkdownViewer';
import SectionHeader from '../SectionHeader';
import Tags from '../../Tags';

type Props = {
  content: IOtherContent[];
};

const OtherSection = ({ content }: Props) => {
  return (
    <Fragment>
      <SectionHeader text="more_projects" />
      <Grid container spacing={2} sx={{ my: 2 }}>
        {content.map(contentItem => {
          return (
            <Grid item xs={12} md={4} key={contentItem.id}>
              <Box
                sx={{
                  height: '100%',
                  border: theme => `2px solid ${theme.palette.text.secondary}`,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ mb: 2, p: 2 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                      textAlign: {
                        xs: 'center',
                        md: 'left',
                      },
                    }}
                  >
                    {contentItem.title}
                  </Typography>
                  <Tags
                    items={contentItem.tags}
                    gridProps={{
                      sx: {
                        justifyContent: {
                          xs: 'center',
                          md: 'left',
                        },
                      },
                    }}
                  />
                  <MarkdownViewer value={contentItem.content} />
                </Box>
                <Box
                  sx={{
                    mt: 'auto',
                    borderTop: theme =>
                      `2px solid ${theme.palette.text.secondary}`,
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ flex: 1, p: 1 }}>
                    <Button href={contentItem.repositoryUrl} target="_blank">
                      Repository
                    </Button>
                  </Box>
                  {contentItem.websiteUrl && (
                    <Box
                      sx={{
                        flex: 1,
                        p: 1,
                        borderLeft: theme =>
                          `2px solid ${theme.palette.text.secondary}`,
                      }}
                    >
                      <Button href={contentItem.websiteUrl} target="_blank">
                        Website
                      </Button>
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default OtherSection;
