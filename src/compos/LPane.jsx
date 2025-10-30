import React, { Suspense } from 'react';
import LPaneCategs from './LPaneCategs';
import { BarLoader } from 'react-spinners';

const LPane = () => {
  return (
    <div>
      <Suspense fallback={<BarLoader/>}>
        <LPaneCategs/>
      </Suspense>
    </div>
  );
};

export default LPane;