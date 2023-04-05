import React from 'react';
import { Typography } from '@mui/material';

type Props = {
  text: string;
};

const SectionHeader = ({ text }: Props) => {
  return (
    <Typography
      variant="h2"
      component="h1"
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >{`<${text}/>`}</Typography>
  );
};

export default SectionHeader;
