// // // import { useGetProductsQuery } from '../../API/Store/queries/products/products.query';
// // // import { Product } from '../../API/Store/queries/products/types/Product';
// // // import React from 'react';
// // // import { StyledTypography } from '../atoms/Typography/StyledTypography';
// // //
// // // const DesignList: React.FC = () => {
// // //   const { data: designs, error, isLoading } = useGetProductsQuery();
// // //   // const { data: designs, error, isLoading } = useGetProductsQuery(undefined, { refetchOnMountOrArgChange: true });
// // //   console.log(designs);
// // //
// // //   if (isLoading) return <p>Loading products...</p>;
// // //   if (error) return <p>Error fetching products</p>;
// // //
// // //   if (!designs || designs.length === 0) {
// // //     return <p>Product not found</p>;
// // //   }
// // //
// // //   return (
// // //     <div>
// // //       {designs.map((design: Product) => (
// // //         <div key={design.id}>
// // //           <StyledTypography
// // //             type={'heading'}
// // //             text={design.title}
// // //           ></StyledTypography>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };
// // //
// // // export default DesignList;
//
// // // USABLE
// // import { useGetProductsQuery } from '../../API/Store/queries/products/products.query';
// // import React from 'react';
// // import { StyledTypography } from '../atoms/Typography/StyledTypography';
// // import { Product } from '../../API/Store/queries/products/types/Product';
// // import { Box } from '@mui/material';
// //
// // interface DesignListProps {
// //   filters: {
// //     category?: string;
// //     sort?: 'asc' | 'desc';
// //     limit?: number;
// //   };
// // }
// //
// // const DesignList: React.FC<DesignListProps> = ({ filters }) => {
// //   const { data: products, error, isLoading } = useGetProductsQuery(filters);
// //
// //   if (isLoading) return <StyledTypography type="paragraph" text="Завантаження..." />;
// //   if (error) return <StyledTypography type="paragraph" text="Помилка завантаження" />;
// //   if (!products?.length) return <StyledTypography type="paragraph" text="Товарів не знайдено" />;
// //
// //   return (
// //     <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 3 }}>
// //       {products.map((product: Product) => (
// //         <Box key={product.id} sx={{ p: 2, border: '1px solid #eee', borderRadius: 2 }}>
// //           <img
// //             src={product.image}
// //             alt={product.title}
// //             style={{
// //               width: '100%',
// //               height: 200,
// //               objectFit: 'contain',
// //               marginBottom: 16
// //             }}
// //           />
// //           <StyledTypography type="heading" text={product.title} />
// //           <StyledTypography type="paragraph" text={`Категорія: ${product.category}`} />
// //           <StyledTypography type="paragraph" text={`Ціна: $${product.price}`} />
// //         </Box>
// //       ))}
// //     </Box>
// //   );
// // };
// //
// // export default DesignList;
//
// // // newest USABLE
// // import React, { useMemo } from 'react';
// // import { Box } from '@mui/material';
// // import { useGetProductsQuery } from '../../API/Store/queries/products/products.query';
// // import { Product } from '../../API/Store/queries/products/types/Product';
// // import { StyledTypography } from '../atoms/Typography/StyledTypography';
// //
// // interface DesignListProps {
// //   filters?: { category?: string };
// //   searchQuery?: string;
// //   sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'title';
// // }
// //
// // const DesignList: React.FC<DesignListProps> = ({
// //   filters,
// //   searchQuery = '',
// //   sortBy = 'title',
// // }) => {
// //   // Завжди викликаємо хук useGetProductsQuery – незалежно від стану
// //   const { data: designs, error, isLoading } = useGetProductsQuery(filters);
// //
// //   // useMemo завжди викликається, навіть якщо designs undefined, повертаємо порожній масив
// //   const filteredProducts = useMemo(() => {
// //     const allProducts: Product[] = designs || [];
// //     let filtered = allProducts.filter((product: Product) =>
// //       product.title.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //     // Сортування
// //     switch (sortBy) {
// //       case 'price-asc':
// //         filtered = filtered.sort((a, b) => a.price - b.price);
// //         break;
// //       case 'price-desc':
// //         filtered = filtered.sort((a, b) => b.price - a.price);
// //         break;
// //       case 'name-asc':
// //       case 'title':
// //         filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
// //         break;
// //       case 'name-desc':
// //         filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
// //         break;
// //       default:
// //         break;
// //     }
// //     return filtered;
// //   }, [designs, searchQuery, sortBy]);
// //
// //   // Оскільки всі хуки викликаються завжди, ми можемо умовно рендерити вміст далі
// //   if (isLoading) return <p>Loading products...</p>;
// //   if (error) return <p>Error fetching products</p>;
// //   if (filteredProducts.length === 0) return <p>Product not found</p>;
// //
// //   return (
// //     <Box>
// //       {filteredProducts.map((design: Product) => (
// //         <div key={design.id}>
// //           <StyledTypography type="heading" text={design.title} />
// //         </div>
// //       ))}
// //     </Box>
// //   );
// // };
// //
// // export default DesignList;
//
// // // Components/organisms/DesignList.tsx
// // import React, { useEffect, useState } from 'react';
// // import { Box, Button } from '@mui/material';
// // import { useLazyGetProductsQuery } from '../../API/Store/queries/products/products.query';
// // import { Product } from '../../API/Store/queries/products/types/Product';
// // import { StyledTypography } from '../atoms/Typography/StyledTypography';
// //
// // interface DesignListProps {
// //   filters?: { category?: string };
// //   searchQuery?: string;
// //   sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'title';
// // }
// //
// // const productsPerPage = 6;
// //
// // const DesignList: React.FC<DesignListProps> = ({
// //   filters,
// //   searchQuery = '',
// //   sortBy = 'title',
// // }) => {
// //   // Локальний стан для всіх завантажених продуктів
// //   const [allProducts, setAllProducts] = useState<Product[]>([]);
// //   // Поточна сторінка (для обчислення offset)
// //   const [page, setPage] = useState<number>(1);
// //
// //   // Використовуємо lazy query для отримання продуктів із серверу
// //   const [fetchProducts, { data, error, isLoading }] = useLazyGetProductsQuery();
// //
// //   // Завантаження нової порції продуктів при зміні сторінки або фільтрів
// //   useEffect(() => {
// //     // Створюємо об'єкт параметрів для запиту
// //     const params = {
// //       limit: productsPerPage,
// //       offset: (page - 1) * productsPerPage,
// //       category: filters?.category,
// //     };
// //     fetchProducts(params);
// //   }, [page, filters, fetchProducts]);
// //
// //   // Додаємо нові продукти, коли data оновлюється
// //   useEffect(() => {
// //     if (data) {
// //       // Об'єднуємо вже завантажені продукти з новою порцією
// //       setAllProducts((prev) => {
// //         // Якщо page === 1, замінюємо список, інакше додаємо нові продукти
// //         return page === 1 ? data : [...prev, ...data];
// //       });
// //     }
// //   }, [data, page]);
// //
// //   // Клієнтська фільтрація та сортування
// //   const filteredProducts = React.useMemo(() => {
// //     let filtered = [...allProducts].filter((product: Product) =>
// //       product.title.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //     switch (sortBy) {
// //       case 'price-asc':
// //         filtered.sort((a, b) => a.price - b.price);
// //         break;
// //       case 'price-desc':
// //         filtered.sort((a, b) => b.price - a.price);
// //         break;
// //       case 'name-asc':
// //       case 'title':
// //         filtered.sort((a, b) => a.title.localeCompare(b.title));
// //         break;
// //       case 'name-desc':
// //         filtered.sort((a, b) => b.title.localeCompare(a.title));
// //         break;
// //       default:
// //         break;
// //     }
// //     return filtered;
// //   }, [allProducts, searchQuery, sortBy]);
// //
// //   // Обробник кнопки "Переглянути більше"
// //   const handleLoadMore = () => {
// //     setPage((prev) => prev + 1);
// //   };
// //
// //   if (isLoading && page === 1) return <p>Loading products...</p>;
// //   if (error) return <p>Error fetching products</p>;
// //   if (allProducts.length === 0) return <p>Product not found</p>;
// //
// //   return (
// //     <Box>
// //       {filteredProducts.map((product: Product) => (
// //         <Box key={product.id} sx={{ mb: 2 }}>
// //           <StyledTypography type="heading" text={product.title} />
// //         </Box>
// //       ))}
// //       {filteredProducts.length % productsPerPage === 0 &&
// //         filteredProducts.length > 0 && (
// //           <Box sx={{ textAlign: 'center', mt: 3 }}>
// //             <Button variant="contained" onClick={handleLoadMore}>
// //               Переглянути більше
// //             </Button>
// //           </Box>
// //         )}
// //       {isLoading && page > 1 && <p>Loading more products...</p>}
// //     </Box>
// //   );
// // };
// //
// // export default DesignList;
//
// // ТРЕБА БУДЕ СПРОБУВАТИ ДЛЯ ВЕЛИКИХ АПІ
// // import React, { useState, useEffect, useMemo } from 'react';
// // import { Box, Button } from '@mui/material';
// // import { useLazyGetProductsQuery } from '../../API/Store/queries/products/products.query';
// // import { Product } from '../../API/Store/queries/products/types/Product';
// // import { StyledTypography } from '../atoms/Typography/StyledTypography';
// //
// // interface DesignListProps {
// //   filters?: { category?: string };
// //   searchQuery?: string;
// //   sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'title';
// // }
// //
// // const productsPerPage = 6;
// //
// // const DesignList: React.FC<DesignListProps> = ({ filters, searchQuery = '', sortBy = 'title' }) => {
// //   // Локальний стан для зберігання всіх завантажених продуктів
// //   const [allProducts, setAllProducts] = useState<Product[]>([]);
// //   // Локальний стан для контролю поточної сторінки
// //   const [page, setPage] = useState<number>(1);
// //
// //   // Використовуємо lazy query для отримання продуктів
// //   const [fetchProducts, { data, isLoading, error, isFetching }] = useLazyGetProductsQuery();
// //
// //   // Запускаємо запит щоразу, коли змінюється сторінка або фільтри
// //   useEffect(() => {
// //     const offset = (page - 1) * productsPerPage;
// //     fetchProducts({ limit: productsPerPage, offset, category: filters?.category });
// //   }, [page, filters, fetchProducts]);
// //
// //   // При отриманні даних додаємо нову порцію до списку (уникаємо дублікатів)
// //   useEffect(() => {
// //     if (data) {
// //       setAllProducts(prev =>
// //         page === 1
// //           ? data
// //           : [
// //             ...prev,
// //             ...data.filter(
// //               (product) => !prev.some((prevProduct) => prevProduct.id === product.id)
// //             ),
// //           ]
// //       );
// //     }
// //   }, [data, page]);
// //
// //   // Клієнтська фільтрація та сортування (використовуємо useMemo для оптимізації)
// //   const filteredProducts = useMemo(() => {
// //     const products = allProducts;
// //     let filtered = products.filter((product: Product) =>
// //       product.title.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //     switch (sortBy) {
// //       case 'price-asc':
// //         filtered.sort((a, b) => a.price - b.price);
// //         break;
// //       case 'price-desc':
// //         filtered.sort((a, b) => b.price - a.price);
// //         break;
// //       case 'name-asc':
// //       case 'title':
// //         filtered.sort((a, b) => a.title.localeCompare(b.title));
// //         break;
// //       case 'name-desc':
// //         filtered.sort((a, b) => b.title.localeCompare(a.title));
// //         break;
// //       default:
// //         break;
// //     }
// //     return filtered;
// //   }, [allProducts, searchQuery, sortBy]);
// //
// //   // Отримуємо ті продукти, які зараз потрібно відобразити
// //   const visibleProducts = useMemo(() => {
// //     return filteredProducts.slice(0, visibleCount());
// //   }, [filteredProducts]);
// //
// //   // Обчислюємо, скільки продуктів потрібно показувати (залежно від сторінки)
// //   function visibleCount() {
// //     return page * productsPerPage;
// //   }
// //
// //   const handleLoadMore = () => {
// //     setPage((prev) => prev + 1);
// //   };
// //
// //   if (isLoading && page === 1) return <p>Loading products...</p>;
// //   if (error) return <p>Error fetching products</p>;
// //   if (filteredProducts.length === 0) return <p>Product not found</p>;
// //
// //   return (
// //     <Box>
// //       {visibleProducts.map((product: Product) => (
// //         <Box key={product.id} sx={{ mb: 2 }}>
// //           <StyledTypography type="heading" text={product.title} />
// //         </Box>
// //       ))}
// //       {/* Відображаємо кнопку "Переглянути більше", якщо останній запит повернув повну порцію */}
// //       {data && data.length === productsPerPage && (
// //         <Box sx={{ textAlign: 'center', mt: 3 }}>
// //           <Button variant="contained" onClick={handleLoadMore} disabled={isFetching}>
// //             Переглянути більше
// //           </Button>
// //         </Box>
// //       )}
// //       {isFetching && page > 1 && <p>Loading more products...</p>}
// //     </Box>
// //   );
// // };
// //
// // export default DesignList;
//
// import React, { useState, useMemo } from 'react';
// import { Box, Button } from '@mui/material';
// import { useGetProductsQuery } from '../../API/Store/queries/products/products.query';
// import { Product } from '../../API/Store/queries/products/types/Product';
// import { StyledTypography } from '../atoms/Typography/StyledTypography';
//
// interface DesignListProps {
//   filters?: { category?: string };
//   searchQuery?: string;
//   sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'title';
// }
//
// const productsPerPage = 6;
//
// const DesignList: React.FC<DesignListProps> = ({
//   filters,
//   searchQuery = '',
//   sortBy = 'title',
// }) => {
//   // Викликаємо автоматичний запит для завантаження всіх товарів (фільтрація за категорією, якщо задана)
//   const { data: designs, error, isLoading } = useGetProductsQuery(filters);
//
//   // Локальний стан для контролю, скільки товарів відображати
//   const [visibleCount, setVisibleCount] = useState<number>(productsPerPage);
//
//   // Клієнтська фільтрація та сортування отриманих товарів
//   const filteredProducts = useMemo(() => {
//     const allProducts: Product[] = designs || [];
//     let filtered = allProducts.filter((product: Product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     switch (sortBy) {
//       case 'price-asc':
//         filtered.sort((a, b) => a.price - b.price);
//         break;
//       case 'price-desc':
//         filtered.sort((a, b) => b.price - a.price);
//         break;
//       case 'name-asc':
//       case 'title':
//         filtered.sort((a, b) => a.title.localeCompare(b.title));
//         break;
//       case 'name-desc':
//         filtered.sort((a, b) => b.title.localeCompare(a.title));
//         break;
//       default:
//         break;
//     }
//     return filtered;
//   }, [designs, searchQuery, sortBy]);
//
//   // Продукти, які потрібно відобразити – це перші visibleCount товарів
//   const visibleProducts = useMemo(() => {
//     return filteredProducts.slice(0, visibleCount);
//   }, [filteredProducts, visibleCount]);
//
//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + productsPerPage);
//   };
//
//   if (isLoading) return <p>Loading products...</p>;
//   if (error) return <p>Error fetching products</p>;
//   if (filteredProducts.length === 0) return <p>Product not found</p>;
//
//   return (
//     <Box>
//       {visibleProducts.map((product: Product) => (
//         <Box key={product.id} sx={{ mb: 2 }}>
//           <StyledTypography type="paragraph" text={product.title} />
//         </Box>
//       ))}
//       {visibleCount < filteredProducts.length && (
//         <Box sx={{ textAlign: 'center', mt: 3 }}>
//           <Button variant="contained" onClick={handleLoadMore}>
//             Переглянути більше
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };
//
// export default DesignList;

// import React, { useState, useEffect } from 'react';
// import { Box, Button, CircularProgress } from '@mui/material';
// import { useLazyGetProductsQuery } from '../../API/Store/queries/products/products.query';
// import { Product, ProductsResponse } from '../../API/Store/queries/products/types/Product';
// import { StyledTypography } from '../atoms/Typography/StyledTypography';
//
// interface DesignListProps {
//   filters?: { category?: string };
//   searchQuery?: string;
//   sortBy?: 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc';
// }
//
// const productsPerPage = 6;
//
// const DesignList: React.FC<DesignListProps> = ({
//                                                  filters,
//                                                  searchQuery = '',
//                                                  sortBy = 'title-asc',
//                                                }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [allProducts, setAllProducts] = useState<Product[]>([]);
//   const [total, setTotal] = useState(0);
//
//   const [sortField, order] = sortBy.split('-') as ['price' | 'title', 'asc' | 'desc'];
//
//   const [fetchProducts, { data, isLoading, isFetching }] =
//     useLazyGetProductsQuery();
//
//   useEffect(() => {
//     const loadProducts = async () => {
//       const response = await fetchProducts({
//         limit: productsPerPage,
//         skip: (currentPage - 1) * productsPerPage,
//         category: filters?.category,
//         q: searchQuery,
//         sortBy: sortField,
//         order,
//       });
//       console.log(response.data);
//       if (response.data) {
//         setAllProducts(prev =>
//           currentPage === 1
//             ? response.data.products
//             : [...prev, ...response.data.products]
//         );
//         setTotal(response.data.total);
//       }
//     };
//
//     loadProducts();
//   }, [currentPage, filters, searchQuery, sortField, order]);
//
//   const handleLoadMore = () => {
//     setCurrentPage((prev) => prev + 1);
//   };
//
//   if (isLoading) return <CircularProgress />;
//   if (!allProducts.length) return <p>Товари не знайдено</p>;
//
//   return (
//     <Box>
//       {allProducts.map((product) => (
//         <Box key={`${product.id}-${product.category}`} sx={{ mb: 2 }}>
//           <StyledTypography type="paragraph" text={product.title} />
//         </Box>
//       ))}
//
//       {allProducts.length < total && (
//         <Box sx={{ textAlign: 'center', mt: 3 }}>
//           <Button
//             variant="contained"
//             onClick={handleLoadMore}
//             disabled={isFetching}
//           >
//             Переглянути більше
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };
//
// export default DesignList;

// // робочий варік
// import React, { useState, useEffect } from 'react';
// import { Box, Button, CircularProgress } from '@mui/material';
// import { useLazyGetProductsQuery } from '../../API/Store/queries/products/products.query';
// import {
//   Product,
//   ProductsResponse,
// } from '../../API/Store/queries/products/types/Product';
// import { StyledTypography } from '../atoms/Typography/StyledTypography';
//
// interface DesignListProps {
//   filters?: { category?: string };
//   searchQuery?: string;
//   sortBy?: 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc';
// }
//
// const productsPerPage = 6;
//
// const DesignList: React.FC<DesignListProps> = ({
//   filters,
//   searchQuery = '',
//   sortBy = 'title-asc',
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [allProducts, setAllProducts] = useState<Product[]>([]);
//   const [total, setTotal] = useState(0);
//
//   const [sortField, order] = sortBy.split('-') as [
//     'price' | 'title',
//     'asc' | 'desc',
//   ];
//
//   const [fetchProducts, { data, isFetching }] = useLazyGetProductsQuery();
//
//   // Скидаємо стан при зміні фільтрів
//   useEffect(() => {
//     setCurrentPage(1);
//     setAllProducts([]);
//   }, [filters?.category, searchQuery, sortBy]);
//
//   // Завантаження продуктів
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const response = await fetchProducts({
//           limit: productsPerPage,
//           skip: (currentPage - 1) * productsPerPage,
//           category: filters?.category,
//           q: searchQuery,
//           sortBy: sortField,
//           order,
//         }).unwrap();
//
//         if (response) {
//           setAllProducts((prev) =>
//             currentPage === 1
//               ? response.products
//               : [...prev, ...response.products]
//           );
//           setTotal(response.total);
//         }
//       } catch (error) {
//         console.error('Помилка завантаження продуктів:', error);
//       }
//     };
//
//     loadProducts();
//   }, [currentPage, filters, searchQuery, sortField, order]);
//
//   const handleLoadMore = () => {
//     setCurrentPage((prev) => prev + 1);
//   };
//
//   return (
//     <Box>
//       {allProducts.map((product) => (
//         <Box key={product.id} sx={{ mb: 2 }}>
//           <StyledTypography type="paragraph" text={product.title} />
//         </Box>
//       ))}
//
//       {allProducts.length < total && !isFetching && (
//         <Box sx={{ textAlign: 'center', mt: 3 }}>
//           <Button
//             variant="contained"
//             onClick={handleLoadMore}
//             disabled={isFetching}
//           >
//             Переглянути більше
//           </Button>
//         </Box>
//       )}
//
//       {isFetching && (
//         <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
//       )}
//     </Box>
//   );
// };
//
// export default DesignList;

// import React, { useState, useEffect, useCallback } from 'react';
// import { Box, Button, CircularProgress, Typography } from '@mui/material';
// import { useLazyGetProductsQuery } from '../../API/Store/queries/products/products.query';
// import {
//   Product,
//   ProductsResponse,
// } from '../../API/Store/queries/products/types/Product';
// import { StyledTypography } from '../atoms/Typography/StyledTypography';
//
// interface DesignListProps {
//   filters?: { category?: string };
//   searchQuery?: string;
//   sortBy?: 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc';
// }
//
// const productsPerPage = 6;
//
// const DesignList: React.FC<DesignListProps> = ({
//   filters,
//   searchQuery = '',
//   sortBy = 'title-asc',
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [allProducts, setAllProducts] = useState<Product[]>([]);
//   const [total, setTotal] = useState(0);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//
//   const [sortField, order] = sortBy.split('-') as [
//     'price' | 'title',
//     'asc' | 'desc',
//   ];
//
//   const [fetchProducts, { isFetching, isLoading }] = useLazyGetProductsQuery();
//
//   const loadProducts = useCallback(async () => {
//     try {
//       const response = await fetchProducts({
//         limit: productsPerPage,
//         skip: (currentPage - 1) * productsPerPage,
//         category: filters?.category,
//         q: searchQuery,
//         sortBy: sortField,
//         order,
//       }).unwrap();
//
//       setAllProducts((prev) =>
//         currentPage === 1
//           ? response.products
//           : [
//               ...prev,
//               ...response.products.filter(
//                 (p) => !prev.some((ep) => ep.id === p.id)
//               ),
//             ]
//       );
//       setTotal(response.total);
//       setErrorMessage(null);
//       console.log(response);
//     } catch (error) {
//       setErrorMessage('Не вдалося завантажити товари. Спробуйте ще раз.');
//     }
//   }, [currentPage, filters, searchQuery, sortField, order]);
//
//   // Скидання стану при зміні параметрів
//   useEffect(() => {
//     const controller = new AbortController();
//     setCurrentPage(1);
//     setAllProducts([]);
//     loadProducts();
//     return () => controller.abort();
//   }, [filters?.category, searchQuery, sortBy]);
//
//   // Завантаження нової сторінки
//   useEffect(() => {
//     if (currentPage > 1) loadProducts();
//   }, [currentPage]);
//
//   const handleLoadMore = () => setCurrentPage((prev) => prev + 1);
//
//
//   return (
//     <Box>
//       {errorMessage && (
//         <Typography color="error" sx={{ mb: 2 }}>
//           {errorMessage}
//         </Typography>
//       )}
//
//       {allProducts.map((product) => (
//         <Box key={`${product.id}-${product.category}`} sx={{ mb: 2 }}>
//           <StyledTypography type="paragraph" text={product.title} />
//         </Box>
//       ))}
//
//       {allProducts.length < total && !isFetching && (
//         <Box sx={{ textAlign: 'center', mt: 3 }}>
//           <Button
//             variant="contained"
//             onClick={handleLoadMore}
//             disabled={isFetching}
//           >
//             Переглянути більше
//           </Button>
//         </Box>
//       )}
//
//       {(isLoading || isFetching) && (
//         <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
//       )}
//     </Box>
//   );
// };
//
// export default DesignList;

// // DesignList.tsx робочий
// import React, { useState, useEffect, useCallback } from 'react';
// import { Box, Button, CircularProgress, Typography } from '@mui/material';
// import { useLazyGetProductsQuery } from '../../API/Store/queries/products/products.query';
// import {
//   Product,
//   ProductsResponse,
// } from '../../API/Store/queries/products/types/Product';
// import { StyledTypography } from '../atoms/Typography/StyledTypography';
//
// interface DesignListProps {
//   filters?: { category?: string };
//   searchQuery?: string;
//   sortBy?: 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc';
// }
//
// const productsPerPage = 6;
//
// const DesignList: React.FC<DesignListProps> = ({
//   filters,
//   searchQuery = '',
//   sortBy = 'title-asc',
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [allProducts, setAllProducts] = useState<Product[]>([]);
//   const [total, setTotal] = useState(0);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//
//   const [prevFilters, setPrevFilters] = useState<string>('');
//
//   const [sortField, order] = sortBy.split('-') as [
//     'price' | 'title',
//     'asc' | 'desc',
//   ];
//
//   const [fetchProducts, { isFetching, isLoading }] = useLazyGetProductsQuery();
//
//   const currentFilterKey = `${filters?.category || ''}-${searchQuery}-${sortBy}`;
//
//   const loadProducts = useCallback(async () => {
//     try {
//       const response = await fetchProducts({
//         limit: productsPerPage,
//         skip: (currentPage - 1) * productsPerPage,
//         category: filters?.category,
//         q: searchQuery,
//         sortBy: sortField,
//         order,
//       }).unwrap();
//
//       setAllProducts((prev) => {
//         if (prevFilters !== currentFilterKey) return response.products;
//         return [
//           ...prev,
//           ...response.products.filter(
//             (p) => !prev.some((ep) => ep.id === p.id)
//           ),
//         ];
//       });
//
//       setTotal(response.total);
//       setErrorMessage(null);
//       setPrevFilters(currentFilterKey);
//     }
//     catch (error) {
//       setErrorMessage('Не вдалося завантажити товари. Спробуйте ще раз.');
//       setAllProducts([]);
//     }
//   }, [currentPage, filters, searchQuery, sortField, order, currentFilterKey]);
//
//   useEffect(() => {
//     const controller = new AbortController();
//
//     if (prevFilters !== currentFilterKey) {
//       setCurrentPage(1);
//       setAllProducts([]);
//     }
//
//     loadProducts();
//     return () => controller.abort();
//   }, [currentFilterKey, loadProducts]);
//
//   return (
//     <Box>
//       {errorMessage && (
//         <Typography color="error" sx={{ mb: 2 }}>
//           {errorMessage}
//         </Typography>
//       )}
//
//       {allProducts.map((product) => (
//         <Box key={`${product.id}-${product.category}`} sx={{ mb: 2 }}>
//           <StyledTypography type="paragraph" text={product.title} />
//         </Box>
//       ))}
//
//       {allProducts.length < total && !isFetching && (
//         <Box sx={{ textAlign: 'center', mt: 3 }}>
//           <Button
//             variant="contained"
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//             disabled={isFetching}
//           >
//             Переглянути більше
//           </Button>
//         </Box>
//       )}
//
//       {(isLoading || isFetching) && (
//         <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
//       )}
//     </Box>
//   );
// };
//
// export default DesignList;

import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useLazyGetProductsQuery } from '../../API/Store/queries/products/products.query';
import {
  Product,
  ProductsResponse,
} from '../../API/Store/queries/products/types/Product';
import { StyledTypography } from '../atoms/Typography/StyledTypography';

type DesignListProps = {
  filters?: { category?: string };
  searchQuery?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc';
};

const productsPerPage = 6;

const DesignList: React.FC<DesignListProps> = ({
  filters,
  searchQuery = '',
  sortBy = 'title-asc',
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [prevFilterKey, setPrevFilterKey] = useState<string>('');

  const [sortField, order] = sortBy.split('-') as [
    'price' | 'title',
    'asc' | 'desc',
  ];

  const currentFilterKey = JSON.stringify({
    category: filters?.category,
    searchQuery,
    sortBy,
  });

  const [fetchProducts, { isFetching, isLoading }] = useLazyGetProductsQuery();

  const loadProducts = useCallback(async () => {
    try {
      setErrorMessage(null);
      const response = await fetchProducts({
        limit: productsPerPage,
        skip: (currentPage - 1) * productsPerPage,
        category: filters?.category,
        q: searchQuery,
        sortBy: sortField,
        order,
      }).unwrap();

      setAllProducts((prev) => {
        // Повністю оновлюємо дані при зміні фільтрів або першій сторінці
        if (currentPage === 1 || prevFilterKey !== currentFilterKey) {
          return response.products;
        }
        // Додаємо нові продукти для пагінації
        return [
          ...prev,
          ...response.products.filter(
            (p) => !prev.some((ep) => ep.id === p.id)
          ),
        ];
      });

      setTotal(response.total);
      setPrevFilterKey(currentFilterKey);
    } catch (error) {
      setErrorMessage('Не вдалося завантажити товари. Спробуйте ще раз.');
      setAllProducts([]);
    }
  }, [
    currentPage,
    filters,
    searchQuery,
    sortField,
    order,
    currentFilterKey,
    prevFilterKey,
  ]);

  // Обробка змін фільтрів та першого завантаження
  useEffect(() => {
    // const controller = new AbortController();

    if (prevFilterKey !== currentFilterKey) {
      setCurrentPage(1); // Скидаємо сторінку при зміні фільтрів
    }
    loadProducts();
    // return () => controller.abort();
  }, [currentFilterKey, loadProducts]);

  // Обробка пагінації
  useEffect(() => {
    if (currentPage > 1) {
      // const controller = new AbortController();
      loadProducts();
      // return () => controller.abort();
    }
  }, [currentPage]);

  return (
    <Box>
      {errorMessage && (
        <Typography color="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Typography>
      )}

      {allProducts.map((product) => (
        <Box key={`${product.id}-${product.category}`} sx={{ mb: 2 }}>
          <StyledTypography type="paragraph" text={product.title} />
        </Box>
      ))}

      {allProducts.length < total && !isFetching && (
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button
            variant="contained"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={isFetching}
          >
            Переглянути більше
          </Button>
        </Box>
      )}

      {(isLoading || isFetching) && (
        <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
      )}
    </Box>
  );
};

export default DesignList;
