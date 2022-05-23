import { useEffect, useState } from "react";
import getHomeRequest from "../utils/getInitialData";
export default function Home(){
    const [name, setName] = useState('');
    const [nick, setNick] = useState('');
    const [pass, setPass] = useState('');
    function submit(e: any) {
        e.preventDefault();
        async function formSubmit () {
            const config = { name, nick, pass };
            try{
                const response = await getHomeRequest({config});
                console.log(response);
            }catch(e: any){
                console.log(e.message);
            }
        }
        formSubmit();
    } 
    return (
        <form onSubmit={submit}>
            <input type='text' placeholder='Nome' value={name} 
            onChange={(e) => { setName(e.target.value) }} />
            <input type='text' placeholder='Nickname' value={nick} 
            onChange={(e) => { setNick(e.target.value) }} />
            <input type='submit' value='Enviar' />
            {/*<input type='password' placeholder='Senha' value={pass} 
            onChange={(e) => { setPass(e.target.value) }}/>*/}
        </form>
    );
}