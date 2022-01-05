import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {nekoRequestReducer} from "../../h13/bll/nekoRequestReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  loading: loadingReducer,
  theme: themeReducer,
  nekoRequest: nekoRequestReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store // for dev
