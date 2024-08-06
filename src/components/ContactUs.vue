<script setup lang="ts">
const axios = {
  post: () => new Promise((r) => setTimeout(r, 2000))
}

const submitForm = async (formData) => {
  console.log(formData)
  const res = await axios.post(formData)
  // submit form
  alert('Form submitted!')
}
</script>

<template>
  <div class="split">
    <div>
      <h1 class="fs-primary-heading">預約產品說明</h1>
      <p class="booking-description">
        感謝您對我們產品的關注！若您想進一步預約產品說明，請您填寫預約表單。我們的專業團隊將儘快與您聯繫，安排產品說明服務。
      </p>
      <div>
        <ul class="contact-methods">
          <li class="contact-info-item">
            <img class="contact-icon" src="@/assets/imgs/mail-letter-svgrepo-com.svg" alt="" />
            <span>
              <a href="mailto:support@healro.com?subject=官網聯繫" class="ext-link"
                >support@healro.com
              </a>
            </span>
          </li>
          <li class="contact-info-item">
            <img
              class="contact-icon"
              src="@/assets/imgs/maps-and-flags-pin-svgrepo-com.svg"
              alt=""
            />
            <span>
              <a href="https://maps.app.goo.gl/AA6njBD9UTtYRdLk7" target="_blank" class="ext-link"
                >台北市松山區八德路二段374號二樓之8
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <FormKit type="form" :actions="false" #default="{ value }" @submit="submitForm">
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

      <FormKit name="phone" type="tel" label="電話" help="請輸入您的聯絡電話" validation="" />

      <FormKit
        type="textarea"
        name="comment"
        label="備註"
        placeholder=""
        :help="`${value.comment ? value.comment.length : 0} / 120`"
        validation="length:0,120"
        :validation-messages="{
          length: '輸入上限為120字'
        }"
      />

      <FormKit
        type="checkbox"
        label="個人資料蒐集與使用同意"
        help="我同意收到資慧科技相關行銷宣傳訊息"
        name="terms"
        validation="accepted"
        validation-visibility="dirty"
      />

      <button class="button" type="submit">送出</button>
    </FormKit>
  </div>
</template>

<style scoped>
.split {
  gap: 5%;
}

.booking-description {
  margin-top: var(--spacing-400);
}

.contact-methods {
  margin-top: var(--spacing-500);
  /* display: flex;
  flex-direction: column;
  gap: 15%; */
}

.contact-info-item {
  display: flex;
  align-items: center;
  margin-top: var(--spacing-300);
}

.contact-icon {
  width: 1.5em;
  margin-right: 0.3rem;
}

.ext-link {
  text-decoration: none;
}
</style>
