const login = async ({email, password})=>{
    try{
        const res = await axios.get('/login', body: {email, password});
        return res;
    }catch(error){
        console.error(error);
        return 
    }
}