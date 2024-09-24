import * as Model from '@/models/interfaces'

const baseUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSe1qwgtedMwkBJts5Oe8gorwXwCTX7Hgsfo1gq9UyjGZ_auqA/formResponse'

// Healro Form 表單對應欄位編號
// company   -> entry.364542438
// name      -> entry.538109801
// email     -> entry.604430983
// phone     -> entry.433654877
// message   -> entry.1980925470
// agreement -> entry.1832691606

/**
 * 使用 Google API 建立表單
 */
const actions = {
  async postForm(formResponse: Model.IFormResponse) {
    const formData = new URLSearchParams()
    // company
    formData.append('entry.364542438', formResponse.company)
    // name
    formData.append('entry.538109801', formResponse.name)
    // email
    formData.append('entry.604430983', formResponse.email)
    // phone
    formData.append('entry.433654877', formResponse.phone)
    // message
    formData.append('entry.1980925470', formResponse.comment)
    // agreement
    formData.append('entry.1832691606', formResponse.terms)

    const response = fetch(baseUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
  }
}

export default actions
