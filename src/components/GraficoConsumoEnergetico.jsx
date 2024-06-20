import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Gráfico de Consumo energético',
    },
  },
  scales: {
    x: {
        title: {
          display: true,
          text: 'Tempo (min)',
        },
    },
    y: {
      title: {
        display: true,
        text: 'Energia (w/h)',
      },
    },
  },
};

export function GraficoConsumoEnergetico({ percursoSelecionado, dados }) {

  const [graficoData, setGraficoData] = useState({
    labels: [],
    datasets: [
      {
        label: 'em cm/s²',
        data: [],
        fill: false,
        backgroundColor: 'rgba(192, 0, 0, 0.2)',
        borderColor: '#d51111',
      },
    ],
  });

  useEffect(() => {
    const getTelemetria = async () => {
      if (percursoSelecionado) {
        try {
          // console.log('dados', dados);
          // Atualize os dados do gráfico aqui
          const newLabels = dados.map(telemetria => format(new Date(telemetria.data), 'mm:ss'));
          const newData = dados.map(telemetria => telemetria.energia);

          setGraficoData({
            labels: newLabels,
            datasets: [
              {
                label: 'Consumo energético',
                data: newData,
                fill: false,
                backgroundColor: 'rgba(192, 0, 0, 0.2)',
                borderColor: '#d51111',
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
              label: 'Consumo energético',
              data: [],
              fill: false,
              backgroundColor: 'rgba(192, 0, 0, 0.2)',
              borderColor: '#d51111',
            },
          ],
        });
      }
    };

    getTelemetria();
  }, [percursoSelecionado, dados]);

  return (
    <Box width="100%" height="400px">
      {/* <Text fontSize='xl' as='b'>Gráfico da Consumo energético</Text> */}
      <Line data={graficoData} options={options} />
    </Box>
  );
}

GraficoConsumoEnergetico.propTypes = {
  percursoSelecionado: PropTypes.object,
  dados: PropTypes.arrayOf(PropTypes.object)
};
