import React, { lazy, Suspense } from 'react';

const LazyOrderCard = lazy(() => import('./OrderCard'));

const OrderCard = props => (
  <Suspense fallback={null}>
    <LazyOrderCard {...props} />
  </Suspense>
);

export default OrderCard;
