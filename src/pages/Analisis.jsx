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
        label: "Cantidad de Ómnibus",
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


  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold text-center">Estado de la Flota de Ómnibus</h1>

      <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-6">
        {/* Contenedor de barras */}
        <div className="flex-1 min-w-0 max-w-[600px] bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2 text-center">Gráfico de Barras</h2>
          <div className="relative h-[300px]">
            <Bar data={barData} options={options} />
          </div>
        </div>

        {/* Contenedor de dona */}
        <div className="flex-1 min-w-0 max-w-[600px] bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2 text-center">Gráfico de Donut</h2>
          <div className="relative h-[300px] flex items-center justify-center">
            <Doughnut data={doughnutData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}


