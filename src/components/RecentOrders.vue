<template>
    <div class="recentOrders">
      <div class="cardHeader">
        <h2>Pedidos Recentes</h2>
        <a href="#" class="btn">Ver Tudo</a>
      </div>
      <table>
       
          <tr>
            <td>Nome</td>
            <td>Preço</td>
            <td>Pagamento</td>
            <td>Situação</td>
          </tr>
        
        
          <tr>
            <td>Hambúrguer de siri</td>
            <td>R$ 12,00</td>
            <td>Pago</td>
            <td><span class="status Entregue">Entregue</span></td>
          </tr>
         <td><span class="status Entregue">Entregue</span> </td>
          
          
          
       
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecentOrders'
  }
  </script>
  
  <style scoped>
  /* Adicione seu estilo aqui */
  </style>
  