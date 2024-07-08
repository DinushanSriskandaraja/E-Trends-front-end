import React, { lazy, Suspense } from 'react';

const LazyProductDetail = lazy(() => import('./ProductDetail'));

const ProductDetail = props => (
  <Suspense fallback={null}>
    <LazyProductDetail {...props} />
  </Suspense>
);

export default ProductDetail;
