/* eslint-disable react/no-children-prop */

import { Box, Link, Typography } from '@mui/material';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

type Props = {
  value?: string;
};
const MarkdownViewer = ({ value = '' }: Props) => {
  return (
    <Box sx={{ mt: 1 }}>
      <ReactMarkdown
        children={value}
        rehypePlugins={[() => rehypeHighlight({ ignoreMissing: true })]}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        components={{
          p({ children }) {
            return (
              <Typography
                variant="h6"
                component="p"
                sx={{ color: theme => theme.palette.text.secondary }}
              >
                {children}
              </Typography>
            );
          },
          a({ children, href }) {
            return <Link href={href}>{children}</Link>;
          },
        }}
      />
    </Box>
  );
};

export default MarkdownViewer;
