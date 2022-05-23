import styled from 'styled-components';
import getHomeRequest from "../utils/getInitialData";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
export default function Home(){
    const [name, setName] = useState('');
    const [nick, setNick] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['login']);
    function submit(e: any) {
        e.preventDefault();
        async function formSubmit () {
            const body = { name, nick, pass };
            try{
                const response = await getHomeRequest({body});
                console.log(response);
                if(response.status < 400){
                    setCookie('login', body, {path: '/'});
                    navigate('/initial');
                }
            }catch(e: any){
                console.log(e.message);
            }
        }
        formSubmit();
    } 
    return (
        <ContainerForm onSubmit={submit}>
            <RowField>
                <Field type='text' placeholder='Nome' value={name} 
                onChange={(e) => { setName(e.target.value) }} />
            </RowField>
            <RowField>
                <Field type='text' placeholder='Nickname' value={nick} 
                onChange={(e) => { setNick(e.target.value) }} />
            </RowField>
            <RowField>
                <Field type='password' placeholder='Senha' value={pass} 
                onChange={(e) => { setPass(e.target.value) }}/>
            </RowField>
            <RowField>
                <Field type='submit' value='Enviar' />
            </RowField>
        </ContainerForm>
    );
}

const ContainerForm = styled.form`
    box-sizing: border-box;
    width:50%;
    margin: auto;
`;

const RowField = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin-top: 10px;
`;

const Field = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
`;
