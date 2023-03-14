export function getPosts() {
    return JSON.parse(localStorage.getItem('posts')) || []
}

export function addPost(post) {
    const posts = JSON.parse(localStorage.getItem('posts')) || []
    posts.push(post)
    localStorage.setItem('posts', JSON.stringify(posts))
}

export function updatePost(post) {
    const posts = JSON.parse(localStorage.getItem('posts')) || []

    const postIndex = posts.findIndex((p) => p.id === post.id)

    if (postIndex !== -1) {
        posts.splice(postIndex, 1, post)
    }

    localStorage.setItem('posts', JSON.stringify(posts))
}

export function getPost(id) {
    const posts = JSON.parse(localStorage.getItem('posts')) || []

    const postIndex = posts.findIndex((p) => p.id === id)

    return posts[postIndex]
}
