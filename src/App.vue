<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
      <button class="button">取得演示</button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.logo {
  width: 2rem;
  height: 2rem;
}
</style>
