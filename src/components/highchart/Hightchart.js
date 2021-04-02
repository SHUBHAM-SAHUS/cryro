// import HighchartsReact from "highcharts-react-official";
// // Import Highcharts
// import Highcharts from "highcharts/highcharts.src.js";
// import { LabelComponent } from "./LabelComponent";



//  export class HighchartsReact extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.afterChartCreated = this.afterChartCreated.bind(this);
//     this.state = {
//       chartOptions: {
//         series: [
//           {
//             data: [1, 2, 3,8,4,8,6,4,2,36,6,89,8,8,4,8,9,55,4,266,4,]
//           }
//         ],
//         xAxis: {
//           labels: {
//             useHTML: true,
//             formatter: function() {
//               return "";
//             }
//           }
//         }
//       }
//     };
//   }

//   afterChartCreated(chart) {
//     this.internalChart = chart;
//     this.forceUpdate();
//   }

//   componentDidUpdate() {
//     //this.internalChart.getMargins(); // redraw
//     this.internalChart.reflow();
//   }

//   render() {
//     const chart = this.internalChart,
//       customLabels = [];

//     if (chart && chart.xAxis[0]) {
//       Highcharts.objectEach(chart.xAxis[0].ticks, function(tick) {
//         customLabels.push(<LabelComponent tick={tick} />);
//       });
//     }

//     return (
//       <div>
//         <HighchartsReact
//           highcharts={Highcharts}
        
//           options={this.state.chartOptions}
//           callback={this.afterChartCreated}
//         />
//         {customLabels}
//       </div>
//     );
//   }
// }