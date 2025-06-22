import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PyramidSeries, AccumulationLegend, AccumulationDataLabel, Inject, Tooltip } from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/context-provider';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id="pyramid-chart"
      legendSettings={{ visible: true, background: 'white' }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[PyramidSeries, AccumulationLegend, AccumulationDataLabel, Tooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Food"
          dataSource={PyramidData}
          xName="x"
          yName="y"
          type="Pyramid"
          width="45%"
          height="80%"
          neckWidth="15%"
          gapRatio={0.03}
          explode={true}
          emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
          dataLabel={{
            visible: true,
            position: 'Inside',
            name: 'text',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Pyramid;