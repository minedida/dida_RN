import axios from 'axios'

export default class firHelper {
  static API_TOKEN = '4d4de4401439f954a183fbc0383e8353'
  static APP_ID = '5d294b3ef945481b38526a83'

  static async queryVersion() {
    return await axios.get(`http://api.fir.im/apps/latest/${this.APP_ID}?api_token=${this.API_TOKEN}`)
  }
}
