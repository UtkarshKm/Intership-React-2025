import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Tooltip, Category, DataLabel } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/context-provider';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Bar;