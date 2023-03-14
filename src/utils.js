export function generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

export function dateСonversion(timestamp) {
    const now = new Date()
    const date = new Date(timestamp)

    const diff = now.getTime() - date.getTime()

    const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24))

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    let formattedDate = ''
    if (daysAgo === 0) {
        formattedDate = `Сегодня, ${hours}:${minutes}`
    } else if (daysAgo === 1) {
        formattedDate = `Вчера, ${hours}:${minutes}`
    } else {
        formattedDate = `${year}-${month}-${day}, ${hours}:${minutes}`
    }

    return formattedDate
}
