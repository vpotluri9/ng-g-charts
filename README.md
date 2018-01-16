# NgGCharts

Angular 2+ implementation for Google charts 

## Documentation:

##Install 
Install ng-g-charts
    npm install ng-g-charts --save

##Import 
Import ChartModule to your app mdule and add it to imports
    import { ChartModule } from './modules/chart/chart.module';
     imports: [
        ChartModule
    ],

##Tag 
Tag to be used is <ng-g-chart></ng-g-chart>

It accepts the following inputs: 
###chart: 
This is a mandatory field. You should pass the chart type string. 
The following values are valid(remember this field is not case sensitive, you can have caps too):
piechart, barchart, columnchart, annotationchart, areachart, bubblechart, calendar, candlestickchart, combochart, sankey, scatterchart, steppedareachart, timeline, treemap, wordtree, table. 
###options: 
This is an optionsl field. This takes an object of options as input.
###columns: 
format -> { type: 'string', id: 'element' }
This is the array of columns for google.visualization.DataTable() 
This is mandatory if you do not input array field. 
This takes an array of the above formatted objects.
###rows: 
This is the array of rows for google.visualization.DataTable();
This is mandatory if you do not input array field.
This takes an array of arrays as an input. Where each array refers to each row of data.
###array:
This is the array of data for google.visualization.arrayToDataTable
This is mandatory if you do not input rows and columns.
This field is the input for 
###isMaterial: 
NgGCharts supports material charts for bar and column charts. 
The default value of isMaterial is flase, pass it as true when you need material maps
###version: 
default value is 'current', you can specify a version number or 'upcoming'
###lang: 
default is English, if you need to change the value you can pass a valid string 

NgGCharts support all the google charts except Diff Chart

Report any issues here -> https://github.com/vpotluri9/ng-g-charts/issues