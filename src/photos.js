import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: 'IfKikxW61P7aB4-trlx63ZoVgxZ6q_Iu2hiSGCKNn3Y',
})

let getPhoto = unsplash.photos.getRandom({ count: 10 }).then((x) => {
  return x.response
})
export { getPhoto }
