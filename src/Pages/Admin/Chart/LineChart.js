import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data, options }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const chart = new Chart(canvasRef.current, {
        type: 'line',
        data: data,
        options: options
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data, options]);

  return <canvas ref={canvasRef} style={{"height":"300px","width":"300px"}}/>;
};

export default LineChart;