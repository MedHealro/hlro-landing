import axios, { Axios, type AxiosPromise, type AxiosResponse } from 'axios'

const baseUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeQ_ZKnTTZoshusuAOvQTCWVrvCnl5Yf9eLCAYw9GS5vNVjGA/formResponse'

// name -> entry.25653564
// email -> entry.1517608123

const actions = {
  async postForm (formResponse) {
    const googleFormResponse = {
      // name
      'entry.25653564': formResponse.name ? formResponse.name : 'null',
      'entry.1517608123': formResponse.email ? formResponse.email : 'null'
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    }

    try {      
      console.log('posting to google forms')
      // const { data } = await axios.post(`${baseUrl}`, googleFormResponse)
      const res = await axios.post(`${baseUrl}`, googleFormResponse, config)
      console.log('post response:')
      console.log(res)
    } catch (error) {
      if (axios.isAxiosError(error)) {    
        // handle axios error
        console.log(error)
      } else {    
        // handle self defined or unexpected error
        console.log(error)
      }
    }
  }
}

const methods = {

}

export default actions