import React from 'react';
import { Typography } from '@mui/material';

type Props = {
  text: string;
};

const SectionHeader = ({ text }: Props) => {
  return <Typography variant="h2" component="h1">{`<${text}/>`}</Typography>;
};

export default SectionHeader;
