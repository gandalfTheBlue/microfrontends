import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
import { eventEmit } from "./utils/eventBus";
import "./App.css";

const App = () => {
  const clickBubble = ({ data }) => {
    eventEmit("showPieGraph", { country: data[3] });
  };
  const onEvents = {
    click: clickBubble
  };
  return <ReactEcharts option={bubbleOption} onEvents={onEvents} />;
};

export default App;

const data = [
  [
    [28604, 77, 17096869, "澳大利亚", 1990],
    [31163, 77.4, 27662440, "加拿大", 1990],
    [1516, 68, 1154605773, "中国", 1990],
    [13670, 74.7, 10582082, "古巴", 1990],
    [28599, 75, 4986705, "芬兰", 1990],
    [29476, 77.1, 56943299, "法国", 1990],
    [31476, 75.4, 78958237, "德国", 1990],
    [28666, 78.1, 254830, "冰岛", 1990],
    [1777, 57.7, 870601776, "印度", 1990],
    [29550, 79.1, 122249285, "日本", 1990],
    [2076, 67.9, 20194354, "朝鲜", 1990],
    [12087, 72, 42972254, "韩国", 1990],
    [24021, 75.4, 3397534, "新西兰", 1990],
    [43296, 76.8, 4240375, "挪威", 1990],
    [10088, 70.8, 38195258, "波兰", 1990],
    [19349, 69.6, 147568552, "俄罗斯", 1990],
    [10670, 67.3, 53994605, "土耳其", 1990],
    [26424, 75.7, 57110117, "英国", 1990],
    [37062, 75.4, 252847810, "美国", 1990]
  ]
];

export const bubbleOption = {
  backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
    {
      offset: 0,
      color: "#f7f8fa"
    }
  ]),
  title: {
    text: "1990年各国家人均寿命与 GDP"
  },
  legend: {
    right: 10,
    data: ["1990"]
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: "dashed"
      }
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: "dashed"
      }
    },
    scale: true
  },
  series: [
    {
      name: "1990",
      data: data[0],
      type: "scatter",
      symbolSize: function(data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function(param) {
            return param.data[3];
          },
          position: "top"
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowColor: "rgba(120, 36, 50, 0.5)",
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(251, 118, 123)"
            }
          ])
        }
      }
    }
  ]
};
