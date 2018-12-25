import Mock from 'mockjs'
import shopsData from './data'

Mock.mock('./wocao/data', {
  code: 0,
  codeMsg: '成功',
  data: shopsData
})
