import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): Array<UserType> => {
  switch (action.type) {
    case 'sort': {
      if (action.payload === 'up') {
        return [...state].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      } else if (action.payload === 'down') {
        return [...state].sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
      } else {
        return state
      }
    }
    case 'check': {
      return [...state].filter(el => el.age >= 18)
    }
    default:
      return state
  }
}
export type ActionTypes =
  ReturnType<typeof sortUpAC>
  | ReturnType<typeof sortDownAC>
  | ReturnType<typeof checkAgeAC>

export const sortUpAC = () => ({
  type: 'sort',
  payload: 'up'
} as const)
export const sortDownAC = () => ({
  type: 'sort',
  payload: 'down'
} as const)
export const checkAgeAC = (age: number) => ({
  type: 'check',
  payload: age
} as const)
