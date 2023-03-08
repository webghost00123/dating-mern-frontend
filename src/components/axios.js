import axios from 'axios'
const instance = axios.create({
 baseURL: "https://dating-app-mern-webghost.herokuapp.com/"
})
export default instance