import React from 'react';
import { Box, Grid2, useMediaQuery, useTheme } from '@mui/material';
import { StyledTypography } from '../Components/atoms/Typography/StyledTypography';

const About: React.FC = () => {
  const theme = useTheme();
  const statisticsData = [
    { value: '19', description: 'років в роботі' },
    { value: '1000+', description: 'задоволених клієнтів' },
    { value: '100+', description: 'унікальних проєктів' },
    { value: '5', description: 'регіонів де втілено наші проєкти' },
  ];
  const isXlScreen = useMediaQuery(theme.breakpoints.up('xl')); // Перевірка, чи екран більше xl

  return (
    <>
      <Box
        sx={{
          padding: { xs: '0 65px', md: '0 135px' },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Grid2
          container
          // sx={
          //   {
          //     // alignItems: 'flex-start',
          //   }
          // }
        >
          <Grid2
            {...{ xs: 12, md: 6 }}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: '35px', md: '100px' },
              alignItems: 'flex-start',
            }}
          >
            <Box
              sx={{
                // flex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <StyledTypography
                text="Про нас"
                type="heading"
                sx={{
                  textTransform: 'uppercase',
                  paddingTop: '60px',
                }}
              />
              <StyledTypography
                type="caption"
                text={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvina sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.'
                }
                sx={{
                  marginTop: '35px',
                  lineHeight: 1.6,
                }}
              />
              {isXlScreen && (
                <StyledTypography
                  type={'caption'}
                  text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'
                  }
                  sx={{
                    lineHeight: 1.6,
                    margin: '35px 0',
                  }}
                />
              )}
            </Box>
            <Box
              component="img"
              src={
                'https://s3-alpha-sig.figma.com/img/9cab/cbd4/6c7bfb6602fc9dd000873783cb709c95?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JX4zJ-BpE0WSDQ718H4XpD~L2JNJFM6YtnuATaKTZJlyNB8cmPl9GmHeVvKRSiHDNmH5Tr9enbx1yuRfEJbjFYJ9xxYSBra3nAi6kMOpMxLEEuGfKhu-1KTh~lZxN5KlPNopdOv0iz~8-fInUL0vbIonSct4QlzjwKmC87e2-DLEgCI0zhIqqoih1aOZ6RsOXISFqqyFp03msbwnCNUkSwRbAkgiWSnUfB4-CG10ArpspalfgikQiq3-AYUTG7nuYbxAQGQ5WAiCTo8XC3oCnOy4UaDhxUg0MIdC2cycCt5PQpfobvjAo7PNWuaU6foCwKAwU5s0UzNDbTgECLqgiQ__'
              }
              alt="imgAbout"
              sx={{
                // margin: '0 auto',
                display: 'block',
                width: '100%',
                maxWidth: { xs: 'auto', md: '500px' },
                height: { xs: '500px', md: 'auto' },
                objectFit: 'cover',
              }}
            />
          </Grid2>

          {/* Другий абзац */}
          {!isXlScreen && (
            <Grid2
              {...{ xs: 12 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <StyledTypography
                type="caption"
                text={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'
                }
                sx={{ lineHeight: 1.6, margin: '40px 0' }}
              />
            </Grid2>
          )}
        </Grid2>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          padding: { xs: '40px 100px', md: '135px' },
          gap: { xs: '20px', md: '40px' },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        {statisticsData.map((prop, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              backgroundColor: theme.palette.background.default,
              borderRadius: '20px',
              padding: '35px 25px',
              textAlign: 'center',
            }}
          >
            <StyledTypography
              text={prop.value}
              type={'heading'}
              sx={{ fontWeight: '600', color: theme.palette.background.paper }}
            />
            <StyledTypography text={prop.description} type={'paragraph'} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default About;
