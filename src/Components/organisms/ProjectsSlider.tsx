import React from 'react';
import { Box, useTheme } from '@mui/material';
import projectsData from '../../sliderAPI/ProjectSlider/projects.json';
import { StyledTypography } from '../atoms/Typography/StyledTypography';
import { SliderContainer } from '../../sliderAPI';

type Project = {
  image: string;
  value: string;
  header: string;
  text: string;
};

const ProjectsSlider: React.FC = () => {
  const theme = useTheme();
  const items = projectsData.map((project: Project, index) => {
    return (
      <Box
        key={index}
        sx={{
          display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'space-between',
          // width: 'auto',
          // alignItems: 'center',
          // textAlign: 'center',
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.header}
          sx={{
            // width: '100%',
            maxWidth: '425px',
            height: 'auto',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            // width: 'auto',
            // alignItems: 'center',
            // textAlign: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              margin: '135px 65px 0',
              gap: '60px',
            }}
          >
            <StyledTypography
              type={'heading'}
              text={project.value}
              sx={{
                fontSize: '84px',
                color: theme.palette.text.secondary,
                fontWeight: '600',
              }}
            />
            <StyledTypography
              type={'paragraph'}
              text={project.header}
              sx={{
                fontSize: '32px',
                color: theme.palette.text.secondary,
                textTransform: 'uppercase',
              }}
            />
          </Box>
          <StyledTypography
            type={'paragraph'}
            text={project.text}
            sx={{
              marginLeft: '65px',
              fontSize: '40px',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}
          />
        </Box>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 50%, ${theme.palette.background.default} 50%)`,
      }}
    >
      <Box
        sx={{
          margin: '0 auto',
          // position: 'relative',
          // padding: '0 135px 0',
        }}
      >
        <SliderContainer
          items={items}
          type="projects"
          autoplay={true}
          loop={true}
          progress={true}
        />
      </Box>
    </Box>
  );
};

export default ProjectsSlider;
