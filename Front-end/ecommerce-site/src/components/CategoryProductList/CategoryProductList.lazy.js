import React, { lazy, Suspense } from 'react';

const LazyCategoryProductList = lazy(() => import('./CategoryProductList'));

const CategoryProductList = props => (
  <Suspense fallback={null}>
    <LazyCategoryProductList {...props} />
  </Suspense>
);

export default CategoryProductList;
