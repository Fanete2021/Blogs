import { getPosts } from './localStroge'
import { Main } from './pages/Main'
import './scss/index.scss'

const existingPosts = getPosts()
let main = new Main(existingPosts)

document.body.append(main)
