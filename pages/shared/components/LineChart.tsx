import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

function LineChart({ className }: { className: string }) {
  return (
    <div className={className}>
      <Line
        data={{
          labels: [1, -5, 3, 4, 1, 25, 6],
          datasets: [
            {
              data: [13, 544, 788, 334],
              borderColor: "#2354ef",
              fill: false,
              tension: 0.3,
              pointRadius: 0,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          aspectRatio: 2,
          elements: {
            point: {
              radius: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },

            tooltip: {},
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
ChartJS.register(...registerables);
export default LineChart;
