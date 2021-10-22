export const localStorageSetItem = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const localStorageGetItem = (key) => {
    const item = localStorage.getItem(key)
    return JSON.parse(item)
}