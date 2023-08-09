<template>
  <h1 class="page-title">Упс. Несуществующая страница</h1>
  Давайте, заглянем на
  <router-link class="link" :to="{ name: 'main' }">
    Главную страницу
  </router-link>
  <div style="text-align: center">
    <img class="img" src="../assets/images/404/spread-hands.jpg" alt="" />
  </div>
</template>
