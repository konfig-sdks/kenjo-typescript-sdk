/* tslint:disable */
/* eslint-disable */
/*
Kenjo API

Before starting to use the Kenjo API, you have to request the API activation for a sandbox or production environment to the Kenjo Customer Success team. After that, an admin user has to go to *Settings > Integrations > API keys*, to generate the **API Key**. Follow the steps described in the **Autentication section** of this document. <br>The API key is needed to request the bearer token. Each endpoint callout requires a valid bearer token in the Authorization header. Once the token is retrieved, it will be useful during the time limit indicated by the 'expiration date'.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AreasCreateNewAreaRequest } from '../models';
// @ts-ignore
import { AreasCreateNewAreaResponse } from '../models';
// @ts-ignore
import { AreasGetByIdResponse } from '../models';
// @ts-ignore
import { AreasGetListResponseInner } from '../models';
// @ts-ignore
import { AreasUpdateAreaByIdRequest } from '../models';
// @ts-ignore
import { AreasUpdateAreaByIdResponse } from '../models';
// @ts-ignore
import { AuthenticationCreateBearerToken400Response } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AreasApi - axios parameter creator
 * @export
 */
export const AreasApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new area.<br>The *name* is the only required field.<br>
         * @param {string} authorization A valid bearer token.
         * @param {AreasCreateNewAreaRequest} areasCreateNewAreaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewArea: async (authorization: string, areasCreateNewAreaRequest: AreasCreateNewAreaRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('createNewArea', 'authorization', authorization)
            // verify required parameter 'areasCreateNewAreaRequest' is not null or undefined
            assertParamExists('createNewArea', 'areasCreateNewAreaRequest', areasCreateNewAreaRequest)
            const localVarPath = `/areas`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: areasCreateNewAreaRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/areas',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(areasCreateNewAreaRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the area referenced by *id*.
         * @param {string} id The _id of the area entry to request.
         * @param {string} authorization A valid bearer token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getById', 'authorization', authorization)
            const localVarPath = `/areas/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/areas/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of the existing areas in Kenjo.
         * @param {string} authorization A valid bearer token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList: async (authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getList', 'authorization', authorization)
            const localVarPath = `/areas`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/areas',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes the area referenced by *id*.
         * @param {string} id The _id of the area entry to request.
         * @param {string} authorization A valid bearer token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeById: async (id: string, authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeById', 'id', id)
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('removeById', 'authorization', authorization)
            const localVarPath = `/areas/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/areas/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a area referenced by *id*. Only the attributes submitted are modified.
         * @param {string} id The _id of the area entry to request.
         * @param {string} authorization A valid bearer token.
         * @param {AreasUpdateAreaByIdRequest} areasUpdateAreaByIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAreaById: async (id: string, authorization: string, areasUpdateAreaByIdRequest: AreasUpdateAreaByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateAreaById', 'id', id)
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('updateAreaById', 'authorization', authorization)
            // verify required parameter 'areasUpdateAreaByIdRequest' is not null or undefined
            assertParamExists('updateAreaById', 'areasUpdateAreaByIdRequest', areasUpdateAreaByIdRequest)
            const localVarPath = `/areas/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: areasUpdateAreaByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/areas/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(areasUpdateAreaByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AreasApi - functional programming interface
 * @export
 */
export const AreasApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AreasApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new area.<br>The *name* is the only required field.<br>
         * @param {AreasApiCreateNewAreaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewArea(requestParameters: AreasApiCreateNewAreaRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AreasCreateNewAreaResponse>> {
            const areasCreateNewAreaRequest: AreasCreateNewAreaRequest = {
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewArea(requestParameters.authorization, areasCreateNewAreaRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the area referenced by *id*.
         * @param {AreasApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: AreasApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AreasGetByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, requestParameters.authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of the existing areas in Kenjo.
         * @param {AreasApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getList(requestParameters: AreasApiGetListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AreasGetListResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getList(requestParameters.authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes the area referenced by *id*.
         * @param {AreasApiRemoveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeById(requestParameters: AreasApiRemoveByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeById(requestParameters.id, requestParameters.authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a area referenced by *id*. Only the attributes submitted are modified.
         * @param {AreasApiUpdateAreaByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAreaById(requestParameters: AreasApiUpdateAreaByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AreasUpdateAreaByIdResponse>> {
            const areasUpdateAreaByIdRequest: AreasUpdateAreaByIdRequest = {
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAreaById(requestParameters.id, requestParameters.authorization, areasUpdateAreaByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AreasApi - factory interface
 * @export
 */
export const AreasApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AreasApiFp(configuration)
    return {
        /**
         * Creates a new area.<br>The *name* is the only required field.<br>
         * @param {AreasApiCreateNewAreaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewArea(requestParameters: AreasApiCreateNewAreaRequest, options?: AxiosRequestConfig): AxiosPromise<AreasCreateNewAreaResponse> {
            return localVarFp.createNewArea(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the area referenced by *id*.
         * @param {AreasApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: AreasApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<AreasGetByIdResponse> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of the existing areas in Kenjo.
         * @param {AreasApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(requestParameters: AreasApiGetListRequest, options?: AxiosRequestConfig): AxiosPromise<Array<AreasGetListResponseInner>> {
            return localVarFp.getList(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the area referenced by *id*.
         * @param {AreasApiRemoveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeById(requestParameters: AreasApiRemoveByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a area referenced by *id*. Only the attributes submitted are modified.
         * @param {AreasApiUpdateAreaByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAreaById(requestParameters: AreasApiUpdateAreaByIdRequest, options?: AxiosRequestConfig): AxiosPromise<AreasUpdateAreaByIdResponse> {
            return localVarFp.updateAreaById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewArea operation in AreasApi.
 * @export
 * @interface AreasApiCreateNewAreaRequest
 */
export type AreasApiCreateNewAreaRequest = {
    
    /**
    * A valid bearer token.
    * @type {string}
    * @memberof AreasApiCreateNewArea
    */
    readonly authorization: string
    
} & AreasCreateNewAreaRequest

/**
 * Request parameters for getById operation in AreasApi.
 * @export
 * @interface AreasApiGetByIdRequest
 */
export type AreasApiGetByIdRequest = {
    
    /**
    * The _id of the area entry to request.
    * @type {string}
    * @memberof AreasApiGetById
    */
    readonly id: string
    
    /**
    * A valid bearer token.
    * @type {string}
    * @memberof AreasApiGetById
    */
    readonly authorization: string
    
}

/**
 * Request parameters for getList operation in AreasApi.
 * @export
 * @interface AreasApiGetListRequest
 */
export type AreasApiGetListRequest = {
    
    /**
    * A valid bearer token.
    * @type {string}
    * @memberof AreasApiGetList
    */
    readonly authorization: string
    
}

/**
 * Request parameters for removeById operation in AreasApi.
 * @export
 * @interface AreasApiRemoveByIdRequest
 */
export type AreasApiRemoveByIdRequest = {
    
    /**
    * The _id of the area entry to request.
    * @type {string}
    * @memberof AreasApiRemoveById
    */
    readonly id: string
    
    /**
    * A valid bearer token.
    * @type {string}
    * @memberof AreasApiRemoveById
    */
    readonly authorization: string
    
}

/**
 * Request parameters for updateAreaById operation in AreasApi.
 * @export
 * @interface AreasApiUpdateAreaByIdRequest
 */
export type AreasApiUpdateAreaByIdRequest = {
    
    /**
    * The _id of the area entry to request.
    * @type {string}
    * @memberof AreasApiUpdateAreaById
    */
    readonly id: string
    
    /**
    * A valid bearer token.
    * @type {string}
    * @memberof AreasApiUpdateAreaById
    */
    readonly authorization: string
    
} & AreasUpdateAreaByIdRequest

/**
 * AreasApiGenerated - object-oriented interface
 * @export
 * @class AreasApiGenerated
 * @extends {BaseAPI}
 */
export class AreasApiGenerated extends BaseAPI {
    /**
     * Creates a new area.<br>The *name* is the only required field.<br>
     * @param {AreasApiCreateNewAreaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AreasApiGenerated
     */
    public createNewArea(requestParameters: AreasApiCreateNewAreaRequest, options?: AxiosRequestConfig) {
        return AreasApiFp(this.configuration).createNewArea(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the area referenced by *id*.
     * @param {AreasApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AreasApiGenerated
     */
    public getById(requestParameters: AreasApiGetByIdRequest, options?: AxiosRequestConfig) {
        return AreasApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the existing areas in Kenjo.
     * @param {AreasApiGetListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AreasApiGenerated
     */
    public getList(requestParameters: AreasApiGetListRequest, options?: AxiosRequestConfig) {
        return AreasApiFp(this.configuration).getList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the area referenced by *id*.
     * @param {AreasApiRemoveByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AreasApiGenerated
     */
    public removeById(requestParameters: AreasApiRemoveByIdRequest, options?: AxiosRequestConfig) {
        return AreasApiFp(this.configuration).removeById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a area referenced by *id*. Only the attributes submitted are modified.
     * @param {AreasApiUpdateAreaByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AreasApiGenerated
     */
    public updateAreaById(requestParameters: AreasApiUpdateAreaByIdRequest, options?: AxiosRequestConfig) {
        return AreasApiFp(this.configuration).updateAreaById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
