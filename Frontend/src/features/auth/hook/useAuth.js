import { setError,setLoading,setUser } from "../state/auth.slice";
import { login, register } from "../service/auth.api";
import { useDispatch } from "react-redux";

export const useAuth = ()=>{
    const dispatch = useDispatch();
    async function handleRegister({email,contact,password,fullName,isSeller=false}){
        try {
            dispatch(setLoading(true));
            const data = await register({email,contact,password,fullName,isSeller})
            dispatch(setUser(data.user));
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setError(error.message));
            dispatch(setLoading(false));
        }
    }

    async function handleLogin({email,password}){
        try {
            dispatch(setLoading(true));
            const data = await login({email,password});
            dispatch(setUser(data.user));
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setError(error.message));
            dispatch(setLoading(false));
        }
    }
    return {handleRegister,handleLogin}
}