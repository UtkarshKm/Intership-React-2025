import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, SplineAreaSeries } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/context-provider';

const AreaChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="area-chart"
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} type="SplineArea" />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default AreaChart;