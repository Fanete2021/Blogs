import { dateСonversion } from '../../utils'
import heartIcon from '../../resources/heart.png'
import trashIcon from '../../resources/trash.png'
import hoverTrashIcon from '../../resources/hoverTrash.png'
import selectedHeartIcon from '../../resources/selectedHeart.png'
import { getPost, updatePost } from '../../localStroge'

export function Comment(options) {
    let comment = document.createElement('div')
    comment.className = 'comment'
    comment.innerHTML = createHTML(options)
    comment.id = options.id || 'comment'

    addEventListenerLike(comment, options)
    addEventListenerTrash(comment, options)

    return comment
}

function createHTML(options) {
    let formattedDate = dateСonversion(options.date)

    return `
        <div class="comment__header">
            <div class="header__left">
                <div class="header__name">${options.name}</div>
                <div class="header__date">${formattedDate}</div>
            </div>
            <div class="header__right">
                <img src="${options.like ? selectedHeartIcon : heartIcon}" class="header__like"></img>
                <img src="${trashIcon}" class="header__trash"></img>
            </div>
        </div>
        <div class="comment__text">${options.text}</div>
    `
}

function addEventListenerLike(comment, options) {
    let heart = comment.querySelector('.header__like')
    let isSelected = options.like || false

    heart.addEventListener('mouseover', () => {
        heart.src = selectedHeartIcon
    })

    heart.addEventListener('mouseout', () => {
        if (!isSelected) {
            heart.src = heartIcon
        }
    })

    heart.addEventListener('click', () => {
        isSelected = !isSelected
        if (isSelected) {
            heart.src = selectedHeartIcon
        } else {
            heart.src = heartIcon
        }

        let post = getPost(options.idPost)
        let idComment = post.comments.findIndex((c) => c.id === options.id)

        post.comments[idComment].like = isSelected
        updatePost(post)
    })
}

function addEventListenerTrash(comment, options) {
    let trash = comment.querySelector('.header__trash')

    trash.addEventListener('mouseover', () => {
        trash.src = hoverTrashIcon
    })

    trash.addEventListener('mouseout', () => {
        trash.src = trashIcon
    })

    trash.addEventListener('click', () => {
        let post = getPost(options.idPost)
        let idComment = post.comments.findIndex((c) => c.id === options.id)

        post.comments.splice(idComment, 1)
        updatePost(post)

        comment.remove()
    })
}
