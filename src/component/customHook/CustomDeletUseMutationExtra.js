import http from '../../core/services/interceptore'
import { useMutation, useQueryClient } from 'react-query'


    const handleDel =async (url ) =>{
        const res =await http.delete(url);
        // console.log(res);
        return res.data

    }

const CustomDeletUseMutationExtra = () => {
    const queryClient = useQueryClient()


    return useMutation((obj) => handleDel(obj.url) , {
        onSuccess:(obj)=>{
            queryClient.invalidateQueries(obj.key)
            // queryClient.setQueryData('list2' , (oldData)=>{
            //     let newData = [...oldData]
            //     newData.push(data)

            //     console.log(oldData);
            //     return newData
                
            // })
        },

    })

    // const handleMutate = (values)=>{
    //     mutate(values)
    // }


}

export  {CustomDeletUseMutationExtra}