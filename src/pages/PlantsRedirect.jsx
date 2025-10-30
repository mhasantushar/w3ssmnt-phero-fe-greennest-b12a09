import React from 'react';
import { Navigate } from 'react-router';

const PlantsRedirect = () => {
  return (
    <div>
      <Navigate to= '/category/1' />
    </div>
  );
};

export default PlantsRedirect;