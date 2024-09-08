
import http from '../core/services/interceptore'

const getList =async(url) => {
    const res = await http.get(url)
    return res
}

export {getList}