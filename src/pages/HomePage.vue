<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

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
</script>

<template>
  <main>
    <section class="section">
      <div class="split">
        <div>
          <h1 class="fs-primary-heading">Medium length display headline</h1>
          <p class="hero-description">
            車せろあ紙出ソメキ時読イメラ専軍ぴ道名リヨ保新えさッ側料りらル地掲ド演日ヒセヘコ禁工ニメ識権ひ当要ヘモワラ議関ぶき午包す
          </p>
          <button class="button hero-button" @click="router.push('demo')">預約產品說明</button>
        </div>
        <div>
          <img src="@/assets/imgs/tub.svg" alt="" />
        </div>
      </div>
    </section>
    <section id="solutions" class="section solutions">
      <h2 class="fs-secondary-heading">解決方案</h2>
      <div class="solutions-content">
        <div>轉換引擎</div>
        <div>AI醫療</div>
        <div>智慧醫院</div>
      </div>
    </section>
    <section id="about" class="section members">
      <h2 class="fs-secondary-heading">關於我們</h2>
      <p>
        最典型的答案，當然是行政院院長。法律學者會叫你找出憲法第五十三條：「行政院為國家最高行政機關。」並且指給你看，司法院大法官在2006年針對〈通傳會組織法〉作出的釋字第六一三號解釋提到：「憲法第五十三條明定行政院為國家最高行政機關，其目的在於維護行政一體，使所有國家之行政事務，除憲法別有規定外，均納入以行政院為金字塔頂端之層級式行政體制掌理，經由層級節制，最終並均歸由位階最高之行政院之指揮監督。」大法官認為，如此一來行政院對立法院負責，才符合責任政治的原理。
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
      <div class="split">
        <div class="contact-item">
          <form action="" method="get" class="form-example">
            <div class="form-example">
              <label for="name">Enter your name: </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div class="form-example">
              <label for="email">Enter your email: </label>
              <input type="email" name="email" id="email" required />
            </div>
            <div class="form-example">
              <input type="submit" value="Contact!" />
            </div>
          </form>
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
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-description,
.hero-button {
  margin-top: var(--spacing-400);
}

.solutions {
  background-color: aquamarine;
  padding: var(--spacing-600);
}

.solutions-content {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.fs-secondary-heading {
  margin-bottom: var(--spacing-300);
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
</style>
