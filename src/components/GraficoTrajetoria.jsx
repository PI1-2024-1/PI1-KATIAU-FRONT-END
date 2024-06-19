import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: [-2,-1,0,-2,-3,0, 5],
  datasets: [
    {
      label: 'Coordenadas',
      data: [3, 7, 10,-5, -2, 0, -10],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      pointStyle: 'rectRot',
      pointRadius: 8,
      pointHoverRadius: 12,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Percurso em que o carro passa`',
    },
  },
};

export function GraficoTrajetoria() {
  return (
    <Box>
      <Text fontSize='xl' as='b' >Trajetória percorrida</Text>
      <Line data={data} options={options} />
    </Box>
  );
}
