import React from 'react';

import { ChartsHeader } from '../../components';
import BarChart from '../../components/charts/Bar';

const Bar = () => {
  console.log('Rendering Bar page with BarChart component');
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Chart" title="Bar" />
      <div className="w-full">
        <BarChart />
      </div>
    </div>
  );
};

export default Bar;