import { Form } from '../form/Form'

export function CreatorPosts(textContent, parentNode) {
    let creator = document.createElement('button')
    creator.textContent = textContent
    creator.className = 'creator-posts'

    creator.addEventListener('click', (event) => {
        let form = new Form(parentNode)
        parentNode.style.pointerEvents = 'none'
        document.body.append(form)
    })

    return creator
}
