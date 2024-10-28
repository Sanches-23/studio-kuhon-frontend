import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { StyledLink } from '../Components/atoms/Link/StyledLink';
import StudioKuhon from '../Assets/Svg/StudioKuhon.svg';
import { SvgIcon } from '../Components/atoms/SvgIcon';

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'white', boxShadow: 'none' }}
    >
      <Toolbar
        disableGutters
        sx={{
          maxWidth: 1440,
          margin: '0 auto',
          width: '100%',
          padding: '25px 135px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            gap: '50px',
          }}
        >
          <SvgIcon svg={StudioKuhon} sx={{ height: 40, marginRight: 2 }} />
          <Box sx={{ display: 'flex', gap: '50px' }}>
            <StyledLink to="/home" underline="hover">
              Головна
            </StyledLink>
            <StyledLink to="/products" underline="hover">
              Дизайни
            </StyledLink>
            <StyledLink to="/furniture" underline="hover">
              Меблі
            </StyledLink>
            <StyledLink to="/about" underline="hover">
              Про нас
            </StyledLink>
          </Box>
        </Box>
        <StyledLink to="/order" underline="hover" sx={{ marginLeft: 2, color: '#C00021' }}>
          Замовлення
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
