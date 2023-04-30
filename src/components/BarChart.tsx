import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js';
import { ChartPropsType } from "../types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
);

export const options = {
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    plugins: {
        legend: {
            display: false,
        },
    },
};

function BarChart({ data }: ChartPropsType) {
    return <Bar data={data} options={options} />;
}

export default BarChart;