<template>
    <div class="navigation">
      <ul>
        <li><a href="#">
          <span class="icon"><ion-icon name="car-sport-outline"></ion-icon></span>
          <span class="title">Sua Empresa</span>
        </a></li>
  
        <li><a href="#">
          <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
          
          <RouterLink class="title "aria-current="page" to="/">Início</RouterLink>
        </a></li>
  
        <li><a href="#">
          <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
          <span class="title">Clientes</span>
        </a></li>
  
        <li><a href="#">
          <span class="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
          <span class="title">Mensagem</span>
        </a></li>
  
        <li><a href="#">
          <span class="icon"><ion-icon name="help-outline"></ion-icon></span>
          <span class="title">Ajuda</span>
        </a></li>
  
        <li><a href="#">
          <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
          <span class="title">Configuração</span>
        </a></li>
  
        <li><a href="#">
          <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
          <span class="title">Senha</span>
        </a></li>
  
        <li><a href="#">
          <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
          <span class="title">Log Out</span>
        </a></li>
      </ul>
    </div>
    <ion-icon name="home"></ion-icon>
  </template>
  
  <script>
  export default {
    name: 'Navigation'
  }
  </script>
  
  <style scoped>
 

html, body {
    margin: 0;
    padding: 0;
}

.navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background: var(--blue);
    border-left: 10px solid var(--blue);
    transition: 0.5s;
    overflow: hidden;
}

.navigation.active {
    width: 80px;
}

.navigation ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.navigation ul li {
    position: relative;
    width: 100%;
    list-style: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}

.navigation ul li a {
    display: flex;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    color: var(--white);
}

.navigation ul li:hover a {
    background: var(--white);
    color: var(--blue);
}

.navigation ul li a .icon {
    min-width: 60px;
    text-align: center;
}

.navigation ul li a .title {
    display: block;
    padding: 0 10px;
    white-space: nowrap;
}
</style>
  