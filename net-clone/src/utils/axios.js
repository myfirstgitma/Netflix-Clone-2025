import axios from "axios"
const insta = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
export default insta;