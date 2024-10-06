<script setup lang="ts">
import { useRouter } from 'vue-router'
import ContactUs from '@/components/ContactUs.vue'
import { useFormStore } from '@/stores/formStore'

const router = useRouter()
const formStore = useFormStore()

/**
 * 點擊【預約產品說明】按鈕
 */
const setCommentMsg = () => {
  formStore.updateComment('預約產品說明')
  router.push('#contact-us')
}

const members = [
  {
    title: '陳俊佑 顧問',
    img: '/src/assets/imgs/Jim.png',
    experience: [''],
    portrait: ''
  },
  {
    title: '江和原 COO',
    img: '/src/assets/imgs/coo.png',
    experience: [''],
    portrait: ''
  },
  {
    title: '王德士 VP',
    img: '/src/assets/imgs/vp.png',
    experience: [''],
    portrait: ''
  },
  {
    title: '陳禹儒 CTO',
    img: '/src/assets/imgs/Aru.png',
    experience: ['全端軟體工程師'],
    portrait: ''
  },
  {
    title: '黃大煒 CIO',
    img: '/src/assets/imgs/Dave.png',
    experience: ['後端軟體工程師'],
    portrait: ''
  },
  {
    title: '林映如 總經理',
    img: '/src/assets/imgs/Eve.png',
    experience: ['前端軟體工程師'],
    portrait: ''
  },
  {
    title: '陳正傑 顧問',
    img: '/src/assets/imgs/David.png',
    experience: ['全端軟體工程師'],
    portrait: ''
  },
  {
    title: '陳毓婷 顧問',
    img: '/src/assets/imgs/Yuting.png',
    experience: ['前端軟體工程師'],
    portrait: ''
  },
  {
    title: '劉珊珊',
    img: '/src/assets/imgs/Savana.png',
    experience: ['專案經理'],
    portrait: ''
  }
]
</script>

<template>
  <main class="main-container">
    <!-- AI 轉換引擎 -->
    <section class="section section-container">
      <div class="split hero">
        <div>
          <h1 class="fs-primary-heading">生成式 AI 病歷資料轉換引擎</h1>
          <p class="hero-description">
            透過 AI 輔助快速將醫療資料轉換成 FHIR 標準格式，與國際 FHIR
            應用生態接軌，達成資料實務及臨床應用。
          </p>
          <button class="button hero-button" @click="setCommentMsg">預約產品說明</button>
        </div>
        <div>
          <img src="@/assets/imgs/translate_ui.png" alt="" class="hero-img" />
        </div>
      </div>
    </section>
    <div class="hr-line"></div>
    <!-- 解決方案 -->
    <section id="solutions" class="solutions-section  section-container">
      <h2 class="fs-secondary-heading ">解決方案</h2>
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
    <!-- FHIR 資料實務 -->
    <section class="solutions-section applied section-container">
      <div class="split solution-split">
        <div class="solution-image engine-img hide-desktop">
          <img class="" src="@/assets/imgs/applied-solutions.png" alt="" />
        </div>
        <div class="solution-content">
          <h2 class="solution-item-title">FHIR資料實務應用</h2>
          <div class="solution-desc">
            導入或建置以 FHIR 為基礎的智能應用程式，發揮醫療資料的最大價值。
          </div>
        </div>
        <div class="solution-image engine-img hide-mobile">
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
    <!-- 關於我們 -->
    <section id="about" class="section members section-container">
      <h2 class="fs-secondary-heading">關於我們</h2>
      <p>
        我們是發源於醫學中心的醫療資訊團隊，致力於建構便捷醫療資訊系統與醫療資料的應用。隨著電子健康記錄（EHR）系統的普及，大量醫療資料被創建，但由於格式不統一和系統不兼容，這些資料的價值受限，造成資訊孤島，影響資料的有效利用和跨機構共享。
        FHIR（快速醫療資訊資源）標準是解決資料互通性問題的關鍵，但將非FHIR格式資料轉換為FHIR格式是一項技術挑戰。我們開發了「醫療資料智慧互通平台：生成式AI
        FHIR轉換引擎」，自動且準確地將各種格式的醫療資料轉換為FHIR格式，提升資料利用率，促進資料共享，並提升醫療產業的服務質量和效率。我們旨在提供快速、準確、無縫的資料轉換解決方案，推動醫療行業進步。
      </p>
    </section>
    <!-- 團隊介紹 -->
    <section id="team" class="section section-container">
      <h2 class="fs-secondary-heading">團隊介紹</h2>
      <div class="members-content">
        <div v-for="(member, index) in members" class="member" :key="index">
          <img class="member-portrait" :src="member.img" :alt="member.title" />
          <h3 class="member-title">{{ member.title }}</h3>
          <ul>
            <li v-for="(exp, expIndex) in member.experience" :key="expIndex">{{ exp }}</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- 聯絡我們 -->
    <section id="contact-us" class="section section-container">
      <h2 class="fs-secondary-heading">聯絡我們</h2>
      <ContactUs />
    </section>
  </main>
</template>

<style scoped>
.main-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

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

.solutions-title {
  padding: var(--spacing-600);
  padding-bottom: 0;
}

.solution-split {
  /* padding-top: var(--spacing-500); */
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

.section-container {
  max-width: 1200px;
  padding: 0;
  margin: auto;
  width: auto;
  margin-top: 75px;
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
  /* padding: var(--spacing-600); */
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
  justify-content: space-around;
  max-width: 1200px;
}

.member {
  flex: 1 1 calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

.member-portrait {
  width: 160px;
  object-fit: cover;
  height: 250px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.member-title {
  margin-top: 0.5rem;
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

.hr-line {
  border-top: 10px solid var(--clr-primary-400);
  margin-top: 75px;
  margin-bottom: 75px;
}

/* 小於桌面螢幕尺寸 */
@media (max-width: 1250px) {
  .section-container {
    margin-left: 25px;
    margin-right: 25px;
  }
}

/* 平板樣式 */
@media (max-width: 768px) {
  .solutions-content {
    flex-direction: column;
  }

  .solution-item {
    max-width: 100%;
  }

  .split.hero {
    gap: 7%;
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

  .section-container {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 48px;
  }

  .member {
    flex: 1 1 50%;
  }

  .hr-line {
    margin-bottom: 48px;
  }
}

/* 手機樣式 */
@media (max-width: 480px) {
  .member {
    flex: 1 1 100%;
  }

  .section-container {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
