<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav nav">
        <div class="burger">
          <button
            class="burger__btn"
            aria-label="открыть навигацию"
            @click="onBurgerClick"
          >
            <span class="burger__line"></span>
            <span class="burger__line"></span>
            <span class="burger__line"></span>
          </button>
        </div>

        <div
          class="nav__panel"
          :class="{ 'nav__panel--open': navPanelOpen }"
          ref="navPanel"
        >
          <ul class="nav__list">
            <li class="nav__item">
              <router-link
                class="nav__link"
                :to="{ path: '/' }"
                @click="onLinkClick"
              >
                <IconCalc />
                Калькулятор
              </router-link>
            </li>
            <li>
              <router-link
                class="nav__link"
                :to="{ path: '/guide-value' }"
                @click="onLinkClick"
              >
                <IconBook />
                Справочник стоимости элементов
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                class="nav__link nav__link--donate"
                :to="{ path: '/donation' }"
                @click="onLinkClick"
              >
                Поблагодарить
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import IconBook from '../icons/IconBook.vue';
import IconCalc from '../icons/IconCalc.vue';
export default {
  components: { IconBook, IconCalc },

  data() {
    return {
      navPanelOpen: false,
      refNavPanel: null,
    };
  },

  mounted() {
    this.refNavPanel = this.$refs.navPanel;
  },

  methods: {
    onBurgerClick() {
      this.navPanelOpen = !this.navPanelOpen;
      if (this.navPanelOpen) {
        // без таймаута срабатывал сразу клик на документе и панель не открывалась
        setTimeout(() => {
          this.addClickListenerOnDocument();
        }, 10);
      }
    },

    addClickListenerOnDocument() {
      document.addEventListener(
        'click',
        (event) => {
          console.log(event.target);
          if (event.target !== this.refNavPanel) {
            this.navPanelOpen = false;
          }
        },
        {
          once: true,
        }
      );
    },
  },
};
</script>
