const initState = {
  themes: ['dark', 'red', 'some', 'blue'] as Array<ThemeNameType>,
  theme: 'some' as ThemeNameType,
};

export type ThemeReducerStateType = typeof initState

export const themeReducer = (state = initState, action: ThemeReducerActionTypes): ThemeReducerStateType => {
  switch (action.type) {
    case "CHANGE-THEME": {
      return {
        ...state,
        theme: action.theme,
      };
    }
    default:
      return state;
  }
};

type ThemeReducerActionTypes = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: ThemeNameType) => ({
  type: 'CHANGE-THEME',
  theme,
} as const);
export type ThemeNameType = 'some' | 'red' | 'dark' | 'blue'