import React from 'react';

import { ChartsHeader } from '../../components';
import { ColorMapping as ColorMappingChart } from '../../components/charts/ColorMapping';

const ColorMapping = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Chart" title="Color Mapping" />
      <div className="w-full">
        <ColorMappingChart />
      </div>
    </div>
  );
};

export default ColorMapping;