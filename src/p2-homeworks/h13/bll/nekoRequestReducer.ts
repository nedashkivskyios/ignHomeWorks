import {RequestAPI} from "../Request/requestAPI";
import {Dispatch} from "redux";
import {loadingAC} from "../../h10/bll/loadingReducer";

const initialState = {
  success: false,
  mesage: 'new text required',
  info: 'new info required',
}
export type NekoReducerStateType = typeof initialState

export const nekoRequestReducer = (state = initialState, action: ActionsType): NekoReducerStateType => {
  switch (action.type) {
    case "CHANGE-SUCCES": {
      return {
        ...state,
        success: action.success,
        mesage: action.message,
        info: action.info,
      }
    }
    case "CHANGE-CHECKED-VALUE": {
      return {
        ...state,
        success: action.success,
      }
    }
    default: {
      return state
    }
  }
}

type ActionsType =
  ReturnType<typeof changeSuccesDataAC>
  | ReturnType<typeof changeCheckedValue>
  | ReturnType<typeof loadingAC>
export const changeSuccesDataAC = (params: { success: boolean, message: string, info: string }) => ({
  type: 'CHANGE-SUCCES',
  success: params.success,
  message: params.message,
  info: params.info,
} as const)
export const changeCheckedValue = (success: boolean) => ({
  type: 'CHANGE-CHECKED-VALUE',
  success,
} as const)

export const changeSucces = (success: boolean) => (dispatch: Dispatch<ActionsType>) => {
  dispatch(loadingAC(true))
  RequestAPI.changeSucces(success)
    .then(res => {
      dispatch(changeSuccesDataAC({success, message: res.data.errorText, info: res.data.info}))
      dispatch(loadingAC(false))
    })
    .catch(error => {
      dispatch(changeSuccesDataAC({
        success,
        message: error.response ? error.response.data.errorText : error.message,
        info: error.response ? error.response.data.info : error.message,
      }))
      dispatch(loadingAC(false))
    })
}
