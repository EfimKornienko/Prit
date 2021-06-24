import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: 'IfKikxW61P7aB4-trlx63ZoVgxZ6q_Iu2hiSGCKNn3Y',
})

export let getPhoto = unsplash.photos.getRandom({ count: 20 }).then((x) => {
  console.log('x', x.response)
  return x.response
})

export default function UserPhotos(userName) {
  const unsplash = createApi({
    accessKey: 'IfKikxW61P7aB4-trlx63ZoVgxZ6q_Iu2hiSGCKNn3Y',
  })
  return unsplash.users.getCollections({
    username: userName,
  })
}
// export default function getUserPhotos(userName) {
//   unsplash.users
//     .getPhotos({
//       username: userName,
//       page: 1,
//       perPage: 10,
//       orderBy: 'latest',
//       orientation: 'landscape',
//     })
//     .then((x) => {
//       console.log('x', x.response)
//       return x
//     })
// }
