import request from '@/utils/request'

const test = async (obj) => {
  return request({
    url: 'test',
    method: 'post',
    data: obj
  })
}

export default { test }
