import React, { Suspense } from 'react';
import LPaneCategs from './LPaneCategs';
import { BarLoader } from 'react-spinners';
import LPaneRatedHigh from './LPaneRatedHigh';

const LPane = () => {
  return (
    <div>
      <Suspense fallback={<BarLoader/>}>
        <LPaneCategs/>
        <LPaneRatedHigh />
      </Suspense>
    </div>
  );
};

export default LPane;