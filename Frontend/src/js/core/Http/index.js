import axios from "axios"

const baseUrl = process.env.BASE_URL

class Http {

    constructor(){

    }


    async get(endpoint){

       const data =  await axios.get(`${baseUrl}/endpoint`)
    }
}