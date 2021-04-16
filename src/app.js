import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['home'],  // 配置白名单
}
// 数据持久化
const persistEnhancer = () => createStore => (reducer, initialState, enhancer) => {
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer);
  const persist = persistStore(store);
  return {...store, persist };
}

export const dva = {
  config: {
    extraEnhancers: [persistEnhancer()]
  }
}
