import HttpRequest from '@/libs/axios'
import config from '@/config'
// process.env.NODE_ENV production  生产环境   development  开发环境  
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios
