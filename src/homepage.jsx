import React from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function HomePage() {
  const labels = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"];
  const data = {
    labels,
    datasets: [
      {
        label: "Crowd Density",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        borderColor: "#1976d2",
        backgroundColor: "rgba(25, 118, 210, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { stepSize: 20 } } },
  };

  return (
    <div className="content">
      <img src="temple.jpeg" alt="Temple" className="temple-img" />

      <button className="book-btn">Book Slot</button>

      <h3>Live Crowd Density</h3>
      <div className="chart">
        <Line data={data} options={options} />
      </div>

      <button className="sos-btn">SOS</button>
    </div>
  );
}

export default HomePage;

