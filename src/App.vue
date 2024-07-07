<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header class="primary-header">
    <div class="container">
      <RouterLink to="/">
        <img alt="logo" class="logo" src="@/assets/logo.svg" />
      </RouterLink>
      <nav class="primary-nav">
        <ul role="list" class="nav-list">
          <RouterLink to="/">解決方案</RouterLink>
          <RouterLink to="/">關於我們</RouterLink>
          <RouterLink to="/">聯絡我們</RouterLink>
        </ul>
      </nav>
      <button class="button" @click="router.push('demo')">預約產品說明</button>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="container">Footer Placeholder</div>
  </footer>
</template>

<style scoped>
.logo {
  width: 2rem;
  height: 2rem;
}
</style>
