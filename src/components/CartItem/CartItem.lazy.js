import React, { lazy, Suspense } from 'react';

const LazyCartItem = lazy(() => import('./CartItem'));

const CartItem = props => (
  <Suspense fallback={null}>
    <LazyCartItem {...props} />
  </Suspense>
);

export default CartItem;
