<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const showMobileNav = ref(false)

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value
}
</script>

<template>
  <header class="primary-header">
    <div class="container nav-wrapper">
      <RouterLink to="/">
        <img alt="logo" class="logo" src="@/assets/imgs/rubber-duck.svg" />
      </RouterLink>
      <button
        class="mobile-nav-toggle"
        :class="{ show: !showMobileNav }"
        aria-controls="primary-navigation"
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
      <nav class="primary-nav" :class="{ 'primary-nav-opened': showMobileNav }">
        <ul role="list" class="nav-list" id="primary-navigation">
          <RouterLink :to="{ path: '/', hash: '#solutions' }" class="nav-item">解決方案</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#about' }" class="nav-item">關於我們</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#team' }" class="nav-item">團隊介紹</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact-us' }" class="nav-item"
            >聯絡我們</RouterLink
          >
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="container">Footer Placeholder</div>
  </footer>
</template>

<style scoped>
.logo {
  width: 4rem;
  height: 4rem;
}

.nav-wrapper {
  display: flex;
  align-items: center;
}

.nav-list {
  font-size: var(--fs-nav);
}

.nav-item {
  text-decoration: none;
  color: var(--clr-light);
}

.mobile-nav-toggle {
  display: none;
}

@media (max-width: 50em) {
  .primary-header {
    margin-top: 2rem;
  }

  .primary-nav {
    display: none;
  }

  .primary-nav-opened {
    display: block;
    position: fixed;
    padding: 3rem;
    inset: 6.5rem 1.5rem auto;
    background: var(--clr-dark-600);
  }

  .nav-list {
    display: grid;
    gap: 1.5rem;
    text-align: center;
    font-weight: var(--fw-bold);
  }

  .nav-wrapper {
    justify-content: space-between;
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
