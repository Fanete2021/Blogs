import { addPost } from '../../localStroge'
import { generateId } from '../../utils'
import { Post } from '../post/Post'

export function Form(blog) {
    let form = document.createElement('form')
    form.className = 'form'
    form.innerHTML = createHTML()

    form.querySelector('.form__close').addEventListener('click', (event) => {
        blog.style.pointerEvents = ''
        form.remove()
    })

    form.addEventListener('submit', formSubmit)
    addEventListenerToInput(form)
    addEventListenerButton(form, blog)

    return form
}

function createHTML() {
    var today = new Date().toISOString().substr(0, 10)

    return `
        <div>
            <span class="form__title-field">Name</span>
            <span class="form__error form__error-name"></span>
        </div>
        <input class="form__name"></input>

        <div>
            <span class="form__title-field">Text</span>
            <span class="form__error form__error-text"></span>
        </div>
        <textarea class="form__text"></textarea>

        <div>
            <span class="form__title-field">Date</span>
            <span class="form__error form__error-date"></span>
        </div>
        <input class="form__date" type="date" value="${today}"></input>

        <button type="submit" class="form__send" disabled="true">
            Create
        </button>

        <div class="form__close">✕</div>
    `
}

function formSubmit(event) {
    event.preventDefault()
    document.querySelector('div').style.pointerEvents = ''
    document.removeEventListener('keydown', formSubmit)
    document.body.removeChild(document.querySelector('.form'))
}

function formSubmitKeydown(event) {
    let activeTag = document.activeElement.tagName
    if (event.key === 'Enter') {
        event.preventDefault()
        if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA') {
            formSubmit(event)
        }
    }
}

function getValidator(form) {
    let inputs = [
        form.querySelector('.form__name'),
        form.querySelector('.form__text'),
        form.querySelector('.form__date'),
    ]

    let errors = [
        form.querySelector('.form__error-name'),
        form.querySelector('.form__error-text'),
        form.querySelector('.form__error-date'),
    ]

    let checkError = [
        (name) => {
            if (name.length < 3) {
                return 'The minimum length of the name is 3 characters'
            }
        },
        (text) => {
            if (text.length < 30) {
                return 'The minimum text length is 30 characters'
            }
        },
        (date) => {
            date = date.split('-')
            let year = date[0]
            let month = date[1]
            let day = date[2]

            if (!year || !month || !day) {
                return 'Not fully completed date'
            }

            if (year < 2000) {
                return 'The year before 2000 is not suitable'
            }

            if (year > 2030) {
                return 'The year after 2030 is not suitable'
            }
        },
    ]

    return {
        inputs,
        errors,
        checkError,
    }
}

function addEventListenerToInput(form) {
    let { inputs, checkError, errors } = getValidator(form)

    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].onblur = function () {
            let textError = checkError[i](inputs[i].value)
            if (textError) {
                errors[i].innerHTML = textError
            }
        }

        inputs[i].onfocus = function () {
            errors[i].innerHTML = ''
        }

        inputs[i].oninput = function () {
            changeButtonDisabled(form)
        }
    }
}

function changeButtonDisabled(form) {
    let isDisabled = false
    let { inputs, checkError } = getValidator(form)

    for (let i = 0; i < inputs.length; ++i) {
        let error = checkError[i](inputs[i].value)
        if (error) {
            isDisabled = true
            break
        }
    }

    form.querySelector('button').disabled = isDisabled
    if (isDisabled) {
        document.removeEventListener('keydown', formSubmitKeydown)
    } else {
        document.addEventListener('keydown', formSubmitKeydown)
    }
}

function getValues(form) {
    let { inputs } = getValidator(form)

    return {
        name: inputs[0].value,
        text: inputs[1].value,
        date: inputs[2].value,
    }
}

function addEventListenerButton(form, blog) {
    let button = form.querySelector('.form__send')

    button.addEventListener('click', (event) => {
        formSubmit(event)
        let values = getValues(form)
        let id = generateId()
        console.log(values)
        let post = new Post({ ...values, id: id })

        addPost({ ...values, id: id })

        blog.append(post)
    })
}
