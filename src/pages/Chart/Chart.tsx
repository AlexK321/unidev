import { Area } from '@ant-design/charts';
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { toJS } from "mobx";
import { useEffect } from "react";


export const Chart = observer(() => {
  const { chartStore } = useStore();
  const chartData = chartStore.chartData && toJS(chartStore.chartData).data;

  useEffect(() => {
    chartStore.getChartDataAction()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const config = {
    data: chartData || [],
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };

  return (
    <Area {...config} />
  );
});
