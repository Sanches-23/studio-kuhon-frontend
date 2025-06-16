import React from 'react';
import { Box } from '@mui/material';
import { SvgIcon } from '../Components/atoms/SvgIcon';
import StudioKuhon2 from '../Assets/Svg/StudioKuhon2.svg';
import { StyledLink } from '../Components/atoms/Link/StyledLink';
import { StyledTypography } from '../Components/atoms/Typography/StyledTypography';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#1F1F1F' }}>
      <Box
        sx={{
          color: '#FFFFFF',
          padding: { xs: '40px 20px 20px', md: '90px 135px 106px' },
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
      >
        <SvgIcon
          svg={StudioKuhon2}
          sx={{
            height: { xs: 50, md: 100 },
            marginBottom: { xs: '20px', md: '60px' },
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '20px', md: '0' },
            justifyContent: 'space-between',
            marginTop: { xs: '0', md: '60px 135px 106px' },
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '10px', md: '32px' },
            }}
          >
            <StyledLink to="/products" type="footer" sx={{ color: 'white' }}>
              Дизайни
            </StyledLink>
            <StyledLink to="/furniture" type="footer" sx={{ color: 'white' }}>
              Меблі
            </StyledLink>
            <StyledLink to="/about" type="footer" sx={{ color: 'white' }}>
              Про нас
            </StyledLink>
            <StyledLink to="/#" type="footer" sx={{ color: 'white' }}>
              Зв&#39;язатись
            </StyledLink>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '10px', md: '32px' },
            }}
          >
            <StyledTypography text={'Контакти'} sx={{ color: 'white' }} />
            <StyledLink to="#" type="footer" sx={{ color: 'white' }}>
              Viber
            </StyledLink>
            <StyledLink to="#" type="footer" sx={{ color: 'white' }}>
              Facebook
            </StyledLink>
            <StyledLink to="#" type="footer" sx={{ color: 'white' }}>
              Instagram
            </StyledLink>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '10px', md: '32px' },
              alignSelf: { xs: 'none', md: 'flex-end' },
            }}
          >
            <StyledTypography
              type={'paragraph'}
              text={'Email: mukomela.oleg@gmail.com'}
              sx={{ color: 'white' }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: { xs: 'left', md: 'space-between' },
                gap: { xs: '30px', md: 'none' },
              }}
            >
              <StyledTypography
                type={'paragraph'}
                text={'+380678672400'}
                sx={{ fontSize: '16px', color: 'white' }}
              />
              <StyledTypography
                type={'paragraph'}
                text={'+380973402568'}
                sx={{ fontSize: '16px', color: 'white' }}
              />
            </Box>
            <StyledTypography
              type={'paragraph'}
              text={'вул. Трудова 29, Хмельницький'}
              sx={{ color: 'white' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
