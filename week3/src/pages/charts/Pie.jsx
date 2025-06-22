import React from 'react';

import { ChartsHeader } from '../../components';
import { Doughnut as PieChart } from '../../components/charts/Pie';
import { ecomPieChartData } from '../../data/dummy.js';

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Chart" title="Pie" />
      <div className="w-full">
        <PieChart id="chart-pie" data={ecomPieChartData} legendVisiblity={true} height="full" />
      </div>
    </div>
  );
};

export default Pie;