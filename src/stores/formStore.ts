import { defineStore } from 'pinia'
import formApi from '@/api/postGoogleForm'
import * as Model from '@/models/interfaces'

// 定義 Form 的 Pinia Store
export const useFormStore = defineStore('form', {
  state: (): Model.IFormData => ({
    company: '',
    name: '',
    phone: '',
    email: '',
    comment: '',
    terms: false
  }),
  actions: {
    async handleSubmit() {
      // 檢查 phone 和 comment 的值，如果為空則設置為 'None'
      const phone = this.phone || 'None'
      const comment = this.comment || 'None'

      const formData: Model.IFormData = {
        company: this.company,
        name: this.name,
        phone,
        email: this.email,
        comment,
        terms: this.terms
      }
      console.log(formData)
      try {
        await formApi.postForm(formData)
        console.log('表單已提交')
        alert('表單已送出!Form submitted!')
      } catch (e) {
        console.log('表單提交失敗 : ', e)
        alert('表單提交失敗，請稍後再試!')
      }
    },
    // 更新 cooment 備註的內容
    updateComment(newComment: string) {
      this.comment = newComment
    }
  }
})
