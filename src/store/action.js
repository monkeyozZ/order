import * as types from './mutation'
export const SetHeaderText = ({commit}, text) => {
  commit(types.HEADER_TEXT, text)
}
