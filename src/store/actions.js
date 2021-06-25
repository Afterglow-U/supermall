import {
  ADD_COUNTER,
  ADD_TO_CATR
} from './mutation-type'

export default {
  addCart(context, payload) {
    // 查找之前数组中是否有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    // 判断oldProduct
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      context.commit(ADD_TO_CATR, payload)
    }
  }

}