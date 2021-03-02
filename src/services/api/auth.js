import APIService from './lib'

export const  signin = async(data)=>{
    return APIService.post("signin", data)
}