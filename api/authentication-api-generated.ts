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
import { AuthenticationCreateBearerTokenRequest } from '../models';
// @ts-ignore
import { AuthenticationCreateBearerTokenResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a bearer token to allow connecting the API.
         * @param {AuthenticationCreateBearerTokenRequest} authenticationCreateBearerTokenRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBearerToken: async (authenticationCreateBearerTokenRequest: AuthenticationCreateBearerTokenRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authenticationCreateBearerTokenRequest' is not null or undefined
            assertParamExists('createBearerToken', 'authenticationCreateBearerTokenRequest', authenticationCreateBearerTokenRequest)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: authenticationCreateBearerTokenRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/auth/login',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(authenticationCreateBearerTokenRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Invalidates a Bearer token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invalidateToken: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/auth/logout',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a bearer token to allow connecting the API.
         * @param {AuthenticationApiCreateBearerTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createBearerToken(requestParameters: AuthenticationApiCreateBearerTokenRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationCreateBearerTokenResponse>> {
            const authenticationCreateBearerTokenRequest: AuthenticationCreateBearerTokenRequest = {
                apiKey: requestParameters.apiKey
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createBearerToken(authenticationCreateBearerTokenRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Invalidates a Bearer token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invalidateToken(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invalidateToken(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * Create a bearer token to allow connecting the API.
         * @param {AuthenticationApiCreateBearerTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBearerToken(requestParameters: AuthenticationApiCreateBearerTokenRequest, options?: AxiosRequestConfig): AxiosPromise<AuthenticationCreateBearerTokenResponse> {
            return localVarFp.createBearerToken(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Invalidates a Bearer token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invalidateToken(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.invalidateToken(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createBearerToken operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiCreateBearerTokenRequest
 */
export type AuthenticationApiCreateBearerTokenRequest = {
    
} & AuthenticationCreateBearerTokenRequest

/**
 * AuthenticationApiGenerated - object-oriented interface
 * @export
 * @class AuthenticationApiGenerated
 * @extends {BaseAPI}
 */
export class AuthenticationApiGenerated extends BaseAPI {
    /**
     * Create a bearer token to allow connecting the API.
     * @param {AuthenticationApiCreateBearerTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiGenerated
     */
    public createBearerToken(requestParameters: AuthenticationApiCreateBearerTokenRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).createBearerToken(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Invalidates a Bearer token.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiGenerated
     */
    public invalidateToken(options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).invalidateToken(options).then((request) => request(this.axios, this.basePath));
    }
}
