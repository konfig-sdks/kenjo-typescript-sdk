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
 * @interface EmployeesGetEmployeeInformationResponsePersonal
 */
export interface EmployeesGetEmployeeInformationResponsePersonal {
    /**
     * The name of the Kenjo employee. This field is required.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponsePersonal
     */
    'firstName'?: string;
    /**
     * The surname of the Kenjo employee. This field is required.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponsePersonal
     */
    'lastName'?: string;
    /**
     * The composition of firstName and lastName of the Kenjo employee.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponsePersonal
     */
    'displayName'?: string;
    /**
     * The gender of the Kenjo employee.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponsePersonal
     */
    'gender'?: string;
    /**
     * The employee birth date. Format YYYY-MM-DDThh:00:00.000Z.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponsePersonal
     */
    'birthdate'?: string;
}

