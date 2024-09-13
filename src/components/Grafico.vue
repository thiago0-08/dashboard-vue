<template>
    <div ref="chartContainer" style="height: 370px; width: 100%;"></div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const chartContainer = ref(null);
  
  const renderChart = () => {
    if (typeof CanvasJS === 'undefined') {
      console.error('CanvasJS não está carregado.');
      return;
    }
  
    const chart = new CanvasJS.Chart(chartContainer.value, {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Exemplo de Gráfico de Barras"
      },
      axisY: {
        title: "Número de Itens"
      },
      data: [{
        type: "column",
        yValueFormatString: "#,##0 itens",
        dataPoints: [
          { label: "Janeiro", y: 20 },
          { label: "Fevereiro", y: 15 },
          { label: "Março", y: 25 },
          { label: "Abril", y: 30 },
          { label: "Maio", y: 28 }
        ]
      }]
    });
    chart.render();
  };
  
  onMounted(() => {
    renderChart();
  });
  </script>
  
  <style scoped>
  /* Adicione estilos específicos para o ChartComponent.vue aqui, se necessário */
  </style>
  