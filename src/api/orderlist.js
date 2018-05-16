import request from '@/utils/request'

const Datainit = async () => {
  return request({
    url: '/static/orderlist.json',
    method: 'get',
    params: { 'id': 1 }
  })
}

const pull = async (id) => {
  return request({
    url: '/static/orderlist.json',
    method: 'get',
    params: { 'id': id }
  })
}
export default { pull, Datainit }
