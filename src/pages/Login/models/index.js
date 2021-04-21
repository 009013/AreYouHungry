import { pathToRegexp } from 'path-to-regexp'
import { loginFun, metaFun } from '@/services'

export default {
    namespace: 'login', //命名空间

    state: {
        obj: {},
        meta: ''
    },
    pathToRegexp: {   //初始化数据

    },
    effects:{
        *meta({payload}, {call, put, select}){
            const data = yield call(() => metaFun(payload))
            //赋值
            yield put({
                type: 'setMeta',
                payload: data.data.code
            })
        },
        *loginFn({payload}, {call, put, select}){
            const res = yield call(() => loginFun(payload))
            if(res.data.status === 0){
                sessionStorage.setItem("info", res.data.message)
            }
            return yield put({
                type: 'setLogin',
                payload: res.data
            })
         
        },
    },
    reducers: {
        setMeta(state, action) {
            return { ...state, meta: action.payload }
        },
        setLogin(state, action) {
            return { ...state, obj: action.payload }
        }
    }
}