import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
	const chartConfigs = {
		type: 'bar3d', // The chart type
		width: '400', // Width of the chart
		height: '400', // Height of the chart
		dataFormat: 'json', // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				//Set the chart caption
				caption: 'Most Forked',
				yAxisName: 'Forks',
				xAxisName: 'Repos',
				xAxisNameFontSize: '16px',
				yAxisNameFontSize: '16px'
				// paletteColors: "#f0db4f"
			},
			// Chart Data
			data: data
		}
	};
	return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
