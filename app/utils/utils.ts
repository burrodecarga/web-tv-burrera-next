export const getImageUrl = (url:string)=>{
    if(!url) return ''
    return `${url}?t=${new Date().getTime()}`
}