import { STAGE, API_URL as PROD_URL, API_URL_IOS, API_URL_ANDROID } from '@env';
import axios from 'axios';
import { Platform } from 'react-native';
import { StorageAdapter } from '../adaapters/async-storage';


export const API_URL = 
    (STAGE === 'prod')
    ? PROD_URL
    : Platform.OS === 'ios'
        ? API_URL_IOS
        : API_URL_ANDROID;



    const hesoApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
    })

    // TODO: Interceptors
    hesoApi.interceptors.request.use(
    async (config) => {

        const token = await StorageAdapter.getItem('token');
        if ( token )  {
        config.headers.Authorization = `Bearer ${token}`;
        
        // por si no funciona se usa asi 
        // config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    }
    );

export {
    hesoApi,
}