<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import Modal from '@/components/Modal.vue'
import MainFooter from '@/components/MainFooter.vue'

const showMobileNav = ref(false)

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value
}
</script>

<template>
  <header class="primary-header">
    <div class="container nav-wrapper">
      <RouterLink to="/">
        <img alt="logo" class="logo" src="@/assets/imgs/healro-logo.svg" />
      </RouterLink>
      <button
        class="mobile-nav-toggle"
        :class="{ show: !showMobileNav }"
        aria-controls="primary-navigation-mobile"
        :aria-expanded="showMobileNav"
        @click="toggleMobileNav"
      >
        <template v-if="!showMobileNav">
          <img
            class="icon-hamburger"
            src="@/assets/imgs/hamburger-menu.svg"
            alt=""
            aria-hidden="true"
          />
        </template>
        <template v-else>
          <img class="icon-close" src="@/assets/imgs/menu-close.svg" alt="" aria-hidden="true" />
        </template>
        <span class="visually-hidden">Menu</span>
      </button>
      <nav class="primary-nav">
        <ul role="list" class="nav-list">
          <RouterLink :to="{ path: '/', hash: '#solutions' }" class="nav-item">解決方案</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#about' }" class="nav-item">關於我們</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#team' }" class="nav-item">團隊介紹</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact-us' }" class="nav-item"
            >聯絡我們</RouterLink
          >
        </ul>
      </nav>
      <Modal v-model:visible="showMobileNav">
        <nav class="primary-nav-mobile">
          <ul
            role="list"
            class="nav-list"
            id="primary-navigation-mobile"
            @click="showMobileNav = false"
          >
            <RouterLink :to="{ path: '/', hash: '#solutions' }" class="nav-item"
              >解決方案</RouterLink
            >
            <RouterLink :to="{ path: '/', hash: '#about' }" class="nav-item">關於我們</RouterLink>
            <RouterLink :to="{ path: '/', hash: '#team' }" class="nav-item">團隊介紹</RouterLink>
            <RouterLink :to="{ path: '/', hash: '#contact-us' }" class="nav-item"
              >聯絡我們</RouterLink
            >
          </ul>
        </nav>
      </Modal>
    </div>
  </header>

  <RouterView />

  <MainFooter></MainFooter>
</template>

<style scoped>
.logo {
  width: 7rem;
  height: 80px;
}

.primary-header {
  z-index: 99;
  position: sticky;
  top: 0;
  background-color: var(--clr-light);
}

.nav-wrapper {
  color: var(--clr-primary-400);
  display: flex;
  align-items: center;
  max-width: 1200px;
  padding: 0;
  justify-content: space-between;
  width: auto;
}

.nav-wrapper a:visited {
  color: var(--clr-primary-400);
}

.primary-nav {
  padding: var(--spacing-300);
  margin-top: 0.5rem;
  padding-right: 0;
}

.nav-list {
  font-size: var(--fs-nav);
  display: flex;
  gap: var(--spacing-400);
}

.nav-item {
  text-decoration: none;
}

.mobile-nav-toggle {
  display: none;
}
@media (max-width: 1250px) {
  .nav-wrapper {
    margin-left: 25px;
    margin-right: 25px;
  }
}

@media (max-width: 768px) {
  .primary-header {
    margin-top: var(--spacing-400);
  }

  /* hide desktop nav */
  .primary-nav {
    display: none;
  }

  .primary-nav-mobile {
    position: absolute;
    padding: var(--spacing-500);
    inset: 6.5rem 1.5rem auto;
    background: var(--clr-light);
  }

  .nav-list {
    display: grid;
    gap: var(--spacing-400);
    text-align: center;
    font-weight: var(--fw-bold);
  }

  .nav-item {
    color: var(--clr-primary-400);
  }

  .nav-item:hover,
  .nav-item:focus {
    color: var(--clr-primary-300);
  }

  .nav-wrapper {
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
  }

  .mobile-nav-toggle {
    display: block;
    cursor: pointer;
    background: transparent;
    border: 0;
    padding: 0.5rem;
  }

  .icon-close {
    width: 2em;
  }

  .icon-hamburger {
    width: 2em;
  }
}
</style>
