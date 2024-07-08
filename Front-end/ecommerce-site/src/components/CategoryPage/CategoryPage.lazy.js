import React, { lazy, Suspense } from 'react';

const LazyCategoryPage = lazy(() => import('./CategoryPage'));

const CategoryPage = props => (
  <Suspense fallback={null}>
    <LazyCategoryPage {...props} />
  </Suspense>
);

export default CategoryPage;
