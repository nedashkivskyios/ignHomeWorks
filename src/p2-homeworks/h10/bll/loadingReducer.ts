const initState = {
  loading: false,
}
export type InitStateType = typeof initState

export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
  switch (action.type) {
    case 'SET-LOADING-STATE-TRUE': {
      return {
        ...state,
        loading: action.isLoading,
      }
    }
    default: {
      return state
    }
  }
}


export const loadingAC = (isLoading: boolean) => ({
  type: 'SET-LOADING-STATE-TRUE',
  isLoading,
} as const)
export type ActionType = ReturnType<typeof loadingAC>