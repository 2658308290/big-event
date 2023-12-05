//获取文章分类
import request from '@/utils/request'
export const artGetChannelsService = () => request.get('/my/cate/list')
export const artAddChannelService = (data) => request.post('/my/cate/add', data)
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)
export const artDeleteChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })
export const artGetListService = (params) =>
  request.get('/my/article/list', {
    params
  })
//文章
//data需要是一个formData格式的对象
export const artPublishService = (data) => request.post('/my/article/add', data)

//文章：获取文章详情
export const artGetDetailService = (id) =>
  request.get('/my/article/info', { params: { id } })

// 文章：编辑文章接口
export const artEditService = (data) => request.put('/my/article/info', data)

// 文章：删除文章接口
export const artDelService = (id) =>
  request.delete('/my/article/info', { params: { id } })
