import axios from 'axios';
import { StorageKeys } from '../enum/storage-keys.enum';
import { ResponseErrorInterface } from '../interfaces/response-error.interface';
import CryptoUtil from '../utils/crypto.util';
import secureLocalStorage from 'react-secure-storage';

export abstract class BaseService {

    protected apiAdvisor = axios.create({
        baseURL: import.meta.env.VITE_API_ADVISOR,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    protected async authorizedHeader() {
        const jwt = secureLocalStorage.getItem(StorageKeys.JWT);

        return {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt?.toString()}`,
            },
        };
    }

    protected extractData<T>(response: any): T {
        return response.data.data || {};
    }

    protected extractCryptoData(response: any) {
        const decryptedData = CryptoUtil.decrypt(
            this.getPayloadKey(),
            response.data.payload
        );
        return JSON.parse(decryptedData);
    }

    protected encrypt(request: any) {
        const encryptedData = CryptoUtil.encrypt(
            this.getPayloadKey(),
            JSON.stringify(request)
        );
        return { payload: encryptedData };
    }

    private getPayloadKey(): string {
        let payloadKey = '';

        payloadKey = import.meta.env.VITE_PAYLOAD_KEY || '';

        if (!payloadKey) throw new Error('PAYLOAD_KEY is required!');

        return payloadKey;
    }

    static extractErrorResponse(error: any): ResponseErrorInterface {
        let responseError: ResponseErrorInterface = {
            statusCode: 0,
            errors: [],
        };

        if (error.response) {
            if (error.response.status === 401) {
                responseError.statusCode = 401;
                responseError.errors.push('unauthorized');
            } else if (error.response.status === 400) {
                responseError.statusCode = 400;
                responseError.errors = error.response.data.errors;
            } else {
                responseError.statusCode = 500;
                responseError.errors.push('error processing request');
            }
        } else {
            responseError.statusCode = 500;
            responseError.errors.push(error.message);
        }

        return responseError;
    }
}
