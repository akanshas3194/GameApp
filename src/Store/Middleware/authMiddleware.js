import axios from 'axios';

const authMiddleware= () => ({dispatch})=>next => async action =>{
    if(action.type !== 'apiCallStart') return next(action)

    next(action);
    const {setData, url, data, method, headers, onSuccess} = action.payload


    try{

        let response = await axios.request({
            url,
            method,
            setData,
            data,
            headers,

        })
          
        
        {onSuccess && typeof onSuccess === 'string' && dispatch({type:onSuccess, payload:response.data})}
        {onSuccess && typeof onSuccess === 'function' && onSuccess(dispatch, response.data.token)}

    }

    catch(e){
        console.log(e)
    }
}

export default authMiddleware;