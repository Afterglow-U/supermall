import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/h8',
    // baseURL: "http://192.168.0.105:8000"
    timeout: 5000
  })

  // instance.interceptors.request.use(config => {
  //   console.log(config);

  //   return config
  // }, err => {
  //   console.log(err);
  //   return err
  // })

  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
  // 相当于返回一个Promise
}
