const onSuccess=(data)=>{
    console.log(data);
}

const onError=(err)=>{
    console.log(err.message);
}

export {onSuccess, onError}