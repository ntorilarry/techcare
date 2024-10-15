
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const StackedLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    // Define the chart options
    const option = {
      title: {
        text: "Blood Pressure",
        textStyle: {
          fontFamily: "Manrope",
          color: "#072635",
          fontWeight: "bold",
        },
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Systolic", "Diastolic"],
        textStyle: {
          fontFamily: "Manrope",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,

        data: [
          "Oct, 2023",
          "Nov, 2023",
          "Dec, 2024",
          "Jan, 2024",
          "Feb, 2024",
          "Mar, 2024",
        ],
        axisTick: {
          alignWithLabel: true,
        },
        splitLine: {
          show: true,
          interval: (index) => index === 0, // Show only one vertical grid line at the origin
          lineStyle: {
            color: "#0726353e",
            width: 1, // Thicker grid line at origin
          },
        },
        axisLabel: {
          textStyle: {
            fontFamily: "Manrope",
            color: "#072635",
            fontWeight: "bold",
          },
        },
      },
      yAxis: {
        type: "value",
        min: 60,
        max: 180,
        splitLine: {
          show: true,
          lineStyle: {
            color: "#0726353e",
            width: 1,
          },
        },
        axisLabel: {
          textStyle: {
            fontFamily: "Manrope",
            color: "#072635",
            fontWeight: "bold",
          },
        },
      },
      series: [
        {
          name: "Systolic",
          type: "line",

          data: [110, 60, 110, 90, 70, 80],
          smooth: true, // Makes the line curved
          lineStyle: {
            width: 3, // Thicker lines
          },
          itemStyle: {
            color: "#8C6FE6", // Color of the 'Email' line
          },
          symbolSize: 10, // Larger dots
        },
        {
          name: "Diastolic",
          type: "line",

          data: [120, 115, 160, 110, 150, 155],
          smooth: true, // Makes the line curved
          lineStyle: {
            width: 3,
          },
          itemStyle: {
            color: "#E66FD2", // Color of the 'Union Ads' line
          },
          symbolSize: 10,
        },
      ],
      textStyle: {
        fontFamily: "Manrope", // Apply Manrope font globally
      },
    };

    // Set the chart options
    myChart.setOption(option);

    // Function to handle window resizing
    const resizeChart = () => {
      myChart.resize();
    };

    // Add event listener for window resizing
    window.addEventListener("resize", resizeChart);

    // Cleanup on component unmount
    return () => {
      myChart.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, []);

  return (
    <div className="bg-[#F4F0FE] mb-6 mx-auto">
      <div className="h-80 w-full" ref={chartRef}></div>{" "}
      {/* Adjust height and width */}
    </div>
  );
};

export default StackedLineChart;
