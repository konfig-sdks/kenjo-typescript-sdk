/*
Kenjo API

Before starting to use the Kenjo API, you have to request the API activation for a sandbox or production environment to the Kenjo Customer Success team. After that, an admin user has to go to *Settings > Integrations > API keys*, to generate the **API Key**. Follow the steps described in the **Autentication section** of this document. <br>The API key is needed to request the bearer token. Each endpoint callout requires a valid bearer token in the Authorization header. Once the token is retrieved, it will be useful during the time limit indicated by the 'expiration date'.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface CompensationListContractTypesResponseDataInner
 */
export interface CompensationListContractTypesResponseDataInner {
    /**
     * The Kenjo _id of the returned contracts.
     * @type {string}
     * @memberof CompensationListContractTypesResponseDataInner
     */
    '_id'?: string;
    /**
     * The name of the contract type.
     * @type {string}
     * @memberof CompensationListContractTypesResponseDataInner
     */
    'name'?: string;
    /**
     * Determines if the contract is currently active.
     * @type {boolean}
     * @memberof CompensationListContractTypesResponseDataInner
     */
    'isActive'?: boolean;
}

