// import React from 'react';
// import { AppBar, Box, Toolbar } from '@mui/material';
// import { StyledLink } from '../Components/atoms/Link/StyledLink';
// import StudioKuhon from '../Assets/Svg/StudioKuhon.svg';
// import { SvgIcon } from '../Components/atoms/SvgIcon';
//
// const Navbar: React.FC = () => {
//   return (
//
//     <AppBar
//       position="static"
//       sx={{ backgroundColor: 'white', boxShadow: 'none' }}
//     >
//       <Toolbar
//         disableGutters
//         sx={{
//           margin: '0 auto',
//           width: '100%',
//           padding: '25px 135px',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             flexGrow: 1,
//             gap: '50px',
//             justifyContent: 'space-between',
//           }}
//         >
//           <SvgIcon svg={StudioKuhon} sx={{ height: 40 }} />
//           <Box sx={{ display: 'flex', gap: '50px' }}>
//             <StyledLink to="/home" type="navbar">
//               Головна
//             </StyledLink>
//             <StyledLink to="/products" type="navbar">
//               Дизайни
//             </StyledLink>
//             <StyledLink to="/furniture" type="navbar">
//               Меблі
//             </StyledLink>
//             <StyledLink to="/about" type="navbar">
//               Про нас
//             </StyledLink>
//           </Box>
//           <StyledLink to="/order" type="navbar" sx={{ color: '#C00021' }}>
//             Замовлення
//           </StyledLink>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };
//
// export default Navbar;

import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledLink } from '../Components/atoms/Link/StyledLink';
import StudioKuhon from '../Assets/Svg/StudioKuhon.svg';
import { SvgIcon } from '../Components/atoms/SvgIcon';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { to: '/home', text: 'Головна' },
    { to: '/products', text: 'Дизайни' },
    { to: '/furniture', text: 'Меблі' },
    { to: '/about', text: 'Про нас' },
  ];

  const drawer = (
    <Box
      sx={{
        width: '250px',
        display: 'flex',
        backgroundColor: 'white',
        // height: '100%',
        flexDirection: 'column',
        padding: '20px',
        gap: '10px',
      }}
    >
      {navLinks.map((link) => (
        <StyledLink key={link.text} to={link.to} type="navbar">
          {link.text}
        </StyledLink>
      ))}
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          margin: '0 auto',
          width: '100%',
          padding: { xs: '25px 20px', md: '25px 135px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            gap: { xs: '20px', md: '50px' },
            justifyContent: 'space-between',
          }}
        >
          <SvgIcon svg={StudioKuhon} sx={{ height: 40 }} />
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: '50px',
            }}
          >
            {navLinks.map((link) => (
              <StyledLink key={link.text} to={link.to} type="navbar">
                {link.text}
              </StyledLink>
            ))}
          </Box>
          <StyledLink to="/order" type="navbar" sx={{ color: '#C00021' }}>
            Замовлення
          </StyledLink>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'block', md: 'none' },
              color: 'black',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'white',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
