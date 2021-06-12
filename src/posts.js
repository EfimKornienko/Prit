let getPosts = fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    return json
  })

console.log(getPosts)
export { getPosts }
