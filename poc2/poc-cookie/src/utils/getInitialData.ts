import axiosConfig from "./axiosConfig";

interface IConfig {
    body: { name?: String, nick?: String, pass?: String }
}

export default async function getHomeRequest({ body }: IConfig){
    const request = await axiosConfig.post('/', body);
    return request;
}
