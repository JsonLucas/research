import axiosConfig from "./axiosConfig";

const homePageRequest = async (headers: any) => {
    const request = await axiosConfig.get('/initial', {headers});
    return request;
}

export default homePageRequest;