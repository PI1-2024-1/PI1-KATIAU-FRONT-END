import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { differenceInMinutes, parseISO } from 'date-fns';


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
        text: 'Velocidade (cm/s)',
      },
    },
  },
};

export function GraficoVelocidade({ percursoSelecionado, dados }) {

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
      console.log(dados, percursoSelecionado)
      if (percursoSelecionado && dados.length !== 0) {
          // console.log('Telemetrias', dados);
          // Atualize os dados do gráfico aqui
          const primeiraData = parseISO(dados[0].data);
          // const newLabels = dados.map(telemetria => differenceInMinutes(format(new Date(telemetria.data), 'mm:ss'), primeiraData));
          const newLabels = dados?.map(telemetria => {
            const dataAtual = parseISO(telemetria.data);
            const minutosDesdeInicio = differenceInMinutes(dataAtual, primeiraData);
            return `(${minutosDesdeInicio})`;
        });
          const newData = dados?.map(telemetria => telemetria.velocidade);
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
  }, [dados, percursoSelecionado]);

  return (
    <Box>
      <Text fontSize='xl' as='b'>Grafico de velocidade</Text>
      <Line data={graficoData} options={options} />
    </Box>
  );
}

GraficoVelocidade.propTypes = {
  percursoSelecionado: PropTypes.object,
  dados: PropTypes.arrayOf(PropTypes.object)
};


