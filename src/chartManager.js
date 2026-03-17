// chartManager.js

class ChartManager {
    constructor() {
        this.charts = {};
    }

    // Method to initialize a chart
    initChart(chartId, config) {
        this.charts[chartId] = new Chart(chartId, config);
        return this.charts[chartId];
    }

    // Method to render a chart
    renderChart(chartId) {
        const chart = this.charts[chartId];
        if (chart) {
            chart.render();
        } else {
            console.error(`Chart with id ${chartId} not initialized.`);
        }
    }

    // Method to update chart data
    updateChart(chartId, newData) {
        const chart = this.charts[chartId];
        if (chart) {
            chart.data = newData;  // Update the chart data
            chart.update();  // Call the update method
        } else {
            console.error(`Chart with id ${chartId} not initialized.`);
        }
    }
}

// Example usage:
// const chartManager = new ChartManager(); // Initialize
// chartManager.initChart('myChart', config); // Setup
// chartManager.renderChart('myChart'); // Render
// chartManager.updateChart('myChart', newData); // Update data
