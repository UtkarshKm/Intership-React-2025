import React from 'react';

import { ChartsHeader } from '../../components';
import { Pyramid as PyramidChart } from '../../components/charts/Pyramid';

const Pyramid = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Chart" title="Pyramid" />
      <div className="w-full">
        <PyramidChart />
      </div>
    </div>
  );
};

export default Pyramid;