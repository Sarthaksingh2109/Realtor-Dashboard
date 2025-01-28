import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../styles/Dashboard.css";

const Dashboard = () => {
 
  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Property Sales",
        data: [5, 10, 7, 12, 15],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

 
  const pieChartData = {
    labels: ["Listed", "Sold", "Under Contract", "Expired"],
    datasets: [
      {
        data: [45, 25, 15, 15], 
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)", 
          "rgba(255, 99, 132, 0.2)", 
          "rgba(153, 102, 255, 0.2)", 
          "rgba(255, 159, 64, 0.2)", 
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Welcome to Your Dashboard</h1>

      <div className="overview">
        <h2 className="section-title">Overview</h2>
        <div className="stats">
          <div className="stat-card">
            <h3>Total Properties</h3>
            <p>25</p>
          </div>
          <div className="stat-card">
            <h3>Active Listings</h3>
            <p>15</p>
          </div>
          <div className="stat-card">
            <h3>Selling Price Avg.</h3>
            <p>$450,000</p>
          </div>
          <div className="stat-card">
            <h3>Total Sales</h3>
            <p>10</p>
          </div>
        </div>
      </div>

      <div className="charts-section">
        <h2 className="section-title">Data Visualization</h2>
        <div className="chart-card">
          <h3>Property Sales (Bar Chart)</h3>
          <Bar data={barChartData} options={{ responsive: true }} />
        </div>

        <div className="chart-card">
          <h3>Property Status Distribution (Pie Chart)</h3>
          <Pie data={pieChartData} options={{ responsive: true }} />
        </div>
      </div>

      <div className="activity-feed">
        <h2 className="section-title">Recent Activity</h2>
        <ul>
          <li>New property listing added: "Modern Apartment in Miami" - $750,000</li>
          <li>Price update for "Villa in New York" - Reduced to $1,200,000</li>
          <li>Property "Luxury Condo in Los Angeles" sold for $900,000</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
