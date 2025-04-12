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
    responsive: false,
    maintainAspectRatio: false,
  };

  const chartStyle = {
    width: '300px',
    height: '300px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };


  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold text-center">Estado de la Flota de Ómnibus</h1>

      <div className="d-flex flex-wrap gap-4 justify-content-center mb-5">
        {/* Contenedor Gráfico de Barras */}
        <div style={chartStyle}>
          <h2 className="text-center text-lg font-semibold mb-2">Gráfico de Barras</h2>
          <Bar data={barData} options={options} width={250} height={250} />
        </div>

        {/* Contenedor Gráfico de Dona */}
        <div style={chartStyle}>
          <h2 className="text-center text-lg font-semibold mb-2">Gráfico de Donut</h2>
          <Doughnut data={doughnutData} options={options} width={250} height={250} />
        </div>
      </div>
    </div>
  );
}
