import axiosConfig from "./axiosConfig";

interface IConfig {
    config: { name: String, nick: String, pass: String }
}

export default async function getHomeRequest({ config }: IConfig){
    const request = await axiosConfig.get('/');
    return request;
}
