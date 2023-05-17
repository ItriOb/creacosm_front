import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data, options,width,height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const chart = new Chart(canvasRef.current, {
        type: 'bar',
        data: data,
        options: options
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data, options]);

  return <div style={{ width: `${width}px`, height: `${height}px` }}>
  <canvas ref={canvasRef} />
</div>
};

export default BarChart;