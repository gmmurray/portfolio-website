import AboutSection from '../components/sections/about/AboutSection';
import ActionSpeedDial from '../components/ActionSpeedDial';
import { Box } from '@mui/material';
import ExperiencesSection from '../components/sections/experiences/ExperiencesSection';
import FeaturedSection from '../components/sections/featured/FeaturedSection';
import { GetStaticProps } from 'next';
import { IPortfolioContent } from '../types/PortfolioContent';
import LandingSection from '../components/sections/landing/LandingSection';
import NavBar from '../components/NavBar';
import OtherSection from '../components/sections/other/OtherSection';
import SectionContainer from '../components/SectionContainer';
import axios from 'axios';
import { pageLinks } from '../constants/links';

type Props = {
  content: IPortfolioContent;
};

const HomePage = ({
  content: { about, experience, featured, other },
}: Props) => {
  return (
    <Box>
      <SectionContainer first id={pageLinks.landing.id}>
        <LandingSection />
      </SectionContainer>
      <NavBar />
      <SectionContainer id={pageLinks.about.id}>
        <AboutSection content={about} />
      </SectionContainer>
      <SectionContainer
        id={pageLinks.experiences.id}
        centerHorizontally={false}
      >
        <ExperiencesSection content={experience} />
      </SectionContainer>
      <SectionContainer id={pageLinks.featured.id} centerHorizontally={false}>
        <FeaturedSection content={featured} />
      </SectionContainer>
      <SectionContainer id={pageLinks.other.id}>
        <OtherSection content={other} />
      </SectionContainer>
      <ActionSpeedDial />
    </Box>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const url = process.env.PORTFOLIO_API_URL;
  const apiKey = process.env.PORTFOLIO_API_KEY;
  if (!url || !apiKey) {
    throw new Error('invalid environment config');
  }

  const response = await axios.get<{
    success: boolean;
    data: IPortfolioContent;
  }>(url, {
    headers: {
      'x-api-key': apiKey,
    },
  });

  return {
    props: {
      content: response.data.data,
    },
  };
};
