import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getPercursoDetalhes } from '../api/getTelemetria';
import { format } from 'date-fns';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

export function GraficoTempo({ percursoSelecionado }) {

  const [graficoData, setGraficoData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Tempo',
        data: [],
        fill: false,
        backgroundColor: 'rgba(0,0,192,0.2)',
        borderColor: 'rgba(0,0,192,1)',
      },
    ],
  });

  useEffect(() => {
    const getTelemetria = async () => {
      if (percursoSelecionado) {
        try {
          const telemetrias = await getPercursoDetalhes(percursoSelecionado.idPercurso);
          console.log('Telemetrias', telemetrias);
          
          // Atualize os dados do gráfico aqui
          const newLabels = telemetrias.map(telemetria => telemetria.distTotal ); // Ajuste conforme a estrutura dos dados da API
          const newData = telemetrias.map(telemetria => format(new Date(telemetria.data), 'mm:ss')); // Ajuste conforme a estrutura dos dados da API

          setGraficoData({
            labels: newLabels,
            datasets: [
              {
                label: 'Tempo em mm:ss',
                data: newData,
                fill: false,
                backgroundColor: 'rgba(0,0,192,0.2)',
                borderColor: 'rgba(0,0,192,1)',
              },
            ],
          });
        } catch (error) {
          console.error('Erro ao buscar os dados da API:', error);
        }
      }
    };

    getTelemetria();
  }, [percursoSelecionado]);

  return (
    <Box>
      <Text fontSize='xl' as='b'>Tempo pela distância</Text>
      <Line data={graficoData} options={options} />
    </Box>
  );
}

GraficoTempo.propTypes = {
  percursoSelecionado: PropTypes.object
};
