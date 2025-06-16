import React from 'react';
import { Box, useTheme } from '@mui/material';
import ReviewsSlider from '../Components/organisms/ReviewsSlider';
import ProjectsSlider from '../Components/organisms/ProjectsSlider';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <ProjectsSlider></ProjectsSlider>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ReviewsSlider></ReviewsSlider>
    </Box>
  );
};

export default Home;
