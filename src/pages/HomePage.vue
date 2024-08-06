<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import ContactUs from '@/components/ContactUs.vue'

const router = useRouter()

const members = [
  {
    title: '陳俊佑 CEO',
    experience: ['萬芳醫院放射腫瘤科專任主治醫師', '臺北癌症中心Watson for Oncology專案負責人'],
    portrait: ''
  },
  {
    title: '陳俊佑 CEO',
    experience: ['萬芳醫院放射腫瘤科專任主治醫師', '臺北癌症中心Watson for Oncology專案負責人'],
    portrait: ''
  },
  {
    title: '陳俊佑 CEO',
    experience: ['萬芳醫院放射腫瘤科專任主治醫師', '臺北癌症中心Watson for Oncology專案負責人'],
    portrait: ''
  },
  {
    title: '陳俊佑 CEO',
    experience: ['萬芳醫院放射腫瘤科專任主治醫師', '臺北癌症中心Watson for Oncology專案負責人'],
    portrait: ''
  },
  {
    title: '陳俊佑 CEO',
    experience: ['萬芳醫院放射腫瘤科專任主治醫師', '臺北癌症中心Watson for Oncology專案負責人'],
    portrait: ''
  },
  {
    title: '陳俊佑 CEO',
    experience: ['萬芳醫院放射腫瘤科專任主治醫師', '臺北癌症中心Watson for Oncology專案負責人'],
    portrait: ''
  }
]

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
  <main>
    <section class="section">
      <div class="split hero">
        <div>
          <h1 class="fs-primary-heading">生成式 AI 病歷資料轉換引擎</h1>
          <p class="hero-description">
            透過 AI 輔助快速將醫療資料轉換成 FHIR 標準格式，與國際 FHIR
            應用生態接軌，達成資料實務及臨床應用。
          </p>
          <button class="button hero-button" @click="router.push('#contact-us')">
            預約產品說明
          </button>
        </div>
        <div>
          <img src="@/assets/imgs/translate_ui.png" alt="" class="hero-img" />
        </div>
      </div>
    </section>
    <section id="solutions" class="solutions-section engine">
      <div class="split solution-split">
        <div class="solution-content">
          <h2 class="solution-item-title">轉換引擎</h2>
          <div class="solution-desc">
            解決醫療資料未標準化的困局，強化醫療資料的互通性及可用性，擺脫客製化 API
            開發及維護所帶來的作業負擔。
          </div>
        </div>
        <div class="solution-image engine-img">
          <img class="" src="@/assets/imgs/translate-engine.png" alt="" />
        </div>
      </div>
    </section>
    <section class="solutions-section applied">
      <div class="split solution-split">
        <div class="solution-image applied-img hide-desktop">
          <img class="" src="@/assets/imgs/applied-solutions.png" alt="" />
        </div>
        <div class="solution-content">
          <h2 class="solution-item-title">FHIR資料實務應用</h2>
          <div class="solution-desc">
            導入或建置以 FHIR 為基礎的智能應用程式，發揮醫療資料的最大價值。
          </div>
        </div>
        <div class="solution-image applied-img hide-mobile">
          <img class="" src="@/assets/imgs/applied-solutions.png" alt="" />
        </div>
      </div>
    </section>
    <!-- <section id="solutions" class="section solutions">
      <h2 class="fs-secondary-heading solutions-title">解決方案</h2>
      <div class="solutions-content">
        <div class="solution-item">
          <h2 class="solution-item-title fs-lg">轉換引擎</h2>
          <div class="solution-item-desc">
            解決醫療資料未標準化的困局，強化醫療資料的互通性及可用性，擺脫客製化 API
            開發及維護所帶來的作業負擔。
          </div>
          <div class="engine-img-wrapper">
            <img class="solutions-img-engine" src="@/assets/imgs/translate-engine.png" alt="" />
          </div>
        </div>
        <div class="solution-item">
          <h2 class="solution-item-title fs-lg">FHIR資料實務應用</h2>
          <div class="solution-desc">
            導入或建置以 FHIR 為基礎的智能應用程式，發揮醫療資料的最大價值。
          </div>
          <div class="solutions-img-wrapper">
            <img class="solutions-img-applied" src="@/assets/imgs/applied-solutions.png" alt="" />
          </div>
        </div>
      </div>
    </section> -->
    <section id="about" class="section members">
      <h2 class="fs-secondary-heading">關於我們</h2>
      <p>
        我們是發源於醫學中心的醫療資訊團隊，致力於建構便捷醫療資訊系統與醫療資料的應用。隨著電子健康記錄（EHR）系統的普及，大量醫療資料被創建，但由於格式不統一和系統不兼容，這些資料的價值受限，造成資訊孤島，影響資料的有效利用和跨機構共享。
        FHIR（快速醫療資訊資源）標準是解決資料互通性問題的關鍵，但將非FHIR格式資料轉換為FHIR格式是一項技術挑戰。我們開發了「醫療資料智慧互通平台：生成式AI
        FHIR轉換引擎」，自動且準確地將各種格式的醫療資料轉換為FHIR格式，提升資料利用率，促進資料共享，並提升醫療產業的服務質量和效率。我們旨在提供快速、準確、無縫的資料轉換解決方案，推動醫療行業進步。
      </p>
    </section>
    <section id="team" class="section">
      <h2 class="fs-secondary-heading">團隊介紹</h2>
      <div class="members-content">
        <div v-for="member in members" class="member">
          <img class="member-portrait" src="@/assets/imgs/mirror.svg" alt="" />
          <h3 class="member-title">{{ member.title }}</h3>
          <ul>
            <li v-for="exp in member.experience">{{ exp }}</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="contact-us" class="section">
      <h2 class="fs-secondary-heading">聯絡我們</h2>
      <ContactUs />
      <!-- <div class="split">
        <div class="contact-item">
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

            <FormKit
              type="textarea"
              name="message"
              label="需求描述"
              placeholder=""
              :help="`${value.message ? value.message.length : 0} / 120`"
              validation="length:0,120"
              :validation-messages="{
                length: '輸入上限為120字'
              }"
            />

            <button class="button" type="submit">送出</button>
          </FormKit>
        </div>
        <div class="contact-item">
          <img class="location" src="@/assets/imgs/usa-il.svg" alt="" />
        </div>
        <div class="contact-item">
          <ul>
            <li class="contact-info-item">
              <img class="contact-icon" src="@/assets/imgs/mail.svg" alt="" />
              <span>台北市信義區信義路5段7號</span>
            </li>
            <li class="contact-info-item">
              <img class="contact-icon" src="@/assets/imgs/mail.svg" alt="" />
              <span>台北市信義區信義路5段7號</span>
            </li>
            <li class="contact-info-item">
              <img class="contact-icon" src="@/assets/imgs/mail.svg" alt="" />
              <span>台北市信義區信義路5段7號</span>
            </li>
            <li class="contact-info-item">
              <img class="contact-icon" src="@/assets/imgs/mail.svg" alt="" />
              <span>台北市信義區信義路5段7號</span>
            </li>
          </ul>
        </div>
      </div> -->
    </section>
  </main>
</template>

<style scoped>
.hide-mobile {
  display: none;
}

.engine-img-wrapper {
  margin-top: 22px;
}

/* .solutions-img-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 46px;
  background-color: var(--clr-light);
  height: 286.84px;
} */

.solutions-section {
  margin-top: var(--spacing-600);
}

.solution-split {
  padding-top: var(--spacing-500);
}

.engine {
  border-top: 10px solid var(--clr-primary-400);
}

.solution-desc {
  position: relative;
  padding-bottom: var(--spacing-500);
  /* border-bottom: 2px solid var(--clr-accent-400); */
}

.solution-desc::after {
  content: '';
  position: absolute;
  left: 1%;
  bottom: 0;
  height: 1px;
  width: 95%;
  border-bottom: 2px solid var(--clr-accent-400);
}

.section {
  scroll-margin-top: -144px;
}

.split.hero {
  grid-auto-columns: 1fr 2fr;
  gap: 5%;
}

.hero-img {
  border: 0.3rem solid var(--clr-accent-400);
  border-radius: 0.25em;
}

.hero-description,
.hero-button {
  margin-top: var(--spacing-400);
}

.solution-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-600);
}

.solution-image {
  /* border: solid 1px black; */
  background-color: var(--clr-light);
  /* padding: 1rem; */
}

.engine-img {
  padding-right: var(--spacing-300);
  padding-left: 1.25rem;
}

.applied-img {
  padding-top: var(--spacing-600);
  padding-left: var(--spacing-600);
}

.solution-item-title {
  font-size: var(--fs-600);
  margin-bottom: var(--spacing-300);
}

.fs-secondary-heading {
  margin-bottom: var(--spacing-500);
}

.members-content {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
}

.member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.member-portrait {
  width: 12em;
}

.member-title {
  font-size: var(--fs-500);
}

.location {
  min-width: 15em;
}

.contact-item {
  display: flex;
  justify-content: center;
}

.contact-info-item {
  display: flex;
  align-items: center;
}

.contact-icon {
  width: 1.5em;
}

@media (max-width: 50em) {
  .solutions-content {
    flex-direction: column;
  }

  .solution-item {
    max-width: 100%;
  }

  .split.hero {
    gap: 10%;
  }

  .hide-desktop {
    display: none;
  }

  .hide-mobile {
    display: block;
  }

  .solution-split {
    padding-top: 0;
  }

  .engine-img {
    padding-right: 0;
    padding-left: 2rem;
  }

  .applied-img {
    padding-top: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
