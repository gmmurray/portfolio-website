import { Box, Fade, Grid, Tab, Typography } from '@mui/material';
import React, { Fragment, useMemo, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import { IExperienceContent } from '../../../types/PortfolioContent';
import SectionHeader from '../SectionHeader';

type Props = {
  content: IExperienceContent[];
};

const ExperiencesSection = ({ content }: Props) => {
  const [selectedTab, setSelectedTab] = useState('0');
  const { employers, details } = useMemo(
    () => getExperienceDetails(content),
    [content],
  );
  return (
    <Fragment>
      <SectionHeader text="experiences" />
      <TabContext value={selectedTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'text.secondary' }}>
          <TabList
            onChange={(e, newValue) => setSelectedTab(newValue)}
            allowScrollButtonsMobile
            scrollButtons="auto"
            variant="scrollable"
          >
            {employers.map(emp => {
              return (
                <Tab
                  key={emp.tabValue}
                  value={emp.tabValue}
                  label={emp.employer}
                />
              );
            })}
          </TabList>
        </Box>
        {details.map(d => {
          return (
            <TabPanel key={d.tabValue} value={d.tabValue}>
              <Fade in timeout={250}>
                <Box>
                  <Typography variant="h4" component="h2">
                    {d.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {d.dateString}
                  </Typography>
                  {d.feats.map((feat, index) => {
                    return (
                      <Typography key={index} variant="h6" component="p">
                        -{feat}
                      </Typography>
                    );
                  })}
                </Box>
              </Fade>
            </TabPanel>
          );
        })}
      </TabContext>
    </Fragment>
  );
};

export default ExperiencesSection;

const getExperienceDetails = (content: IExperienceContent[]) => {
  let employers: { employer: string; tabValue: string }[] = [];
  let details: {
    tabValue: string;
    title: IExperienceContent['title'];
    feats: IExperienceContent['feats'];
    dateString: IExperienceContent['dateString'];
  }[] = [];

  content.forEach(({ employer, title, feats, dateString }, index) => {
    const tabValue = index.toString();
    employers.push({ employer, tabValue });
    details.push({ title, feats, dateString, tabValue });
  });

  return {
    employers,
    details,
  };
};
