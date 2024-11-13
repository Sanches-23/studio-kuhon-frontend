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
          // maxWidth: 1440,
          // width: '100%',
          color: '#FFFFFF',
          padding: '90px 135px 106px',
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
      >
        <SvgIcon
          svg={StudioKuhon2}
          sx={{ height: 100, marginBottom: '60px' }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '60px 135px 106px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <StyledLink to="/products" type="footer" sx={{ color: 'white' }}>
              Дизайни
            </StyledLink>
            <StyledLink to="/products" type="footer" sx={{ color: 'white' }}>
              Меблі
            </StyledLink>
            <StyledLink to="/products" type="footer" sx={{ color: 'white' }}>
              Про нас
            </StyledLink>
            <StyledLink to="/products" type="footer" sx={{ color: 'white' }}>
              Зв&#39;язатись
            </StyledLink>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <StyledTypography
              text={'Контакти'}
              sx={{ fontWeight: '600', color: 'white', fontSize: '30px' }}
            />
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
              gap: '32px',
              alignSelf: 'flex-end',
            }}
          >
            <StyledTypography
              type={'paragraph'}
              text={'Email: mukomela.oleg@gmail.com'}
              sx={{ fontSize: '30px', color: 'white' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <StyledTypography
                type={'paragraph'}
                text={'+380678672400'}
                sx={{ fontSize: '24px', color: 'white' }}
              />
              <StyledTypography
                type={'paragraph'}
                text={'+380973402568'}
                sx={{ fontSize: '24px', color: 'white' }}
              />
            </Box>
            <StyledTypography
              type={'paragraph'}
              text={'вул. Трудова 29, Хмельницький'}
              sx={{ fontSize: '30px', color: 'white' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
