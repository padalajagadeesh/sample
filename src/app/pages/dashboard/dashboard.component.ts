import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new Chart("performanceChart", {
      type: 'bar',
      data: {
        labels: ['HR', 'Engineering', 'Sales', 'Design'],
        datasets: [{
          label: 'Performance Score',
          data: [75, 90, 60, 85],
          backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#9c27b0']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}
