import { Bar, Chart } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalBar(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'data 1',
                    data: [1, 2, 3, 4, 5, 6, 7],
                    border: '1px solid white',
                    backgroundColor: 'red',
                },
                {
                    label: 'data 2',
                    data: [5, 10, 34, 4, 50, 2, 74],
                    border: '1px solid white',
                    backgroundColor: 'blue',
                },
                {
                    label: 'data 3',
                    data: [9, 3, 34, 42, 23, 4, 52],
                    border: '1px solid white',
                    backgroundColor: 'yellow',
                }
            ]
        })
        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: "true",
                    text: "KEONA",
                    color: 'red',
                    
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })
    }, [])

    return(
        <>
            <Bar data={chartData} options={chartOptions}/>
        </>
    )
}