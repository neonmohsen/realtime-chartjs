import React, { useEffect, useRef } from "react";
import { useInterval } from "react-use";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const LineChart: React.FC = () => {
  const chartRef = useRef<am4charts.XYChart | null>(null);

  useEffect(() => {
    const chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    let data = [];
    let visits = 10;
    for (let i = 1; i < 100; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), value: visits });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 5;
    bullet.circle.fill = am4core.color("#ff0000");

    bullet.adapter.add("visible", (visible, target) => {
      if (target.dataItem === series.dataItems.last) {
        return true;
      }
      return false;
    });

    chartRef.current = chart;

    return () => {
      chart.dispose();
    };
  }, []);

  useInterval(() => {
    if (chartRef.current) {
      // generate and add new data point
      let newDataPoint = generateDataPoint(chartRef.current);
      chartRef.current.addData(newDataPoint, 1);
    }
  }, 1000); // Update every second

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

// Function to generate a new data point
const generateDataPoint = (chart: am4charts.XYChart) => {
  const lastDataPoint = chart.data[chart.data.length - 1];
  const newValue =
    lastDataPoint.value +
    Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  return {
    date: new Date(lastDataPoint.date.getTime() + 24 * 60 * 60 * 1000),
    value: newValue,
  };
};

export default LineChart;
