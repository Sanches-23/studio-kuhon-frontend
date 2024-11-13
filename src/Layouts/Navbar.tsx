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
          <SvgIcon svg={StudioKuhon} sx={{ height: 40 }} />
          <Box sx={{ display: 'flex', gap: '50px' }}>
            <StyledLink to="/home" type="navbar">
              Головна
            </StyledLink>
            <StyledLink to="/products" type="navbar">
              Дизайни
            </StyledLink>
            <StyledLink to="/furniture" type="navbar">
              Меблі
            </StyledLink>
            <StyledLink to="/about" type="navbar">
              Про нас
            </StyledLink>
          </Box>
        </Box>
        <StyledLink to="/order" type="navbar" sx={{ color: '#C00021' }}>
          Замовлення
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
