import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
declare var google: any;

@Component({
  selector: 'ng-g-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chartDiv: ElementRef;
  chartLibType;
  visBoolean;
  @Input() chart;
  @Input() version = 'current';
  @Input() columns; // { type: 'string', id: 'element' }
  @Input() rows;
  @Input() array;
  @Input() lang = 'en';
  @Input() options;
  @Input() isMaterial = false;

  ngOnInit() {
    const self = this;
    if (self.chart && ((self.columns && self.rows) || self.array)) {
      self.setVars();
      google.charts.load(self.version, { packages: [self.chartLibType], language: self.lang });
      google.charts.setOnLoadCallback(drawChart);
    } else {
      console.error('chart is a mandatory field! Either columns and rows combination or array should be specified!' +
        ' Refer documentation for further info');
    }
    function drawChart() {
      let data;
      if (self.array) {
        data = google.visualization.arrayToDataTable(self.array, self.visBoolean);
      } else {
        data = new google.visualization.DataTable();
        for (const column of self.columns) {
          data.addColumn(column.type, column.id);
        }
        data.addRows(self.rows);
      }
      const chart = self.setChart();
      if (self.options) {
        chart.draw(data, self.options);
      } else {
        chart.draw(data, null);
      }
    }
  }

  setChart() {
    const self = this;
    const chart = self.chart.toLocaleLowerCase();
    if (chart === 'piechart') {
      return new google.visualization.PieChart(self.chartDiv.nativeElement);
    } else if (chart === 'barchart' || chart === 'bar' || chart === 'columnchart') {
      if (self.isMaterial) {
        return new google.charts.Bar(self.chartDiv.nativeElement);
      } else {
        return new google.visualization.BarChart(self.chartDiv.nativeElement);
      }
    } else if (chart === 'annotationchart') {
      return new google.visualization.AnnotationChart(self.chartDiv.nativeElement);
    } else if (chart === 'areachart') {
      return new google.visualization.AreaChart(self.chartDiv.nativeElement);
    } else if (chart === 'bubblechart') {
      return new google.visualization.BubbleChart(self.chartDiv.nativeElement);
    } else if (chart === 'calendar') {
      return new google.visualization.Calendar(self.chartDiv.nativeElement);
    } else if (chart === 'candlestickchart') {
      return new google.visualization.CandlestickChart(self.chartDiv.nativeElement);
    } else if (chart === 'combochart') {
      return new google.visualization.ComboChart(self.chartDiv.nativeElement);
    } else if (chart === 'sankey') {
      return new google.visualization.Sankey(self.chartDiv.nativeElement);
    } else if (chart === 'scatterchart') {
      return new google.visualization.ScatterChart(self.chartDiv.nativeElement);
    } else if (chart === 'steppedareachart') {
      return new google.visualization.SteppedAreaChart(self.chartDiv.nativeElement);
    } else if (chart === 'timeline') {
      return new google.visualization.Timeline(self.chartDiv.nativeElement);
    } else if (chart === 'treemap') {
      return new google.visualization.TreeMap(self.chartDiv.nativeElement);
    } else if (chart === 'wordtree') {
      return new google.visualization.WordTree(self.chartDiv.nativeElement);
    } else if (chart === 'table') {
      return new google.visualization.Table(self.chartDiv.nativeElement);
    }
  }

  setVars() {
    const self = this;
    const chart = self.chart.toLocaleLowerCase();
    if (chart === 'piechart') {
      self.chartLibType = 'corechart';
      return new google.visualization.PieChart(self.chartDiv.nativeElement);
    } else if (chart === 'barchart' || chart === 'bar' || chart === 'columnchart') {
      if (self.isMaterial) {
        self.chartLibType = 'bar';
      } else {
        self.chartLibType = 'corechart';
      }
      self.visBoolean = false;
    } else if (chart === 'annotationchart') {
      self.chartLibType = 'annotationchart';
      self.visBoolean = true;
    } else if (chart === 'areachart') {
      self.chartLibType = 'corechart';
      self.visBoolean = false;
    } else if (chart === 'bubblechart') {
      self.chartLibType = 'corechart';
      self.visBoolean = false;
    } else if (chart === 'calendar') {
      self.chartLibType = 'calendar';
      self.visBoolean = false;
    } else if (chart === 'candlestickchart') {
      self.chartLibType = 'corechart';
      self.visBoolean = true;
    } else if (chart === 'combochart') {
      self.chartLibType = 'corechart';
      self.visBoolean = false;
    } else if (chart === 'sankey') {
      self.chartLibType = 'sankey';
      self.visBoolean = false;
    } else if (chart === 'scatterchart') {
      self.chartLibType = 'corechart';
      self.visBoolean = false;
    } else if (chart === 'steppedareachart') {
      self.chartLibType = 'corechart';
      self.visBoolean = false;
    } else if (chart === 'timeline') {
      self.chartLibType = 'timeline';
      self.visBoolean = false;
    } else if (chart === 'treemap') {
      self.chartLibType = 'treemap';
      self.visBoolean = false;
    } else if (chart === 'wordtree') {
      self.chartLibType = 'wordtree';
      self.visBoolean = false;
    } else if (chart === 'table') {
      self.chartLibType = 'table';
      self.visBoolean = false;
    }
  }
}
