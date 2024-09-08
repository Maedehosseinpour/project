import axios from 'axios'
import http from '../../core/services/interceptore'
import { useMutation, useQueryClient } from 'react-query'



const handleAdd = async ({url , values}) => {
    const res = await http.post(url, values);
    return res.data;
};

const CustomPostUseMutationExtra = () =>{


    const queryClient = useQueryClient();

    return useMutation((obj) => handleAdd(obj),{

        onSuccess:(obj)=>{
            queryClient.invalidateQueries(obj.key)
      },
    } 
    )


}

export {CustomPostUseMutationExtra}