import {
  ADD_COUNTER,
  ADD_TO_CATR
} from './mutation-type'
export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CATR](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }

}
