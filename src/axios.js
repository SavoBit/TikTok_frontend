import axios from 'axios'

const instance = axios.create({
	baseURL: "https://tiktok-back012.herokuapp.com/"
})

export default instance