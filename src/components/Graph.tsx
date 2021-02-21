/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { tempData } from "../util/tempData";
import * as d3 from "d3";
import { addGraphData } from "../store/graph";

// random number function
function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Graph = () => {
  const dispatch = useDispatch();
  const [fullData, setFullData] = useState<number[]>([]);
  const [isStop, setIsStop] = useState<boolean>(false);
  const [timeId, setTimeId] = useState<number>(0);
  const { graphData } = useSelector((state: RootState) => state.graph);
  useEffect(() => {
    setFullData(tempData(20));
    start();
    return window.clearInterval(timeId);
  }, []);
  useEffect(() => {
    const x = d3.scaleLinear();
    const y = d3.scaleLinear();

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    const margin = { left: 50, right: 20, bottom: 20 };

    const svg = d3.select("#svg-chart");

    const gx = svg.append("g");
    const gy = svg.append("g");

    draw();
    d3.interval(draw, 1000);
    function draw() {
      const width = 800;
      const height = 500;

      x.domain([0, random(width * 0.25, width + width * 0.75)]).range([
        0,
        width,
      ]);
      y.domain([0, random(height * 0.25, height + height * 0.75)]).range([
        height,
        0,
      ]);

      // const DOMAIN_WIDTH_MAX = 5;
      // // data 최대 수치가 DOMAIN_WIDTH_MAX보다 작으면 0부터, DOMAIN_WIDTH_MAX이상이면 최대수치 - DOMAIN_WIDTH_MAX부터
      // const domainStart =
      //   graphData.length === 0 ||
      //   graphData[graphData.length - 1].time <= DOMAIN_WIDTH_MAX
      //     ? 0
      //     : graphData[graphData.length - 1].time - DOMAIN_WIDTH_MAX;
      // // graphData 최대 수치가 DOMAIN_WIDTH_MAX보다 작으면 DOMAIN_WIDTH_MAX, DOMAIN_WIDTH_MAX이상이면 최대수치 + 0.1 부터
      // const domainEnd =
      //   graphData.length === 0 ||
      //   graphData[graphData.length - 1].time <= DOMAIN_WIDTH_MAX
      //     ? DOMAIN_WIDTH_MAX
      //     : graphData[graphData.length - 1].time + 0.05;
      // x.domain([domainStart, domainEnd]).range([0, width]);

      svg
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.bottom);

      gx.attr("transform", `translate(${margin.left}, ${height})`)
        .transition()
        .duration(500)
        .call(xAxis);

      gy.attr("transform", `translate(${margin.left}, 0)`)
        .transition()
        .duration(500)
        .call(yAxis);
    }
  }, [graphData]);
  function start() {
    const id = window.setInterval(() => {
      if (fullData.length === graphData.length) {
        window.clearInterval(id);
        return;
      }
      const length = graphData.length;
      const newData = fullData.find((v, i) => i === length);
      dispatch(
        addGraphData({
          time: graphData[length - 1].time,
          multiple: newData ? newData : 0,
        })
      );
    }, 1000);
    setTimeId(id);
  }
  return <svg id="svg-chart"></svg>;
};

export default Graph;
