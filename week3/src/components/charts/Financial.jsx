import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloOpenCloseSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/context-provider';

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={FinancialPrimaryXAxis}
      primaryYAxis={FinancialPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true, shared: true }}
      crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[HiloOpenCloseSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]} />
      <SeriesCollectionDirective>
        {financialChartData.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Financial;