<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div class="terms-of-service">
    <h1>服務條款</h1>
    <p>
      本網站由「Healro」營運。在整個網站中，「我們」、「我方」、「本公司」均指「Healro」。在您接受本文所述之所有條款、條件、政策和聲明的前提下，「Healro」為您提供本網站，包括本網站提供給您（即使用者）的所有資訊和工具。
    </p>
    <p>
      造訪我們的網站，即表示您參與我們的「服務」，並同意受下列條款及條件（以下簡稱「服務條款」或「條款」）約束，包括本文中提及的其他條款及條件，以及/或透過超連結提供的內容。本服務條款適用於所有網站使用者，包括但不限於下列使用者：瀏覽者、廠商、顧客、商家和/或內容提供者。
    </p>
    <p>
      存取或使用本網站前，請仔細閱讀本服務條款。存取或使用網站的任何部分，即表示您同意受本服務條款約束。如果您不同意本協議的所有條款及條件，則無法存取網站或使用任何服務。如果將本服務條款視為要約，接受範圍則明確限於本服務條款。
    </p>
    <p>
      新增到目前網站的任何新功能或工具亦應受本服務條款約束。您可隨時在本頁面檢閱最新版的服務條款。我們保留更新、變更或取代本服務條款之任何部分的權利，採用的做法是將更新和/或變更發佈到我們的網站。您必須負責定期查看本頁面，確認是否有任何變更。如果您在任何變更發佈後繼續使用或存取網站，即表示您接受這些變更。
    </p>

    <h2>第 1 節 - 使用者資格</h2>
    <p>
      同意本服務條款，即表示您至少已年滿您居住地區的法定成人年齡，或您已年滿您居住地區的法定成人年齡並同意允許您的任何未成年眷屬使用本網站。
    </p>

    <h2>第 2 節 - 一般條件</h2>
    <p>我們保留隨時基於任何理由拒絕向任何人提供服務的權利。</p>
    <p>
      您瞭解您的內容（不包括信用卡資訊）可能會在未加密的狀態下傳輸，且會（a）透過不同網路傳輸；以及（b）進行變更，以符合和因應連接網路或裝置的技術需求。透過網路進行傳輸期間，信用卡資訊會將一律加密。
    </p>
    <p>
      在未經我方明確書面許可的情況下，您同意絕不重製、複製、拷貝、銷售、轉售或利用服務的任何部分、服務的使用，或是服務存取權，或提供服務之網站的任何接觸點的存取權。
    </p>
    <p>本協議所用的標題僅為了方便起見而加入，將不會限制或對本條款造成其他方面的影響。</p>

    <h2>第 3 節 - 資訊準確性、完整性和及時性</h2>
    <p>
      如果本網站提供的資訊不準確、不完整或不是最新資訊，我方概不負責。本網站上提供的資料僅為一般資訊，請勿依賴此等資訊或將其做為制定決策的唯一依據，而不查閱更準確、更完整或更及時的第一手資訊來源。您必須自行承擔依賴本網站之資料所產生的任何風險。
    </p>
    <p>
      本網站可能會包含某些歷史資訊。歷史資訊必然不是最新資訊，僅供您參考。我們保留隨時修改本網站內容的權利，但無義務更新網站上的任何資訊。您同意您須自行負責監控網站上的變更。
    </p>

    <h2>第 4 節 - 選擇性工具</h2>
    <p>
      我們可能會為您提供第三方工具的存取權，但我們不會監控此類工具，對此類工具亦無任何掌控，也無法提供任何意見。
    </p>
    <p>
      您理解並同意我們依「現狀」且「現有」狀態提供此等工具的存取權，且不提供任何形式的任何擔保、陳述或條件，亦不進行任何背書。對於您使用選用之第三方工具所導致或相關的任何問題，我方概不負責。
    </p>
    <p>
      您對透過網站提供之選用工具的任何使用行為，須完全由您自行承擔風險且斟酌決定，您應確保自己已熟讀並同意相關第三方供應商據以提供工具的條款。
      我們未來可能也會透過網站提供新服務和/或功能
      (包括發佈新工具和資源)。此等新功能和/或服務亦受本服務條款約束。
    </p>

    <h2>第 5 節 - 第三方連結</h2>
    <p>本網站中的某些內容、產品和服務可能包括來自第三方的材料。</p>
    <p>
      某些透過服務提供的內容、產品和服務可能包含來自第三方的資料。
      本網站上的第三方連結可能會將您導向與我們沒有聯盟關係的第三方網站。針對任何第三方資料或網站，或第三方的任何其他資料、產品或服務，我們不負責檢查或評估內容或準確性，亦不提供擔保且不承擔任何責任。
    </p>

    <h2>第 6 節 - 個人資訊</h2>
    <p>
      您提交的個人資訊受我們的隱私政策約束。要瞭解更多，請參閱我們的<span
        ><button @click="router.push('privacy')">隱私政策</button></span
      >。
    </p>

    <h2>第 7 節 - 錯誤、不準確和遺漏</h2>
    <p>
      我們的網站或服務中的資訊偶爾可能會有排版錯誤、不準確或疏漏的情形，這些情形可能與產品說明有關。我們保留修正任何錯誤、不準確性或疏漏情形的權利，而如果服務或任何相關網站中的任何資訊不準確，亦保留隨時變更或更新資訊的權利，恕不事先通知。
    </p>
    <p>
      除非法律要求，否則我們沒有義務須更新、修訂或釐清服務或任何相關網站中的資訊，包括但不限於定價資訊。本服務或任何相關網站中套用明確更新或重新整理日期，不應視為服務或任何相關網站中的所有資訊皆已修改或更新。
    </p>

    <h2>第 8 節 - 禁止使用</h2>
    <p>
      除了本服務條款所述的其他禁止事項以外，亦禁止您將網站或其內容用於下列用途：(a) 非法用途；(b)
      慫恿他人執行或參與任何非法行動；(c)
      違反任何國際、聯邦、省或州的法規、細則、法律或當地法令；(d)
      侵犯或違反我們的智慧財產權或其他人的智慧財產權；(e)
      騷擾、羞辱、污辱、傷害、詆毀、毀謗、貶損、威逼，或因性別、性傾向、宗教、族裔、種族、年齡、國籍或身心障礙而歧視他人；(f)
      提交不實或誤導資訊； (g)
      上傳或傳輸病毒或任何其他類型的惡意程式碼，其任何使用方式將會或可能會影響服務或任何相關網站、其他網站或網際網路的功能或運作；(h)
      收集或追蹤他人的個人資訊；(i)
      傳送垃圾郵件、進行網路釣魚、進行網址嫁接、使用假托技術、使用網路蜘蛛、進行檢索或抓取；(j)
      任何猥褻或不道德的用途；或 (k)
      干擾或規避服務或任何相關網站、其他網站或網際網路的安全性功能。針對違反任何禁止用途的情況，我們保留終止您使用服務或任何相關網站的權利。
    </p>

    <h2>第 9 節 - 免責聲明；責任限制</h2>
    <p>我們不保證、聲明或擔保您使用服務時，服務會毫不中斷、及時、安全或不會出現錯誤。</p>
    <p>我們不擔保透過使用服務取得之結果的準確性或可靠性。</p>
    <p>您同意我們可不時無限期地移除服務，或隨時取消服務，且無須通知您。</p>
    <p>
      您明確同意您須自行承擔使用或無法使用本服務的相關風險。透過服務提供給您的服務及所有產品和服務
      (本公司明確聲明者除外)
      係依「現狀」且「現有」狀態提供給您使用，不做明示或暗示之任何形式的任何陳述、擔保或條件，包括適銷性、適銷品質、特定目的之適用性、耐久性、所有權和非侵權的所有暗示擔保或條件。
      在任何情況下，「Healro」、我們的董事、主管人員、員工、聯盟夥伴、代理商、承包商、實習人員、供應商、服務供應商或授權人皆無須承擔任何受傷、損失、索賠或任何形式之任何直接、間接、隨附性、懲罰性、特殊性或衍生性損害的責任，包括但不限於利潤損失、營收損失、可減省之費用的損失、資料遺失、汰換成本或任何類似的損害，無論是否以合約、侵權
      (包括疏忽)、嚴格賠償責任或其他形式為依據，由於您使用服務的任何部分或透過本服務採購的任何產品所導致，或與您使用服務或任何產品有任何相關的任何其他索賠，包括但不限於任何內容中的任何錯誤或疏漏，或因使用服務或發佈、傳輸或以其他方式透過服務提供的任何內容
      (或產品) 所導致的任何形式之任何遺失或損害，即使已告知此等可能性亦同。
      由於某些州或司法管轄區不允許排除或限制衍生性或隨附性損害賠償的責任，在這些州或司法管轄地區中，我們的責任應限於法律所允許的最大範圍之內。
    </p>

    <h2>第 10 節 - 賠償</h2>
    <p>
      針對因您違反本服務條款或其參照納入之文件，或是違反任何法律或第三方權利所導致或與其相關之任何第三方提出之任何索賠或要求，包含合理的律師費，您同意賠償「Healro」和我們的總公司、子公司、聯盟夥伴、合作夥伴、主管人員、董事、代理商、承包商、授權人、服務供應商、轉包商、供應商、實習人員和員工，為其辯護，並使其免受傷害。
    </p>

    <h2>第 11 節 - 可分割性</h2>
    <p>
      如果本服務條款中的任何條款被視為違法或無效，該條款仍應在法律允許的範圍內強制執行，其餘條款仍將有效。
    </p>
    <h2>第 12 節 - 終止</h2>
    <p>就所有目的而言，雙方在終止日期前具有的義務與責任在本協議終止後仍然有效。</p>
    <p>
      除非由您或我方終止，否則本服務條款持續有效。您可隨時終止本服務條款，終止方法為通知我們您不想再使用我們的服務，或停止使用我們的網站。
      若在我們自行判斷後發現您未遵守或疑似未遵守本服務條款的任何規定，我們也可隨時終止本協議，且無須提供通知。您需負責支付到終止日期為止的所有應付款項，而且/或者我們可能會拒絕讓您存取我們的服務，或服務的任何部分。
    </p>

    <h2>第 13 節 - 完整協議</h2>
    <p>我方未行使或執行本服務條款中的任何權利或規定，並不構成對該權利或規定的放棄。</p>
    <p>
      本服務條款，以及我們在本網站上發佈或與服務相關之任何政策或作業規則，構成您與我方之間的完整協議與理解，且其效力凌駕於您與我方之間之任何先前或同時訂立的協議、通訊及提議之上，無論其為口頭或書面，包含但不限於服務條款的任何先前版本。
      本服務條款的解讀若有任何模糊之處，不應解釋為對擬定方不利。
    </p>

    <h2>第 14 節 - 管轄法律</h2>
    <p>
      本服務條款及我們據以提供服務的任何個別協議受台灣的法律規範，且應按該司法管轄區的法律解釋。
    </p>

    <h2>第 15 節 - 服務條款變更</h2>
    <p>您可隨時在本頁面檢閱最新版的服務條款。</p>
    <p>
      我們保留在自行決定後，透過發佈更新和變更到我們網站的方式來更新、變更或取代本服務條款的任何部分。您必須負責定期查看我們的網站，確認是否有任何變更。如果您在我們發佈本服務條款的任何變更後，繼續使用或存取我們的網站或服務，則表示您接受這些變更。
    </p>
  </div>
</template>

<style scoped>
.terms-of-service {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
  font-family: Arial, sans-serif;
}

.terms-of-service h1 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.5em;
}

.terms-of-service h2 {
  margin-top: 30px;
  margin-bottom: 15px;
  color: #333;
}

.terms-of-service p {
  margin-bottom: 15px;
  text-indent: 2em;
}

.terms-of-service button {
  background-color: transparent;
  text-decoration: underline;
  font-size: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
}
</style>
