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
import { AuthenticationCreateBearerToken400Response } from '../models';
// @ts-ignore
import { TeamsCreateTeamRequest } from '../models';
// @ts-ignore
import { TeamsCreateTeamResponse } from '../models';
// @ts-ignore
import { TeamsGetByIdResponse } from '../models';
// @ts-ignore
import { TeamsGetListResponseInner } from '../models';
// @ts-ignore
import { TeamsUpdateTeamAttributesRequest } from '../models';
// @ts-ignore
import { TeamsUpdateTeamAttributesResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TeamsApi - axios parameter creator
 * @export
 */
export const TeamsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new team.<br>The *name* is the only required field.<br>
         * @param {string} authorization A valid bearer token.
         * @param {TeamsCreateTeamRequest} teamsCreateTeamRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeam: async (authorization: string, teamsCreateTeamRequest: TeamsCreateTeamRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('createTeam', 'authorization', authorization)
            // verify required parameter 'teamsCreateTeamRequest' is not null or undefined
            assertParamExists('createTeam', 'teamsCreateTeamRequest', teamsCreateTeamRequest)
            const localVarPath = `/teams`;
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
                requestBody: teamsCreateTeamRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/teams',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(teamsCreateTeamRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the team referenced by *id*.
         * @param {string} id The _id of the team entry to request.
         * @param {string} authorization A valid bearer token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getById', 'authorization', authorization)
            const localVarPath = `/teams/{id}`
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
                pathTemplate: '/teams/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of the existing teams in Kenjo.
         * @param {string} authorization A valid bearer token.
         * @param {string} [name] The team name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList: async (authorization: string, name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getList', 'authorization', authorization)
            const localVarPath = `/teams`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

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
                pathTemplate: '/teams',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes the team referenced by *id*.
         * @param {string} id The _id of the team entry to request.
         * @param {string} authorization A valid bearer token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeTeam: async (id: string, authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeTeam', 'id', id)
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('removeTeam', 'authorization', authorization)
            const localVarPath = `/teams/{id}`
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
                pathTemplate: '/teams/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a team referenced by *id*. Only the attributes submitted are modified.
         * @param {string} id The _id of the team entry to request. Required field.
         * @param {string} authorization A valid bearer token.
         * @param {TeamsUpdateTeamAttributesRequest} teamsUpdateTeamAttributesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTeamAttributes: async (id: string, authorization: string, teamsUpdateTeamAttributesRequest: TeamsUpdateTeamAttributesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateTeamAttributes', 'id', id)
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('updateTeamAttributes', 'authorization', authorization)
            // verify required parameter 'teamsUpdateTeamAttributesRequest' is not null or undefined
            assertParamExists('updateTeamAttributes', 'teamsUpdateTeamAttributesRequest', teamsUpdateTeamAttributesRequest)
            const localVarPath = `/teams/{id}`
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
                requestBody: teamsUpdateTeamAttributesRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/teams/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(teamsUpdateTeamAttributesRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TeamsApi - functional programming interface
 * @export
 */
export const TeamsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TeamsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new team.<br>The *name* is the only required field.<br>
         * @param {TeamsApiCreateTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTeam(requestParameters: TeamsApiCreateTeamRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamsCreateTeamResponse>> {
            const teamsCreateTeamRequest: TeamsCreateTeamRequest = {
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTeam(requestParameters.authorization, teamsCreateTeamRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the team referenced by *id*.
         * @param {TeamsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: TeamsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamsGetByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, requestParameters.authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of the existing teams in Kenjo.
         * @param {TeamsApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getList(requestParameters: TeamsApiGetListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TeamsGetListResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getList(requestParameters.authorization, requestParameters.name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes the team referenced by *id*.
         * @param {TeamsApiRemoveTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeTeam(requestParameters: TeamsApiRemoveTeamRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeTeam(requestParameters.id, requestParameters.authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a team referenced by *id*. Only the attributes submitted are modified.
         * @param {TeamsApiUpdateTeamAttributesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTeamAttributes(requestParameters: TeamsApiUpdateTeamAttributesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamsUpdateTeamAttributesResponse>> {
            const teamsUpdateTeamAttributesRequest: TeamsUpdateTeamAttributesRequest = {
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTeamAttributes(requestParameters.id, requestParameters.authorization, teamsUpdateTeamAttributesRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TeamsApi - factory interface
 * @export
 */
export const TeamsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TeamsApiFp(configuration)
    return {
        /**
         * Creates a new team.<br>The *name* is the only required field.<br>
         * @param {TeamsApiCreateTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeam(requestParameters: TeamsApiCreateTeamRequest, options?: AxiosRequestConfig): AxiosPromise<TeamsCreateTeamResponse> {
            return localVarFp.createTeam(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the team referenced by *id*.
         * @param {TeamsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: TeamsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<TeamsGetByIdResponse> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of the existing teams in Kenjo.
         * @param {TeamsApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(requestParameters: TeamsApiGetListRequest, options?: AxiosRequestConfig): AxiosPromise<Array<TeamsGetListResponseInner>> {
            return localVarFp.getList(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the team referenced by *id*.
         * @param {TeamsApiRemoveTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeTeam(requestParameters: TeamsApiRemoveTeamRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeTeam(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a team referenced by *id*. Only the attributes submitted are modified.
         * @param {TeamsApiUpdateTeamAttributesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTeamAttributes(requestParameters: TeamsApiUpdateTeamAttributesRequest, options?: AxiosRequestConfig): AxiosPromise<TeamsUpdateTeamAttributesResponse> {
            return localVarFp.updateTeamAttributes(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createTeam operation in TeamsApi.
 * @export
 * @interface TeamsApiCreateTeamRequest
 */
export type TeamsApiCreateTeamRequest = {
    
    /**
    * A valid bearer token.
    * @type {string}
    * @memberof TeamsApiCreateTeam
    */
    readonly authorization: string
    
} & TeamsCreateTeamRequest

/**
 * Request parameters for getById operation in TeamsApi.
 * @export
 * @interface TeamsApiGetByIdRequest
 */
export type TeamsApiGetByIdRequest = {
    
    /**
    * The _id of the team entry to request.
    * @type {string}
    * @memberof TeamsApiGetById
    */
    readonly id: string
    
    /**
    * A valid bearer token.
    * @type {string}
    * @memberof TeamsApiGetById
    */
    readonly authorization: string
    
}

/**
 * Request parameters for getList operation in TeamsApi.
 * @export
 * @interface TeamsApiGetListRequest
 */
export type TeamsApiGetListRequest = {
    
    /**
    * A valid bearer token.
    * @type {string}
    * @memberof TeamsApiGetList
    */
    readonly authorization: string
    
    /**
    * The team name.
    * @type {string}
    * @memberof TeamsApiGetList
    */
    readonly name?: string
    
}

/**
 * Request parameters for removeTeam operation in TeamsApi.
 * @export
 * @interface TeamsApiRemoveTeamRequest
 */
export type TeamsApiRemoveTeamRequest = {
    
    /**
    * The _id of the team entry to request.
    * @type {string}
    * @memberof TeamsApiRemoveTeam
    */
    readonly id: string
    
    /**
    * A valid bearer token.
    * @type {string}
    * @memberof TeamsApiRemoveTeam
    */
    readonly authorization: string
    
}

/**
 * Request parameters for updateTeamAttributes operation in TeamsApi.
 * @export
 * @interface TeamsApiUpdateTeamAttributesRequest
 */
export type TeamsApiUpdateTeamAttributesRequest = {
    
    /**
    * The _id of the team entry to request. Required field.
    * @type {string}
    * @memberof TeamsApiUpdateTeamAttributes
    */
    readonly id: string
    
    /**
    * A valid bearer token.
    * @type {string}
    * @memberof TeamsApiUpdateTeamAttributes
    */
    readonly authorization: string
    
} & TeamsUpdateTeamAttributesRequest

/**
 * TeamsApiGenerated - object-oriented interface
 * @export
 * @class TeamsApiGenerated
 * @extends {BaseAPI}
 */
export class TeamsApiGenerated extends BaseAPI {
    /**
     * Creates a new team.<br>The *name* is the only required field.<br>
     * @param {TeamsApiCreateTeamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiGenerated
     */
    public createTeam(requestParameters: TeamsApiCreateTeamRequest, options?: AxiosRequestConfig) {
        return TeamsApiFp(this.configuration).createTeam(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the team referenced by *id*.
     * @param {TeamsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiGenerated
     */
    public getById(requestParameters: TeamsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return TeamsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the existing teams in Kenjo.
     * @param {TeamsApiGetListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiGenerated
     */
    public getList(requestParameters: TeamsApiGetListRequest, options?: AxiosRequestConfig) {
        return TeamsApiFp(this.configuration).getList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the team referenced by *id*.
     * @param {TeamsApiRemoveTeamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiGenerated
     */
    public removeTeam(requestParameters: TeamsApiRemoveTeamRequest, options?: AxiosRequestConfig) {
        return TeamsApiFp(this.configuration).removeTeam(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a team referenced by *id*. Only the attributes submitted are modified.
     * @param {TeamsApiUpdateTeamAttributesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiGenerated
     */
    public updateTeamAttributes(requestParameters: TeamsApiUpdateTeamAttributesRequest, options?: AxiosRequestConfig) {
        return TeamsApiFp(this.configuration).updateTeamAttributes(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
