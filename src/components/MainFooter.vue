<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<template>
  <div class="container footer">
    <nav class="footer-nav">
      <!-- <RouterLink :to="{ path: '/' }" class="nav-item">
        <img alt="logo" class="logo" src="@/assets/imgs/healro-logo.svg"
      /></RouterLink> -->
      <div></div>
      <div class="company-terms">
        <div>© 2023-2024 資慧科技股份有限公司</div>
        <button class="footer-button" @click="router.push('terms')">服務條款</button>
        <button class="footer-button" @click="router.push('privacy')">隱私權政策</button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.logo {
  width: 4rem;
  height: 4rem;
}

.footer {
  margin-left: 0;
  margin-right: 0;
  width: auto;
  margin-top: var(--spacing-600);
  background-color: var(--clr-dark-500);
  color: var(--clr-light);
}

.footer-nav {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}

.company-terms {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.footer-button {
  background-color: transparent;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 1em;
}
</style>


