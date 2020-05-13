import axios from "axios"

const server = 'https://g8zku.sse.codesandbox.io/api/v1'
export const Axios = axios.create({
    baseURL: server,
    timeout: 20000,
}) 

export const sendNewPost = ({title, author, description, content}) => {
    return Axios({
        method: 'post',
        responseType: 'json',
        url: '/posts',
        data: {
            title, author, description, content
        }
    })
} 

export const getPosts = ({limit = 5, page = 0}) => {
    return Axios.get(`/posts?limit=${limit}&page=${page}`).then(res => res.data.posts)
}

export const getLengthPost = () => {
    return Axios.get('/posts/length').then(res => res.data.length)
}


export const getMyProfile =  (id) => {
    return Axios.get(`/my-profile/${id}`).then(res => {
        
        return res.data.user})
} 