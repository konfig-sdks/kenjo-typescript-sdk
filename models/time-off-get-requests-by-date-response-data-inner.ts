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
 * @interface TimeOffGetRequestsByDateResponseDataInner
 */
export interface TimeOffGetRequestsByDateResponseDataInner {
    /**
     * The provided description on the time-off request.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    'description'?: string;
    /**
     * The Kenjo _id of the returned time-off request.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    '_id'?: string;
    /**
     * The employee id associated to the time-off request.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    '_userId'?: string;
    /**
     * The time-off type id associated to the time-off request.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    '_timeOfTypeId'?: string;
    /**
     * The policy id associated to the time-off request.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    '_policyId'?: string;
    /**
     * The name of the policy id associated to the time-off request.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    'policyName'?: string;
    /**
     * The type of the policy associated to the time-off request. It can be type *Hour* or *Day*.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    '_policyType'?: string;
    /**
     * The status of the time-off request.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    'status'?: string;
    /**
     * The from date of the time-off request in format YYYY-MM-DDThh:mm:ss.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    'from'?: string;
    /**
     * The to date of the time-off request in format YYYY-MM-DDThh:mm:ss.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    'to'?: string;
    /**
     * The duration of the time-off request. It doesn\'t exclude bank holidays nor non-working days.
     * @type {number}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    'duration'?: number;
    /**
     * The duration of the time-off request. It excludes bank holidays and non-working days.
     * @type {number}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    'workingTime'?: number;
    /**
     * The date that the time-off request was created in format YYYY-MM-DDThh:mm:ss.
     * @type {string}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    '_createdAt'?: string;
    /**
     * Determines if the time-off request has related attachments.
     * @type {boolean}
     * @memberof TimeOffGetRequestsByDateResponseDataInner
     */
    'hasAttachment'?: boolean;
}

