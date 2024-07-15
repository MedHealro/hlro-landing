<script setup lang="ts"></script>

<template>
  <div class="container footer">
    <nav class="footer-nav">
      <RouterLink :to="{ path: '/' }" class="nav-item">
        <img alt="logo" class="logo" src="@/assets/imgs/rubber-duck.svg"
      /></RouterLink>
      <div class="company-terms">
        <div>© 2023-2024 資慧科技股份有限公司</div>
        <div>服務條款</div>
        <div>隱私權政策</div>
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
</style>
