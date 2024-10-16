<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="container footer">
    <nav class="footer-nav">
      <div></div>
      <div class="company-terms">
        <div>© 2023-2024 資慧科技股份有限公司</div>
        <a href="https://maps.app.goo.gl/AA6njBD9UTtYRdLk7" target="_blank" class="footer-button"
          >台北市松山區八德路二段374號二樓之8
        </a>
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
  flex-wrap: wrap;
}

.company-terms {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.25rem;
}

.footer-button {
  text-decoration: none;
  background-color: transparent;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 1em;
}

</style>
