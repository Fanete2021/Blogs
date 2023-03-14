import { CreatorPosts } from '../elements/creatorPosts/CreatorPosts'
import { Post } from '../elements/post/Post'

export function Main(posts) {
    let main = document.createElement('div')
    main.className = 'main'

    let creator = new CreatorPosts('create post', main)

    let separation = document.createElement('div')
    separation.className = 'separation'

    main.append(creator)
    main.append(separation)

    for (let i = 0; i < posts.length; ++i) {
        let post = new Post(posts[i])
        main.append(post)
    }

    return main
}
