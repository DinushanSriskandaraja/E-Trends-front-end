import React, { lazy, Suspense } from 'react';

const LazyDonationPage = lazy(() => import('./DonationPage'));

const DonationPage = props => (
  <Suspense fallback={null}>
    <LazyDonationPage {...props} />
  </Suspense>
);

export default DonationPage;
