import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LinearScale } from 'chart.js';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { getPercursoDetalhes } from '../api/getTelemetria';

ChartJS.register(Title, Tooltip, Legend, LinearScale);

// Opções globais para todos os gráficos (pode ser ajustado conforme necessário)
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Gráfico de Percurso',
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      ticks: {
        stepSize: 1,
      },
    },
    y: {
      type: 'linear',
      position: 'left',
    },
  },
};

// percurso de teste
// const percursoInterlagos = [
//     { x: 0, y: 10 },   // Ponto A
//     { x: 8, y: 8 },    // Ponto B
//     { x: 10, y: 0 },   // Ponto C
//     { x: 8, y: -8 },   // Ponto D
//     { x: 0, y: -10 },  // Ponto E
//     { x: -8, y: -8 },  // Ponto F
//     { x: -10, y: 0 },  // Ponto G
//     { x: -8, y: 8 },   // Ponto H
//     { x: 0, y: 10 },   // Ponto A (repetido para fechar o círculo)
//   ];

// Componente de gráfico de percurso
export function GraficoTrajetoria({ percursoSelecionado }) {
  const [graficoData, setGraficoData] = useState({
    datasets: [
      {
        label: 'Percurso',
        data: [],
        fill: false,
        borderColor: 'rgba(0, 128, 0, 1)', // verde
        tension: 0.1,
        pointRadius: 6, // Tamanho dos pontos
        pointBackgroundColor: 'rgba(0, 128, 0, 1)',
      },
    ],
  });

  useEffect(() => {
    const getTelemetria = async () => {
      if (percursoSelecionado) {
        try {
          const telemetrias = await getPercursoDetalhes(percursoSelecionado.idPercurso);
          console.log('Telemetrias', telemetrias);

          const newData = telemetrias.map(telemetria => ({ x: telemetria.posX, y: telemetria.posY }));

          setGraficoData({
            datasets: [
              {
                label: 'Percurso',
                data: newData,
                fill: false,
                borderColor: 'rgba(0, 128, 0, 1)', // verde
                tension: 0.1,
                pointRadius: 6, // Tamanho dos pontos
                pointBackgroundColor: 'rgba(0, 128, 0, 1)', 
              },
            ],
          });
        } catch (error) {
          console.error('Erro ao buscar os dados da API:', error);
        }
      } else {
        setGraficoData({
          datasets: [
            {
              label: 'Percurso',
              data: [],
              fill: false,
              borderColor: 'rgba(0, 128, 0, 1)', // verde
              tension: 0.1,
              pointRadius: 6, // Tamanho dos pontos
              pointBackgroundColor: 'rgba(0, 128, 0, 1)', 
            },
          ],
        });
      }
    };

    getTelemetria();
  }, [percursoSelecionado]);

  return (
    <Box>
      <Text fontSize='xl' as='b'>Gráfico de Percurso</Text>
      <Line data={{ datasets: graficoData.datasets }} options={options} />
    </Box>
  );
}

GraficoTrajetoria.propTypes = {
  percursoSelecionado: PropTypes.object
};
