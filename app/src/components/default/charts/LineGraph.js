import React from 'react'
import { Chart } from 'react-charts'
import Client from "../../app/CryptoMonitorClient";

function LineGraph() {

    const data = [
        {
            label: 'Sentiment',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
            label: 'Price',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
    ]

    React.useMemo(
        () => Client.get('/price-sentiment?assetpairs=XBTUSD')
            .then(res => {
                //console.log(res);
                // data[0].data.push([8, 8])
                // data[1].data.push([1, 1])
                // console.log(data[0]);
                // console.log(data[1]);
            }),
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    React.useEffect(() => {
        data[0].data.push([8, 8])
        data[1].data.push([1, 1])
        console.log(data[0]);
        console.log(data[1]);

        // const assetPairs = Client.get('/price-sentiment?assetpairs=XBTUSD')
        //     .then(res => {
        //         console.log(res);
        //         console.log(data[0].data.push([8, 8]));
        //         console.log(data[1].data.push([1, 1]));
        //     });
    });

    const lineChart = (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <Chart data={data} axes={axes} className="line-graph-main"/>
    )

    return lineChart;
}

export default LineGraph;