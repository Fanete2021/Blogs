import { updatePost } from '../../localStroge'
import { generateId } from '../../utils'
import { Comment } from '../comment/Comment'

export function Post(options) {
    let post = document.createElement('div')
    post.className = 'post'
    post.innerHTML = createHTML(options)
    post.id = options.id

    let comments = post.querySelector('.panel-comments__comments')
    fillingComments(comments, options.comments || [])
    addEventListenerOpenInputFields(post, options)

    return post
}

function createHTML(options) {
    return `
        <div class="post__wrapper">
            <div class="post__info">
                <div class="info__user-name">${options.name}</div>

                <div class="info__date">${options.date}</div>
            </div>

            <div class="post__text"><pre>${options.text}</pre></div>
        </div>

        <div class="post__panel-comments">
            <div class="panel-comments__comments">
            </div>

            <div class="panel-comments__creator">
                <span class="creator__open">Write a comment...</span>
            <div>
        </div>
    `
}

function fillingComments(parentNode, comments) {
    for (let comment of comments) {
        addComment(parentNode, comment)
    }
}

function addComment(parentNode, options) {
    let comment = new Comment(options)
    parentNode.append(comment)
}

function addEventListenerOpenInputFields(post, options) {
    let open = post.querySelector('.creator__open')

    open.addEventListener('click', (event) => {
        changeCreator(post, options)
    })
}

function changeCreator(post, options) {
    let creator = post.querySelector('.panel-comments__creator')

    creator.innerHTML = `
        <div class="creator__name">
            <input placeholder="Name"></input>
        </div>
        <div class="creator__text">
            <textarea placeholder="Text"></textarea>
            <button class="creator__add" disabled>Add</button>
        </div>
    `

    let button = post.querySelector('.creator__add')
    let name = post.querySelector('.creator__name input')
    let text = post.querySelector('.creator__text textarea')

    name.oninput = function () {
        if (name.value.length > 2 && text.value.length > 3) {
            button.disabled = false
        } else {
            button.disabled = true
        }
    }

    text.oninput = function () {
        if (name.value.length > 2 && text.value.length > 3) {
            button.disabled = false
        } else {
            button.disabled = true
        }
    }

    button.addEventListener('click', () => {
        let comments = post.querySelector('.panel-comments__comments')

        let valuesComment = {
            name: name.value,
            text: text.value,
            date: Date.now(),
            idPost: options.id,
            id: generateId(),
        }
        let comment = new Comment(valuesComment)

        comments.append(comment)

        options.comments = [...(options.comments || []), valuesComment]
        updatePost(options)

        creator.innerHTML = `<span class="creator__open">Write a comment...</span>`
        addEventListenerOpenInputFields(post, options)
    })
}
