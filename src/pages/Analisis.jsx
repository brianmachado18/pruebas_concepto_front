import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function OmnibusStatusCharts() {
  const [data, setData] = useState({
    moving: 15,
    idle: 8,
    maintenance: 3,
    available: 10,
  });

  const barData = {
    labels: ["En movimiento", "Libres", "En mantenimiento", "Inactivos"],
    datasets: [
      {
        label: "Barras",
        data: [data.moving, data.available, data.maintenance, data.idle],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };

  const doughnutData = {
    labels: ["En movimiento", "Libres", "En mantenimiento", "Inactivos"],
    datasets: [
      {
        label: "Dona",
        data: [data.moving, data.available, data.maintenance, data.idle],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const chartStyle = {
    width: '100%',
    maxWidth: '400px',
    height: '400px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const chartContainer = {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
  };

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold text-center">Estado de la Flota de Ómnibus</h1>

      <div className="d-flex flex-wrap gap-4 justify-content-center mb-5">
        {/* Gráfico de Barras */}
        <div style={chartStyle}>
          <h2 className="text-center text-lg font-semibold mb-2">Gráfico de Barras</h2>
          <div style={chartContainer}>
            <Bar data={barData} options={options} />
          </div>
        </div>

        {/* Gráfico de Dona */}
        <div style={chartStyle}>
          <h2 className="text-center text-lg font-semibold mb-2">Gráfico de Donut</h2>
          <div style={chartContainer}>
            <Doughnut data={doughnutData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
