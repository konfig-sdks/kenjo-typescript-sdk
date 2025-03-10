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
 * @interface OfficesCreateNewOfficeRequest
 */
export interface OfficesCreateNewOfficeRequest {
    /**
     * The new name of the office to create. Required field.
     * @type {string}
     * @memberof OfficesCreateNewOfficeRequest
     */
    'name'?: string;
    /**
     * The company id of the office to create. Required field.
     * @type {string}
     * @memberof OfficesCreateNewOfficeRequest
     */
    'companyId'?: string;
    /**
     * The calendar id of the office to create. Required field.
     * @type {string}
     * @memberof OfficesCreateNewOfficeRequest
     */
    'calendarId'?: string;
    /**
     * The country of the office to create in ISO code.
     * @type {string}
     * @memberof OfficesCreateNewOfficeRequest
     */
    'country'?: string;
    /**
     * The postal code of the office to create.
     * @type {string}
     * @memberof OfficesCreateNewOfficeRequest
     */
    'postalCode'?: string;
    /**
     * The city of the office to create.
     * @type {string}
     * @memberof OfficesCreateNewOfficeRequest
     */
    'city'?: string;
    /**
     * The street of the office to create.
     * @type {string}
     * @memberof OfficesCreateNewOfficeRequest
     */
    'street'?: string;
}

