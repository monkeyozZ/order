import request from '@/utils/request'

const pull = async () => {
  return request({
    url: '/static/customer.json',
    method: 'get'
  })
}

export default { pull }
