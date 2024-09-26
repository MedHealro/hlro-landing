<script setup lang="ts">
import * as Model from '@/models/interfaces'
import { reset } from '@formkit/core'
import { useFormStore } from '@/stores/formStore'

// 使用 Pinia store
const formStore = useFormStore()

/**
 * 送出 Google 表單
 * @param formData 表單資訊
 */
const submitForm = async () => {
  formStore.handleSubmit()
  reset('contactForm')
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
    <FormKit
      type="form"
      id="contactForm"
      :actions="false"
      #default="{ value }"
      @submit="submitForm"
      :errors="['請確認表單是否填寫完成，謝謝!']"
    >
      <FormKit
        type="text"
        name="company"
        id="company"
        validation="required"
        v-model="formStore.company"
        label="公司名稱"
        help="請輸入您的公司名稱"
        placeholder=""
        :validation-messages="{ required: '請輸入您的公司名稱。' }"
      />

      <FormKit
        type="text"
        name="name"
        id="name"
        validation="required|not:Admin"
        v-model="formStore.name"
        label="姓名"
        help="請輸入您的姓名"
        placeholder=""
        :validation-messages="{ required: '請輸入您的姓名。' }"
      />

      <FormKit
        name="email"
        type="email"
        label="Email"
        help="請輸入您的聯絡Email"
        validation="required|email"
        v-model="formStore.email"
        :validation-messages="{ email: '請輸入有效的電子信箱。', required: '請輸入您的電子信箱。' }"
      />

      <FormKit
        name="phone"
        type="tel"
        label="電話"
        help="請輸入您的聯絡電話"
        v-model="formStore.phone"
        :validation="[['matches', /09[0-9]{8}$/, /0[2-8][2-9]{0,1}(6){0,1}\-[0-9]{8}$/]]"
        :validation-messages="{ matches: '請輸入有效的聯絡電話，例如 0912345678 或 04-12345678。' }"
      />

      <FormKit
        type="textarea"
        name="comment"
        label="備註"
        placeholder=""
        v-model="formStore.comment"
        :help="`${value?.comment ? (value.comment as string).length : 0} / 120`"
        validation="length:0,120"
        :validation-messages="{ length: '輸入上限為120字。' }"
      />

      <FormKit
        type="checkbox"
        label="個人資料蒐集與使用同意"
        help="我同意收到資慧科技相關行銷宣傳訊息"
        name="terms"
        validation="accepted"
        v-model="formStore.terms"
        validation-visibility="dirty"
        :validation-messages="{ accepted: '請同意個人資料的蒐集。' }"
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
