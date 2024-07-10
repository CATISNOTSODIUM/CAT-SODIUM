import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

const Data = [
    {
        id: 1,
        year: 2022,
        number: 1,
        details: ["IMMC 2022"]
    },
    {
        id: 1,
        year: 2023,
        number: 2,
        details: ["HIMCM 2023", "LAMMPS Research Team"]
    },
    {
        id: 1,
        year: 2024,
        number: 2,
        details: ["IMMC 2024","Canarie"]
    }
];

const data = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
            label: 'Popularity of colours',
            data: [55, 23, 96],
            // you can set indiviual colors for each bar
            backgroundColor: [
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
            ],
            borderWidth: 1,
        }
    ]
}

var chartData =
{labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Number of projects",
                data: Data.map((data) => data.number),
                backgroundColor: [
                    "#c0caf5",
                    "#ecf0f1",
                    "#ffc777",
                    "#ecf0f1",
                    "#f3ba2f"
                ],
                borderColor: "black",
                borderWidth: 2
            }
]};
function BarChart({ chartData }) {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Projects history ( “・ω・゛)</h2>
            <Bar
                data={chartData}
                options={
                    {
                    scales: {
                       x : {
                        grid : {
                            borderColor: 'white'
                        }
                       }
                    }
                    ,plugins: {
                        title: {
                            display: true,
                        },
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    var label = context.dataset.label || '';

                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += context.parsed.y
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    );
}
function Logo() {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className=" py-5 text-xl w-96">
                <BarChart chartData={chartData} />
            </div>
        </div>
        
    )
}

export default Logo