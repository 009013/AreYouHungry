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
    effacts:{
        *meta({payload}, {call, put, select}){
            const data = yield call(() => metaFun(payload))
            console.log(data)
        }
    },
    reducers: {
        setMeta(state, action) {
            console.log(state);
            return { ...state, meta: action.payload }
        }
    }
}