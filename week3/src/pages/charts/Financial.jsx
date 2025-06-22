import React from 'react';

import { ChartsHeader } from '../../components';
import { Financial as FinancialChart } from '../../components/charts/Financial';

const Financial = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Chart" title="Financial" />
      <div className="w-full">
        <FinancialChart />
      </div>
    </div>
  );
};

export default Financial;