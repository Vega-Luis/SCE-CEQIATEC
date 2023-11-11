import { axiosClient } from './AxiosClient';

export const getEquipmentList = (type, location, responsible) => {
    return axiosClient.get('/equipments',{
        body: {
            "type": type, 
            "location": location,
            "responsible": responsible
        },
    });
}

export const getUserList = () => {
    return axiosClient.get('/users');
}