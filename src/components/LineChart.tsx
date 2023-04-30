import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement
} from 'chart.js';
import { ChartPropsType } from "../types";

ChartJS.register(
    LineElement,
    PointElement,
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
        }
    },
};

function LineChart({ data }: ChartPropsType) {
    return <Line data={data} options={options} />;
}

export default LineChart;