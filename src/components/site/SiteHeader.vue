<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav nav">
        <div class="burger">
          <button class="burger__btn" aria-label="открыть навигацию">
            <span class="burger__line"></span>
            <span class="burger__line"></span>
            <span class="burger__line"></span>
          </button>
        </div>

        <div class="nav__panel">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#" class="nav__link nav__link--calc"> Калькулятор </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link"> Поблагодарить </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>
