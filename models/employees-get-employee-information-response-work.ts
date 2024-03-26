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
 * @interface EmployeesGetEmployeeInformationResponseWork
 */
export interface EmployeesGetEmployeeInformationResponseWork {
    /**
     * The company id of the Kenjo employee.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponseWork
     */
    'companyId'?: string;
    /**
     * The office id of the Kenjo employee.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponseWork
     */
    'officeId'?: string;
    /**
     * The department id of the Kenjo employee.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponseWork
     */
    'departmentId'?: string;
    /**
     * The starting date of the Kenjo employee in format YYYY-MM-DDThh:mm:ss.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponseWork
     */
    'startDate'?: string;
    /**
     * The job title of the employee.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponseWork
     */
    'jobTitle'?: string;
    /**
     * The work phone of the employee.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponseWork
     */
    'workPhone'?: string;
    /**
     * The work mobile of the employee.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponseWork
     */
    'workMobile'?: string;
    /**
     * Allow to indicate if the employee has or not the assistant role.
     * @type {boolean}
     * @memberof EmployeesGetEmployeeInformationResponseWork
     */
    'isAssistant'?: boolean;
    /**
     * The probation period of the employee. Format YYYY-MM-DDThh:mm:ss.000Z.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponseWork
     */
    'probationPeriodEnd'?: string;
    /**
     * The Kenjo employee id of the user to whom the employee reports. The employee id to assign can be an active or inactive user. Trying to assign the own employee id or the id of someone who is already reporting will arise an error.
     * @type {string}
     * @memberof EmployeesGetEmployeeInformationResponseWork
     */
    'reportsToId'?: string;
}

