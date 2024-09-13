<template>
  <div class="container">
    <Navigation />
    <div class="main">
      <div class="topbar">
        <div class="toggle" @click="toggleMenu">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div class="search">
          <label>
            <input type="text" placeholder="Pesquisar">
            <ion-icon name="search-outline"></ion-icon>
          </label>
        </div>
        <div class="user">
          <img src="#" alt="UserImage">
        </div>
      </div>
      <Dashboard />
      <div class="details">
        <RecentOrders />
        <RecentCustomers />
      </div>
      <div>
        <ChartComponent />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Dashboard from '../components/Dashboard.vue'
import RecentOrders from '../components/RecentOrders.vue'
import RecentCustomers from '../components/RecentCustomers.vue'
import ChartComponent from '@/components/Grafico.vue';



// Importa o CSS global
import '@/assets/styles.css'

export default {
  name: 'App',
  components: {
    Navigation,
    Dashboard,
    RecentOrders,
    RecentCustomers,
    ChartComponent
  },
  methods: {
    toggleMenu() {
      document.querySelector('.navigation').classList.toggle('active');
      document.querySelector('.main').classList.toggle('active');
    }
  }
}
</script>

<style scoped>
/* Estilos locais do componente, se houver */
</style>
