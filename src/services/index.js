import { post } from '@/untils/request'
import api from './api'

const Login = opt => post(api.loginUrl)

export default {
    Login
}