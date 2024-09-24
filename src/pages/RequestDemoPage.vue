<script setup lang="ts">
// const axios = {
//   post: () => new Promise((r) => setTimeout(r, 2000))
// }

// const submitForm = async (formData) => {
//   console.log(formData)
//   const res = await axios.post(formData)
//   // submit form
//   alert('Form submitted!')
// }
</script>

<template>
  <main>
    <section class="section">
      <div class="split">
        <div>
          <h1 class="fs-primary-heading">預約產品說明</h1>
          <p class="booking-description">
            感謝您對我們產品的關注！若您想進一步預約產品說明，請您填寫預約表單。我們的專業團隊將儘快與您聯繫，安排產品說明服務。
          </p>
        </div>
        <!-- <FormKit type="form" :actions="false" #default="{ value }" @submit="submitForm">
          <FormKit
            type="text"
            name="company-name"
            id="company-name"
            validation="required"
            label="公司名稱"
            help="請輸入您的公司名稱"
            placeholder=""
          />

          <FormKit
            type="text"
            name="name"
            id="name"
            validation="required|not:Admin"
            label="姓名"
            help="請輸入您的姓名"
            placeholder=""
          />

          <FormKit
            name="email"
            type="email"
            label="Email"
            help="請輸入您的聯絡Email"
            validation="required|email"
          />

          <FormKit
            name="phone"
            type="tel"
            label="電話"
            help="請輸入您的聯絡電話"
            validation="required"
          />

          <button class="button" type="submit">送出</button>
        </FormKit> -->
      </div>
    </section>
  </main>
</template>

<style scoped>
.split {
  gap: 5%;
}

.booking-description {
  margin-top: var(--spacing-400);
}
</style>
