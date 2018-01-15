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
  @Input() chart;
  @Input() version = 'current';
  @Input() columns; // { type: 'string', name: 'element' }
  @Input() rows;
  @Input() array;
  @Input() lang = 'en';
  @Input() options;

  ngOnInit() {
    const self = this;
    console.log(self.chart, self.columns, self.rows, self.array);
    if (self.chart && ((self.columns && self.rows) || self.array)) {
      self.setLib();
      google.charts.load(self.version, { packages: [self.chartLibType], language: self.lang });
      google.charts.setOnLoadCallback(drawChart);
    } else {
      console.error('chart is a mandatory field! Either columns and rows combination or array should be specified!' +
      ' Refer documentation for further info');
    }
    function drawChart() {
      let data;
      if (self.array) {
        data = google.visualization.arrayToDataTable(self.array, true);
      } else {
        data = new google.visualization.DataTable();
        for (const column of self.columns) {
          data.addColumn(column.type, column.name);
        }
        data.addRows(self.rows);
      }
      console.log(data);
      const chart = self.setChart();
      if (self.options) {
        const options = self.options;
        chart.draw(data, options);
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
    } else if (chart === 'barchart' || chart === 'bar') {
      return new google.charts.Bar(self.chartDiv.nativeElement);
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
    } else if (chart === 'columnchart') {
      return new google.visualization.ColumnChart(self.chartDiv.nativeElement);
    } else if (chart === 'combochart') {
      return new google.visualization.ComboChart(self.chartDiv.nativeElement);
    } else if (chart === 'piechart') {
      return new google.visualization.PieChart(self.chartDiv.nativeElement);
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
    }
  }

  setLib() {
    const self = this;
    const chart = self.chart.toLocaleLowerCase();
    if (chart === 'piechart' || chart === 'barchart' || chart === 'bar' || chart === 'areachart' ||
      chart === 'bubblechart' || chart === 'candlestickchart' || chart === 'columnchart' || chart === 'combochart' ||
      chart === 'scatterchart' || chart === 'steppedareachart') {
      self.chartLibType = 'corechart';
    } else if (chart === 'annotationchart') {
      self.chartLibType = 'annotationchart';
    } else if (chart === 'calendar') {
      self.chartLibType = 'calendar';
    } else if (chart === 'sankey') {
      self.chartLibType = 'sankey';
    } else if (chart === 'timeline') {
      self.chartLibType = 'timeline';
    } else if (chart === 'treemap') {
      self.chartLibType = 'treemap';
    } else if (chart === 'wordtree') {
      self.chartLibType = 'wordtree';
    }
  }
}
