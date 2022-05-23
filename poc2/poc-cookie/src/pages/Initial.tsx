import { useEffect } from "react";
import { useCookies } from "react-cookie";
import homePageRequest from "../utils/homePageRequest";

export default function Initial() {
    const [cookies] = useCookies(['login']);
    useEffect(() => {
        async function homeRequest(){
            const { login } = cookies;
            try{
                const response = await homePageRequest({...login});
                console.log(response);
            }catch(e: any){
                console.log(e.message);
            }
        }
        homeRequest();
    }, []);
    return (
        <div> KK eae men </div>
    );
}