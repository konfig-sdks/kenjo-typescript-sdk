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
 * @interface EmployeesGetWorkSchedulesResponseDataInner
 */
export interface EmployeesGetWorkSchedulesResponseDataInner {
    /**
     * The _id of the Kenjo employee.
     * @type {string}
     * @memberof EmployeesGetWorkSchedulesResponseDataInner
     */
    '_id'?: string;
    /**
     * Indicate if mondays are working days for the employee.
     * @type {boolean}
     * @memberof EmployeesGetWorkSchedulesResponseDataInner
     */
    'mondayWorkingDay'?: boolean;
    /**
     * Indicate if tuesdays are working days for the employee.
     * @type {boolean}
     * @memberof EmployeesGetWorkSchedulesResponseDataInner
     */
    'tuesdayWorkingDay'?: boolean;
    /**
     * Indicate if wednesdays are working days for the employee.
     * @type {boolean}
     * @memberof EmployeesGetWorkSchedulesResponseDataInner
     */
    'wednesdayWorkingDay'?: boolean;
    /**
     * Indicate if thursdays are working days for the employee.
     * @type {boolean}
     * @memberof EmployeesGetWorkSchedulesResponseDataInner
     */
    'thursdayWorkingDay'?: boolean;
    /**
     * Indicate if fridays are working days for the employee.
     * @type {boolean}
     * @memberof EmployeesGetWorkSchedulesResponseDataInner
     */
    'fridayWorkingDay'?: boolean;
    /**
     * Indicate if saturdays are working days for the employee.
     * @type {boolean}
     * @memberof EmployeesGetWorkSchedulesResponseDataInner
     */
    'saturdayWorkingDay'?: boolean;
    /**
     * Indicate if sundays are working days for the employee.
     * @type {boolean}
     * @memberof EmployeesGetWorkSchedulesResponseDataInner
     */
    'sundayWorkingDay'?: boolean;
    /**
     * The activation status of attendance tracking for the employee.
     * @type {boolean}
     * @memberof EmployeesGetWorkSchedulesResponseDataInner
     */
    'trackAttendance'?: boolean;
}

