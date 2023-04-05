import { Chip, Grid, GridProps } from '@mui/material';

import React from 'react';

type Props = {
  items: string[];
  gridProps?: GridProps;
};
const Tags = ({ items, gridProps = {} }: Props) => {
  return (
    <Grid {...gridProps} container spacing={1}>
      {items.map((tag, index) => {
        return (
          <Grid item xs="auto" key={index}>
            <Chip
              label={tag}
              color="primary"
              sx={{
                borderRadius: 0,
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Tags;
