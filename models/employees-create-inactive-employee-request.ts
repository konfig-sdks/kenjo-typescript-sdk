/*
Kenjo API

Before starting to use the Kenjo API, you have to request the API activation for a sandbox or production environment to the Kenjo Customer Success team. After that, an admin user has to go to *Settings > Integrations > API keys*, to generate the **API Key**. Follow the steps described in the **Autentication section** of this document. <br>The API key is needed to request the bearer token. Each endpoint callout requires a valid bearer token in the Authorization header. Once the token is retrieved, it will be useful during the time limit indicated by the 'expiration date'.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeesCreateInactiveEmployeeRequestAccount } from './employees-create-inactive-employee-request-account';
import { EmployeesCreateInactiveEmployeeRequestAddress } from './employees-create-inactive-employee-request-address';
import { EmployeesCreateInactiveEmployeeRequestFinancial } from './employees-create-inactive-employee-request-financial';
import { EmployeesCreateInactiveEmployeeRequestHome } from './employees-create-inactive-employee-request-home';
import { EmployeesCreateInactiveEmployeeRequestPersonal } from './employees-create-inactive-employee-request-personal';
import { EmployeesCreateInactiveEmployeeRequestWork } from './employees-create-inactive-employee-request-work';
import { EmployeesCreateInactiveEmployeeRequestWorkSchedule } from './employees-create-inactive-employee-request-work-schedule';

/**
 * 
 * @export
 * @interface EmployeesCreateInactiveEmployeeRequest
 */
export interface EmployeesCreateInactiveEmployeeRequest {
    /**
     * 
     * @type {EmployeesCreateInactiveEmployeeRequestAccount}
     * @memberof EmployeesCreateInactiveEmployeeRequest
     */
    'account'?: EmployeesCreateInactiveEmployeeRequestAccount;
    /**
     * 
     * @type {EmployeesCreateInactiveEmployeeRequestPersonal}
     * @memberof EmployeesCreateInactiveEmployeeRequest
     */
    'personal'?: EmployeesCreateInactiveEmployeeRequestPersonal;
    /**
     * 
     * @type {EmployeesCreateInactiveEmployeeRequestWork}
     * @memberof EmployeesCreateInactiveEmployeeRequest
     */
    'work'?: EmployeesCreateInactiveEmployeeRequestWork;
    /**
     * 
     * @type {EmployeesCreateInactiveEmployeeRequestWorkSchedule}
     * @memberof EmployeesCreateInactiveEmployeeRequest
     */
    'workSchedule'?: EmployeesCreateInactiveEmployeeRequestWorkSchedule;
    /**
     * 
     * @type {EmployeesCreateInactiveEmployeeRequestAddress}
     * @memberof EmployeesCreateInactiveEmployeeRequest
     */
    'address'?: EmployeesCreateInactiveEmployeeRequestAddress;
    /**
     * 
     * @type {EmployeesCreateInactiveEmployeeRequestFinancial}
     * @memberof EmployeesCreateInactiveEmployeeRequest
     */
    'financial'?: EmployeesCreateInactiveEmployeeRequestFinancial;
    /**
     * 
     * @type {EmployeesCreateInactiveEmployeeRequestHome}
     * @memberof EmployeesCreateInactiveEmployeeRequest
     */
    'home'?: EmployeesCreateInactiveEmployeeRequestHome;
}

