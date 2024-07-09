import React, { lazy, Suspense } from 'react';

const LazyCategoryCard = lazy(() => import('./CategoryCard'));

const CategoryCard = props => (
  <Suspense fallback={null}>
    <LazyCategoryCard {...props} />
  </Suspense>
);

export default CategoryCard;
