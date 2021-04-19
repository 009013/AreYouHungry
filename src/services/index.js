import { post } from '@/untils/request'
import api from './api'

const loginFun = opt => post(api.loginUrl, opt)
const metaFun = opt => post(mateUrl)
export default {
    loginFun, metaFun
}