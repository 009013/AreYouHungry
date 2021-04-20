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

        }
    },
    reducers: {
        setMeta(state, action) {
            return { ...state, meta: action.payload }
        }
    }
}