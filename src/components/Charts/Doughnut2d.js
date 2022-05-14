import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
	const chartConfigs = {
    type: 'doughnut2d', // The chart type
		width: '400', // Width of the chart
		height: '400', // Height of the chart
		dataFormat: 'json', // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				//Set the chart caption
				caption: 'Stars Per Languages',
        theme: 'fusion',
        decimals: 0,
        doughnutRadius: "45%",
        showPercentValues: 0,
        theme: "candy"
        // paletteColors: "#f0db4f"
			},
			// Chart Data
			data: data
		}
	};
	return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
