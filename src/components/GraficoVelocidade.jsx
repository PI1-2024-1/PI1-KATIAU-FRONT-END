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
      text: 'Velocidade do carrinho pelo tempo',
    },
  },
};

export function GraficoVelocidade({ percursoSelecionado }) {

  const [graficoData, setGraficoData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Velocidade',
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
          const newLabels = telemetrias.map(telemetria => format(new Date(telemetria.data), 'mm:ss'));
          const newData = telemetrias.map(telemetria => telemetria.velocidade);

          setGraficoData({
            labels: newLabels,
            datasets: [
              {
                label: 'Velocidade',
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
      else {
        setGraficoData({
          labels: [],
          datasets: [
            {
              label: 'Velocidade',
              data: [],
              fill: false,
              backgroundColor: 'rgba(0,0,192,0.2)',
              borderColor: 'rgba(0,0,192,1)',
            },
          ],
        });
      }
    };

    getTelemetria();
  }, [percursoSelecionado]);

  return (
    <Box>
      <Text fontSize='xl' as='b'>Grafico de velocidade</Text>
      <Line data={graficoData} options={options} />
    </Box>
  );
}

GraficoVelocidade.propTypes = {
  percursoSelecionado: PropTypes.object
};
