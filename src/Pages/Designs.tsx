// // // import DesignList from '../Components/organisms/designList.js';
// // // import React from 'react';
// // // // import { Suspense } from 'react';
// // //
// // // const Designs: React.FC = () => {
// // //   return (
// // //     <>
// // //       {/*<Suspense fallback={<p>Loading...</p>}>*/}
// // //       <DesignList />
// // //       {/*</Suspense>*/}
// // //     </>
// // //   );
// // // };
// // //
// // // export default Designs;
//
// // простий хороший приклад
// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Collapse,
// //  Button, Paper,
// // } from '@mui/material';
// //
// // const Designs: React.FC = () => {
// //
// //   const [expanded, setExpanded] = useState(false);
// //   const handleExpandClick = () => {
// //     setExpanded(!expanded);
// //   };
// //
// //   return (
// //
// //     <Box position="relative" style={{ marginBottom: '20px' }}>
// //       <Button onClick={handleExpandClick} variant="contained" color="primary">
// //         {expanded ? 'Згорнути' : 'Розгорнути'}
// //       </Button>
// //
// //       {/* Використовуємо position: absolute для перекриття */}
// //       <Box
// //         position="absolute"
// //         top="100%"
// //         left={0}
// //         width="100%"
// //         zIndex={1} // Забезпечуємо, щоб елемент був поверх інших
// //       >
// //         <Collapse in={expanded}>
// //           <Paper elevation={3} style={{ padding: '16px', marginTop: '10px' }}>
// //             <p>Це розширюваний контент. Він не зсуває інші елементи.</p>
// //             <p>Він перекриває їх, використовуючи `position: absolute`.</p>
// //           </Paper>
// //         </Collapse>
// //       </Box>
// //
// //       {/* Інший контент, який не зсувається */}
// //       <Box mt={2}>
// //         <p>Цей контент залишається на місці, навіть коли елемент розширюється.</p>
// //       </Box>
// //     </Box>
// //   );
// // };
// //
// // export default Designs;
//
// // // USABLE
// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Typography,
// //   Collapse,
// //   Checkbox,
// //   FormControlLabel,
// //   Divider,
// //   IconButton,
// //   Paper,
// // } from '@mui/material';
// // import { ExpandMore, ExpandLess } from '@mui/icons-material';
// // import DesignList from '../Components/organisms/designList';
// //
// // const Designs: React.FC = () => {
// //   const [expanded, setExpanded] = useState(false);
// //   const [selectedFilters, setSelectedFilters] = useState({
// //     styles: new Set<string>(),
// //     colors: new Set<string>(),
// //     materials: new Set<string>(),
// //     handles: new Set<string>(),
// //   });
// //
// //   const filterOptions = {
// //     styles: [
// //       'Loft',
// //       'Bachelor',
// //       'Provence',
// //       'Scandinavian',
// //       'Modern',
// //       'Hi-Tech',
// //       'Mediterranean',
// //     ],
// //     colors: ['Темна', 'Світла', 'Кольорова'],
// //     materials: ['Крашені', 'Пльоночні', 'Дерев’яні'],
// //     handles: ['Стандартні', 'Інтегровані'],
// //   };
// //
// //   // Обробник для зміни стану фільтрів
// //   const handleFilterToggle = (category: string, value: string) => {
// //     const newFilters = { ...selectedFilters };
// //     const set = newFilters[category as keyof typeof selectedFilters];
// //     if (set.has(value)) {
// //       set.delete(value);
// //     } else {
// //       set.add(value);
// //     }
// //     setSelectedFilters(newFilters);
// //   };
// //
// //   // Обробник для розкриття/закриття фільтрів
// //   const handleExpandClick = () => {
// //     setExpanded(!expanded);
// //   };
// //
// //   return (
// //     <Box sx={{ p: 3 }}>
// //       <Typography
// //         variant="h1"
// //         sx={{
// //           mb: 3,
// //           fontSize: '2.5rem',
// //           fontWeight: 'bold',
// //         }}
// //       >
// //         ГОТОВІ ДИЗАЙНИ
// //       </Typography>
// //
// //       {/* Кнопка для розкриття/закриття фільтрів */}
// //       <Box position="relative" sx={{ mb: 2 }}>
// //         <Box
// //           sx={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             justifyContent: 'space-between',
// //             cursor: 'pointer',
// //             p: 1,
// //           }}
// //           onClick={handleExpandClick}
// //         >
// //           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
// //             Стилі + Кольорова гама + Матеріал фасадів + Тип ручок
// //           </Typography>
// //           <IconButton size="small" sx={{ p: 0 }}>
// //             {expanded ? <ExpandLess /> : <ExpandMore />}
// //           </IconButton>
// //         </Box>
// //
// //         {/* Виїжджаючий блок фільтрів */}
// //         <Box
// //           sx={{
// //             position: 'absolute',
// //             top: '100%',
// //             left: 0,
// //             width: '100%',
// //             zIndex: 1,
// //           }}
// //         >
// //           <Collapse in={expanded}>
// //             <Paper elevation={3} sx={{ p: 2, mt: 1 }}>
// //               <Box
// //                 sx={{
// //                   display: 'flex',
// //                   flexDirection: 'row',
// //                   flexWrap: 'wrap',
// //                   gap: '40px',
// //                   flex: '1 1 0' /*grow shrink basis*/,
// //                 }}
// //               >
// //                 {/* Стилі */}
// //                 <Box sx={{ flex: '1 1 200px' }}>
// //                   <Typography variant="h6" gutterBottom>
// //                     Стилі
// //                   </Typography>
// //                   {filterOptions.styles.map((style) => (
// //                     <FormControlLabel
// //                       key={style}
// //                       control={
// //                         <Checkbox
// //                           checked={selectedFilters.styles.has(style)}
// //                           onChange={() => handleFilterToggle('styles', style)}
// //                         />
// //                       }
// //                       label={style}
// //                     />
// //                   ))}
// //                 </Box>
// //
// //                 {/* Кольорова гама */}
// //                 <Box sx={{ flex: '1 1 200px' }}>
// //                   <Typography variant="h6" gutterBottom>
// //                     Кольорова гама
// //                   </Typography>
// //                   {filterOptions.colors.map((color) => (
// //                     <FormControlLabel
// //                       key={color}
// //                       control={
// //                         <Checkbox
// //                           checked={selectedFilters.colors.has(color)}
// //                           onChange={() => handleFilterToggle('colors', color)}
// //                         />
// //                       }
// //                       label={color}
// //                     />
// //                   ))}
// //                 </Box>
// //
// //                 {/* Матеріал фасадів */}
// //                 <Box sx={{ flex: '1 1 200px' }}>
// //                   <Typography variant="h6" gutterBottom>
// //                     Матеріал фасадів
// //                   </Typography>
// //                   {filterOptions.materials.map((material) => (
// //                     <FormControlLabel
// //                       key={material}
// //                       control={
// //                         <Checkbox
// //                           checked={selectedFilters.materials.has(material)}
// //                           onChange={() =>
// //                             handleFilterToggle('materials', material)
// //                           }
// //                         />
// //                       }
// //                       label={material}
// //                     />
// //                   ))}
// //                 </Box>
// //
// //                 {/* Тип ручок */}
// //                 <Box sx={{ flex: '1 1 200px' }}>
// //                   <Typography variant="h6" gutterBottom>
// //                     Тип ручок
// //                   </Typography>
// //                   {filterOptions.handles.map((handle) => (
// //                     <FormControlLabel
// //                       key={handle}
// //                       control={
// //                         <Checkbox
// //                           checked={selectedFilters.handles.has(handle)}
// //                           onChange={() => handleFilterToggle('handles', handle)}
// //                         />
// //                       }
// //                       label={handle}
// //                     />
// //                   ))}
// //                 </Box>
// //               </Box>
// //             </Paper>
// //           </Collapse>
// //         </Box>
// //       </Box>
// //
// //       <Divider sx={{ my: 3 }} />
// //
// //       {/* Список товарів */}
// //       <DesignList filters={selectedFilters} />
// //     </Box>
// //   );
// // };
// //
// // export default Designs;
//
// // import React, { useState, useEffect } from 'react';
// // import { useSearchParams } from 'react-router-dom';
// // import {
// //   Box,
// //   Typography,
// //   TextField,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// //   // Divider,
// // } from '@mui/material';
// // import DesignList from '../Components/organisms/designList';
// //
// // const CatalogPage: React.FC = () => {
// //   const [searchParams, setSearchParams] = useSearchParams();
// //
// //   const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('search') || '');
// //   const [category, setCategory] = useState<string>(searchParams.get('category') || '');
// //   const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'title'>(
// //     (searchParams.get('sortBy') as any) || 'title'
// //   );
// //   const [currentPage, setCurrentPage] = useState<number>(parseInt(searchParams.get('page') || '1', 10));
// //   // const productsPerPage = 6; // Для майбутньої пагінації
// //
// //   // Оновлення URL-параметрів при зміні фільтрів
// //   useEffect(() => {
// //     const params: Record<string, string> = {};
// //     if (searchQuery) params.search = searchQuery;
// //     if (category) params.category = category;
// //     if (sortBy) params.sortBy = sortBy;
// //     params.page = currentPage.toString();
// //     setSearchParams(params);
// //   }, [searchQuery, category, sortBy, currentPage, setSearchParams]);
// //
// //   return (
// //     <Box sx={{ p: 3 }}>
// //       <Typography variant="h1" sx={{ mb: 3 }}>
// //         Каталог товарів
// //       </Typography>
// //
// //       {/* Фільтри */}
// //       <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
// //         <TextField
// //           label="Пошук"
// //           variant="outlined"
// //           value={searchQuery}
// //           onChange={(e) => {
// //             setSearchQuery(e.target.value);
// //             setCurrentPage(1);
// //           }}
// //         />
// //         <FormControl variant="outlined" sx={{ minWidth: 150 }}>
// //           <InputLabel>Категорія</InputLabel>
// //           <Select
// //             label="Категорія"
// //             value={category}
// //             onChange={(e) => {
// //               setCategory(e.target.value as string);
// //               setCurrentPage(1);
// //             }}
// //           >
// //             <MenuItem value="">
// //               <em>Усі</em>
// //             </MenuItem>
// //             <MenuItem value="electronics">Електроніка</MenuItem>
// //             <MenuItem value="jewelery">Ювелірні вироби</MenuItem>
// //             <MenuItem value="men's clothing">Чоловічий одяг</MenuItem>
// //             <MenuItem value="women's clothing">Жіночий одяг</MenuItem>
// //           </Select>
// //         </FormControl>
// //         <FormControl variant="outlined" sx={{ minWidth: 150 }}>
// //           <InputLabel>Сортувати за</InputLabel>
// //           <Select
// //             label="Сортувати за"
// //             value={sortBy}
// //             onChange={(e) => {
// //               setSortBy(e.target.value as any);
// //               setCurrentPage(1);
// //             }}
// //           >
// //             <MenuItem value="title">За назвою</MenuItem>
// //             <MenuItem value="price-asc">За ціною (зростання)</MenuItem>
// //             <MenuItem value="price-desc">За ціною (спадання)</MenuItem>
// //             <MenuItem value="name-asc">За ім'ям (зростання)</MenuItem>
// //             <MenuItem value="name-desc">За ім'ям (спадання)</MenuItem>
// //           </Select>
// //         </FormControl>
// //       </Box>
// //
// //       {/* Список товарів із застосуванням фільтрів */}
// //       <DesignList filters={{ category: category || undefined }} searchQuery={searchQuery} sortBy={sortBy} />
// //
// //       {/* Пагінація (реалізацію пагінації можна додати пізніше) */}
// //     </Box>
// //   );
// // };
// //
// // export default CatalogPage;
//
// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   // Divider,
// } from '@mui/material';
// import DesignList from '../Components/organisms/designList';
//
// const CatalogPage: React.FC = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//
//   const [searchQuery, setSearchQuery] = useState<string>(
//     searchParams.get('search') || ''
//   );
//   const [category, setCategory] = useState<string>(
//     searchParams.get('category') || ''
//   );
//   const [sortBy, setSortBy] = useState<
//     'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'title'
//   >((searchParams.get('sortBy') as never) || 'title');
//   const [currentPage, setCurrentPage] = useState<number>(
//     parseInt(searchParams.get('page') || '1', 10)
//   );
//
//   // Оновлення URL-параметрів при зміні фільтрів
//   useEffect(() => {
//     const params: Record<string, string> = {};
//     if (searchQuery) params.search = searchQuery;
//     if (category) params.category = category;
//     if (sortBy) params.sortBy = sortBy;
//     params.page = currentPage.toString();
//     setSearchParams(params);
//   }, [searchQuery, category, sortBy, currentPage, setSearchParams]);
//
//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h1" sx={{ mb: 3 }}>
//         Каталог товарів
//       </Typography>
//
//       {/* Фільтри */}
//       <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
//         <TextField
//           label="Пошук"
//           variant="outlined"
//           value={searchQuery}
//           onChange={(e) => {
//             setSearchQuery(e.target.value);
//             setCurrentPage(1);
//           }}
//         />
//         <FormControl variant="outlined" sx={{ minWidth: 150 }}>
//           <InputLabel>Категорія</InputLabel>
//           <Select
//             label="Категорія"
//             value={category}
//             onChange={(e) => {
//               setCategory(e.target.value as string);
//               setCurrentPage(1);
//             }}
//           >
//             <MenuItem value="">
//               <em>Усі</em>
//             </MenuItem>
//             <MenuItem value="electronics">Електроніка</MenuItem>
//             <MenuItem value="jewelery">Ювелірні вироби</MenuItem>
//             <MenuItem value="men's clothing">Чоловічий одяг</MenuItem>
//             <MenuItem value="women's clothing">Жіночий одяг</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl variant="outlined" sx={{ minWidth: 150 }}>
//           <InputLabel>Сортувати за</InputLabel>
//           <Select
//             label="Сортувати за"
//             value={sortBy}
//             onChange={(e) => {
//               setSortBy(e.target.value as never);
//               setCurrentPage(1);
//             }}
//           >
//             <MenuItem value="title">За назвою</MenuItem>
//             <MenuItem value="price-asc">За ціною (зростання)</MenuItem>
//             <MenuItem value="price-desc">За ціною (спадання)</MenuItem>
//             <MenuItem value="name-asc">За ім&#39;ям (зростання)</MenuItem>
//             <MenuItem value="name-desc">За ім&#39;ям (спадання)</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//       <DesignList
//         filters={{ category: category || undefined }}
//         searchQuery={searchQuery}
//         sortBy={sortBy}
//       />
//     </Box>
//   );
// };
//
// export default CatalogPage;

// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import {
//   Box,
// } from '@mui/material';
// import DesignList from '../Components/organisms/designList';
//
// const CatalogPage: React.FC = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
//   const [category, setCategory] = useState(searchParams.get('category') || '');
//   const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'title-asc' | 'title-desc'>(
//     (searchParams.get('sortBy') as never) || 'title-asc'
//   );
//
//   useEffect(() => {
//     const params = new URLSearchParams();
//     if (searchQuery) params.set('search', searchQuery);
//     if (category) params.set('category', category);
//     if (sortBy) params.set('sortBy', sortBy);
//     setSearchParams(params);
//   }, [searchQuery, category, sortBy]);
//
//   return (
//     <Box sx={{ p: 3 }}>
//       {/* ... (фільтри залишаються аналогічними) */}
//       <DesignList
//         filters={{ category: category || undefined }}
//         searchQuery={searchQuery}
//         sortBy={sortBy}
//       />
//     </Box>
//   );
// };
//
// export default CatalogPage;
//
// export default DesignList;", "

// // робочий варік
// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   // Divider,
// } from '@mui/material';
// import DesignList from '../Components/organisms/designList';
//
// const CatalogPage: React.FC = () => {
//
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchQuery, setSearchQuery] = useState(
//     searchParams.get('search') || ''
//   );
//   const [category, setCategory] = useState(searchParams.get('category') || '');
//   const [sortBy, setSortBy] = useState<
//     'price-asc' | 'price-desc' | 'title-asc' | 'title-desc'
//   >((searchParams.get('sortBy') as never) || 'title-asc');
//
//   useEffect(() => {
//     const params = new URLSearchParams();
//     if (searchQuery) params.set('search', searchQuery);
//     if (category) params.set('category', category);
//     if (sortBy) params.set('sortBy', sortBy);
//     setSearchParams(params);
//   }, [searchQuery, category, sortBy, setSearchParams]);
//
//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h1" sx={{ mb: 3 }}>
//         Каталог товарів
//       </Typography>
//
//       {/* Фільтри */}
//       <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
//         <TextField
//           label="Пошук"
//           variant="outlined"
//           value={searchQuery}
//           onChange={(e) => {
//             setSearchQuery(e.target.value);
//             // setCurrentPage(1);
//           }}
//         />
//         <FormControl variant="outlined" sx={{ minWidth: 150 }}>
//           <InputLabel>Категорія</InputLabel>
//           <Select
//             label="Категорія"
//             value={category}
//             onChange={(e) => {
//               setCategory(e.target.value as string);
//               // setCurrentPage(1);
//             }}
//           >
//             <MenuItem value="">
//               <em>Усі</em>
//             </MenuItem>
//             <MenuItem value="electronics">Електроніка</MenuItem>
//             <MenuItem value="jewelery">Ювелірні вироби</MenuItem>
//             <MenuItem value="men's clothing">Чоловічий одяг</MenuItem>
//             <MenuItem value="women's clothing">Жіночий одяг</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl variant="outlined" sx={{ minWidth: 150 }}>
//           <InputLabel>Сортувати за</InputLabel>
//           <Select
//             label="Сортувати за"
//             value={sortBy}
//             onChange={(e) => {
//               setSortBy(e.target.value as never);
//               // setCurrentPage(1);
//             }}
//           >
//             <MenuItem value="title">За назвою</MenuItem>
//             <MenuItem value="price-asc">За ціною (зростання)</MenuItem>
//             <MenuItem value="price-desc">За ціною (спадання)</MenuItem>
//             <MenuItem value="name-asc">За ім&#39;ям (зростання)</MenuItem>
//             <MenuItem value="name-desc">За ім&#39;ям (спадання)</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//       <DesignList
//         filters={{ category: category || undefined }}
//         searchQuery={searchQuery}
//         sortBy={sortBy}
//       />
//     </Box>
//   );
// };
//
// export default CatalogPage;

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import DesignList from '../Components/organisms/designList';
import { useGetCategoriesQuery } from '../API/Store/queries/products/products.query';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  );
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [sortBy, setSortBy] = useState<
    'price-asc' | 'price-desc' | 'title-asc' | 'title-desc'
  >((searchParams.get('sortBy') as never) || 'title-asc');

  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (category) params.set('category', category);
    if (sortBy) params.set('sortBy', sortBy);
    params.delete('page'); // параметр сторінки
    setSearchParams(params);
  }, [searchQuery, category, sortBy]);

  // useEffect(() => {
  //   console.log('Отримані категорії:', categories);
  // }, [categories]);
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" sx={{ mb: 3 }}>
        Каталог товарів
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Пошук"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
        />

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Категорія</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value as string)}
            label="Категорія"
            disabled={isLoading || isError}
          >
            <MenuItem value="">
              <em>Усі категорії</em>
            </MenuItem>
            {isLoading && (
              <MenuItem disabled>
                <CircularProgress size={20} />
              </MenuItem>
            )}
            {categories?.map((category) => (
              <MenuItem key={category.slug} value={category.slug}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Сортування</InputLabel>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as never)}
            label="Сортування"
          >
            <MenuItem value="title-asc">Назва (А-Я)</MenuItem>
            <MenuItem value="title-desc">Назва (Я-А)</MenuItem>
            <MenuItem value="price-asc">Ціна (зростання)</MenuItem>
            <MenuItem value="price-desc">Ціна (спадання)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <DesignList
        filters={{ category: category || undefined }}
        searchQuery={searchQuery}
        sortBy={sortBy}
      />
    </Box>
  );
};

export default CatalogPage;
