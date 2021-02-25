/** @format */

import React, { useEffect } from 'react';
import { tempData } from '../util/tempData';
import * as d3 from 'd3';
import { IDataSet } from '../store/graph';

const Graph = () => {
  useEffect(() => {
    const x = d3.scaleLinear();
    const y = d3.scaleLinear();

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    const margin = { left: 50, right: 20, bottom: 20 };

    const svg = d3.select('#svg-chart');

    const gx = svg.append('g');
    const gy = svg.append('g');

    const line = d3
      .line<IDataSet>()
      .x((d) => x(d.time))
      .y((d) => y(d.multiple));

    const path = svg.append('path');

    const data = tempData(100);
    let count = 0;
    const targetData: IDataSet[] = [];
    const timeId = window.setInterval(() => {
      if (data.length === count) {
        window.clearInterval(timeId);
        return;
      }
      targetData.push({ time: count, multiple: data[count] });
      count++;
      draw();
    }, 50);
    draw();
    function draw() {
      const width = 400;
      const height = 400;

      const DOMAIN_WIDTH_MAX = 100;
      const DOMAIN_HEIGHT_MAX = 25;
      // data 최대 수치가 DOMAIN_WIDTH_MAX보다 작으면 0부터, DOMAIN_WIDTH_MAX이상이면 최대수치 - DOMAIN_WIDTH_MAX부터
      const domainXStart =
        targetData.length === 0 ||
        targetData[targetData.length - 1].time <= DOMAIN_WIDTH_MAX
          ? 0
          : targetData[targetData.length - 1].time - DOMAIN_WIDTH_MAX;
      // graphData 최대 수치가 DOMAIN_WIDTH_MAX보다 작으면 DOMAIN_WIDTH_MAX, DOMAIN_WIDTH_MAX이상이면 최대수치 + 0.1 부터
      const domainXEnd =
        targetData.length === 0 ||
        targetData[targetData.length - 1].time <= DOMAIN_WIDTH_MAX
          ? DOMAIN_WIDTH_MAX
          : targetData[targetData.length - 1].time + 0.05;
      const domainYStart =
        targetData.length === 0 ||
        targetData[targetData.length - 1].multiple <= DOMAIN_HEIGHT_MAX
          ? 0
          : targetData[targetData.length - 1].multiple - DOMAIN_HEIGHT_MAX;
      const domainYEnd =
        targetData.length === 0 ||
        targetData[targetData.length - 1].multiple <= DOMAIN_HEIGHT_MAX
          ? DOMAIN_HEIGHT_MAX
          : targetData[targetData.length - 1].multiple + 0.05;
      x.domain([domainXStart, domainXEnd]).range([0, width]);
      y.domain([domainYStart, domainYEnd]).range([height, 0]);

      svg
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.bottom);

      gx.attr('transform', `translate(${margin.left}, ${height})`)
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .call(xAxis);

      gy.attr('transform', `translate(${margin.left}, 0)`)
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .call(yAxis);

      path
        .datum(targetData)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2)
        .attr('d', line as any)
        .attr('transform', `translate(${margin.left}, 0)`)
        .transition()
        .duration(0)
        .ease(d3.easeLinear);
    }
  }, []);

  return (
    <div className="graph">
      <svg id="svg-chart"></svg>
    </div>
  );
};

export default Graph;
