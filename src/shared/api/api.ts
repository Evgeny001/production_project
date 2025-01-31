import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : '';

export const $api = axios.create({
    // baseURL: baseUrl,
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
    },
});
