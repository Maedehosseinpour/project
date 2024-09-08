
import http from '../../core/services/interceptore'
import { useMutation, useQueryClient } from 'react-query';

const handlePut = async ({url , values}) => {
    console.log(values);
    const res = await http.put(url, values);
    return res;
};

const CustomPutUseMutationExtra = () => {
    const queryClient = useQueryClient();

    return useMutation((obj) => handlePut(obj),
     {

        onSuccess: (obj) => {
            queryClient.invalidateQueries(obj.key);
        

        },

    });

    
};

export  {CustomPutUseMutationExtra};