import axios from "axios"
import http from '../core/services/interceptore'

const postList =async(url) => {
    const queryClien= useQueryClient()
    const handleAdd =async (v) =>{
    const res =await http.post('https://662652ab052332d553227616.mockapi.io/test/test' , v);
    return res.data
}

