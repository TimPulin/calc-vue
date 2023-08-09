<template>
  <ul class="card">
    <li class="card__item">
      <div class="card__body">
        <router-link class="card__link" :to="{ path: 'calc' }">
          <h3 class="card__title">Калькулятор</h3>
        </router-link>
      </div>
    </li>
    <li class="card__item">
      <div class="card__body">
        <router-link class="card__link" :to="{ path: 'guide-value' }">
          <h3 class="card__title">Справочник</h3>
        </router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>
