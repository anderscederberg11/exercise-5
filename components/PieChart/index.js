import { Pie } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels: ["Keona", "Anders", "Chelsea", "Tina", "Henver", "Sebster", "Ben"],
            datasets: [
                {
                    label: 'Amount of Swag',
                    data: [1, 100, 1, 3, 10, 9, 8],
                    border: '1px solid white',
                    backgroundColor: ['pink', 'red', 'blue', 'yellow', 'orange', 'cyan', 'green'],
                }
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: "true",
                    text: "AMOUNT OF SWAG 2024",
                    color: 'red',
                    
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })
    }, [])

    return(
        <>
            <Pie data={chartData} options={chartOptions}/>
        </>
    )
}