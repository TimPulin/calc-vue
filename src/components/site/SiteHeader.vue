<template>
  <header class="header">
    <div class="container">
      <div class="header__top">
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
                <router-link class="nav__link" :to="{ path: '/' }">
                  <IconCalc />
                  Главная
                </router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" :to="{ path: '/calc' }">
                  <IconCalc />
                  Калькулятор
                </router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" :to="{ path: '/guide-value' }">
                  <IconBook />
                  Справочник стоимости элементов
                </router-link>
              </li>
              <li class="nav__item">
                <router-link
                  class="nav__link nav__link--donate"
                  :to="{ path: '/donation' }"
                >
                  Поблагодарить
                </router-link>
              </li>
            </ul>
            <PWAButtonInstall v-if="isSmallScreen" />
            <PWAButtonUpdate v-if="isSmallScreen" />
          </div>
        </nav>
        <PWAButtonInstall class="button--in-one-line" v-if="!isSmallScreen" />
        <PWAButtonUpdate class="button--in-one-line" v-if="!isSmallScreen" />
      </div>
    </div>
  </header>
</template>

<script>
import IconBook from '../icons/IconBook.vue';
import IconCalc from '../icons/IconCalc.vue';
import PWAButtonInstall from '@/components/pwa/PWAButtonInstall';
import PWAButtonUpdate from '@/components/pwa/PWAButtonUpdate';

export default {
  components: { IconBook, IconCalc, PWAButtonInstall, PWAButtonUpdate },

  data() {
    return {
      navPanelOpen: false,
      refNavPanel: null,
    };
  },

  computed: {
    screenWidth() {
      return document.body.clientWidth;
    },
    isSmallScreen() {
      return this.screenWidth < 768;
    },
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

<style>
.header__top {
  display: flex;
}

.button--in-one-line {
  white-space: nowrap;
}
</style>
