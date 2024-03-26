<div align="left">

[![Visit Kenjo](./header.png)](https://kenjo.io)

# [Kenjo](https://kenjo.io)<a id="kenjo"></a>

Before starting to use the Kenjo API, you have to request the API activation for a sandbox or production environment to the Kenjo Customer Success team. After that, an admin user has to go to *Settings > Integrations > API keys*, to generate the **API Key**. Follow the steps described in the **Autentication section** of this document. <br>The API key is needed to request the bearer token. Each endpoint callout requires a valid bearer token in the Authorization header. Once the token is retrieved, it will be useful during the time limit indicated by the 'expiration date'.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`kenjo.areas.createNewArea`](#kenjoareascreatenewarea)
  * [`kenjo.areas.getById`](#kenjoareasgetbyid)
  * [`kenjo.areas.getList`](#kenjoareasgetlist)
  * [`kenjo.areas.removeById`](#kenjoareasremovebyid)
  * [`kenjo.areas.updateAreaById`](#kenjoareasupdateareabyid)
  * [`kenjo.attendance.createEntry`](#kenjoattendancecreateentry)
  * [`kenjo.attendance.createTrackTime`](#kenjoattendancecreatetracktime)
  * [`kenjo.attendance.getById`](#kenjoattendancegetbyid)
  * [`kenjo.attendance.getCategories`](#kenjoattendancegetcategories)
  * [`kenjo.attendance.getExpectedTimeByUser`](#kenjoattendancegetexpectedtimebyuser)
  * [`kenjo.attendance.getList`](#kenjoattendancegetlist)
  * [`kenjo.attendance.removeById`](#kenjoattendanceremovebyid)
  * [`kenjo.attendance.updateEntry`](#kenjoattendanceupdateentry)
  * [`kenjo.authentication.createBearerToken`](#kenjoauthenticationcreatebearertoken)
  * [`kenjo.authentication.invalidateToken`](#kenjoauthenticationinvalidatetoken)
  * [`kenjo.calendars.getById`](#kenjocalendarsgetbyid)
  * [`kenjo.calendars.getList`](#kenjocalendarsgetlist)
  * [`kenjo.companies.getList`](#kenjocompaniesgetlist)
  * [`kenjo.compensation.getContracts`](#kenjocompensationgetcontracts)
  * [`kenjo.compensation.getSalariesList`](#kenjocompensationgetsalarieslist)
  * [`kenjo.compensation.listAdditionalPaymentTypes`](#kenjocompensationlistadditionalpaymenttypes)
  * [`kenjo.compensation.listAdditionalPayments`](#kenjocompensationlistadditionalpayments)
  * [`kenjo.compensation.listContractTypes`](#kenjocompensationlistcontracttypes)
  * [`kenjo.customFields.getList`](#kenjocustomfieldsgetlist)
  * [`kenjo.departments.createNewDepartment`](#kenjodepartmentscreatenewdepartment)
  * [`kenjo.departments.getById`](#kenjodepartmentsgetbyid)
  * [`kenjo.departments.listDepartments`](#kenjodepartmentslistdepartments)
  * [`kenjo.departments.removeById`](#kenjodepartmentsremovebyid)
  * [`kenjo.departments.updateAttributes`](#kenjodepartmentsupdateattributes)
  * [`kenjo.employees.activateEmployee`](#kenjoemployeesactivateemployee)
  * [`kenjo.employees.createInactiveEmployee`](#kenjoemployeescreateinactiveemployee)
  * [`kenjo.employees.deactivateEmployeeById`](#kenjoemployeesdeactivateemployeebyid)
  * [`kenjo.employees.getAccounts`](#kenjoemployeesgetaccounts)
  * [`kenjo.employees.getEmployeeInformation`](#kenjoemployeesgetemployeeinformation)
  * [`kenjo.employees.getList`](#kenjoemployeesgetlist)
  * [`kenjo.employees.getWorkSchedules`](#kenjoemployeesgetworkschedules)
  * [`kenjo.employees.listAddresses`](#kenjoemployeeslistaddresses)
  * [`kenjo.employees.listFinancials`](#kenjoemployeeslistfinancials)
  * [`kenjo.employees.listHomes`](#kenjoemployeeslisthomes)
  * [`kenjo.employees.listPersonals`](#kenjoemployeeslistpersonals)
  * [`kenjo.employees.listWorks`](#kenjoemployeeslistworks)
  * [`kenjo.employees.updateAddress`](#kenjoemployeesupdateaddress)
  * [`kenjo.employees.updateEmployeeAccounts`](#kenjoemployeesupdateemployeeaccounts)
  * [`kenjo.employees.updateFinancials`](#kenjoemployeesupdatefinancials)
  * [`kenjo.employees.updateHome`](#kenjoemployeesupdatehome)
  * [`kenjo.employees.updatePersonals`](#kenjoemployeesupdatepersonals)
  * [`kenjo.employees.updateWorkSchedule`](#kenjoemployeesupdateworkschedule)
  * [`kenjo.employees.updateWorks`](#kenjoemployeesupdateworks)
  * [`kenjo.offices.createNewOffice`](#kenjoofficescreatenewoffice)
  * [`kenjo.offices.getById`](#kenjoofficesgetbyid)
  * [`kenjo.offices.getList`](#kenjoofficesgetlist)
  * [`kenjo.offices.removeById`](#kenjoofficesremovebyid)
  * [`kenjo.offices.updateOfficeAttributes`](#kenjoofficesupdateofficeattributes)
  * [`kenjo.teams.createTeam`](#kenjoteamscreateteam)
  * [`kenjo.teams.getById`](#kenjoteamsgetbyid)
  * [`kenjo.teams.getList`](#kenjoteamsgetlist)
  * [`kenjo.teams.removeTeam`](#kenjoteamsremoveteam)
  * [`kenjo.teams.updateTeamAttributes`](#kenjoteamsupdateteamattributes)
  * [`kenjo.timeOff.getRequestsByDate`](#kenjotimeoffgetrequestsbydate)
  * [`kenjo.userAccounts.listEmployees`](#kenjouseraccountslistemployees)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Kenjo&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Kenjo } from "kenjo-typescript-sdk";

const kenjo = new Kenjo({
  // Defining the base path is optional and defaults to https://sandbox-api.kenjo.io/api/v1
  // basePath: "https://sandbox-api.kenjo.io/api/v1",
});

const createNewAreaResponse = await kenjo.areas.createNewArea({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Recruiting feature",
});

console.log(createNewAreaResponse);
```

## Reference<a id="reference"></a>


### `kenjo.areas.createNewArea`<a id="kenjoareascreatenewarea"></a>

Creates a new area.<br>The *name* is the only required field.<br>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAreaResponse = await kenjo.areas.createNewArea({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Recruiting feature",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The new name of the area to update.

#### 🔄 Return<a id="🔄-return"></a>

[AreasCreateNewAreaResponse](./models/areas-create-new-area-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/areas` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.areas.getById`<a id="kenjoareasgetbyid"></a>

Returns the area referenced by *id*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await kenjo.areas.getById({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the area entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[AreasGetByIdResponse](./models/areas-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/areas/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.areas.getList`<a id="kenjoareasgetlist"></a>

Returns a list of the existing areas in Kenjo.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await kenjo.areas.getList({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[AreasGetListResponseInner](./models/areas-get-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/areas` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.areas.removeById`<a id="kenjoareasremovebyid"></a>

Removes the area referenced by *id*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await kenjo.areas.removeById({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the area entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/areas/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.areas.updateAreaById`<a id="kenjoareasupdateareabyid"></a>

Updates a area referenced by *id*. Only the attributes submitted are modified.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAreaByIdResponse = await kenjo.areas.updateAreaById({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Sales",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the area entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The new name of the area to update.

#### 🔄 Return<a id="🔄-return"></a>

[AreasUpdateAreaByIdResponse](./models/areas-update-area-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/areas/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.attendance.createEntry`<a id="kenjoattendancecreateentry"></a>

This endpoint creates an attendance entry for a one employee, so an user *identifier* is required to build this relationship. The following *identifiers* are the valid ones: **userId**, **email** or **externalId**. Also one **startTime** and one **date** are required.<br>The new entry will have an unique identifier **_id**. This value is returned in the body response.<br><br> A day accepts many attendance entries per employee but they cannot be overlapped. It means that if, for example, *there is an entry the 2021-06-10 between 09:00 and 10:00 for the user E-111, then the creation of an new entry for E-111 in the 2021-06-10 whose startDate or endDate is between 09:00 and 10:00 will become a BAD REQUEST*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEntryResponse = await kenjo.attendance.createEntry({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  userId: "50a2db290da29e126a18789a",
  email: "john@acme.io",
  externalId: "00001",
  date: "2021-07-01",
  startTime: "36000",
  endTime: "46800",
  comment: "Morning working attendance tracking.",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### date: `string`<a id="date-string"></a>

The date of the entry. The valid format is *YYYY-MM-DD*. Required field.

##### startTime: `string`<a id="starttime-string"></a>

The start time of the entry. The valid format is *hh:mm:ss*. Required field.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### userId: `string`<a id="userid-string"></a>

The Kenjo employee *_id*.

##### email: `string`<a id="email-string"></a>

The Kenjo *email* for an employee.

##### externalId: `string`<a id="externalid-string"></a>

The *external id* for an employee for integrations.

##### endTime: `string`<a id="endtime-string"></a>

The end time of the entry. It is not a required field but cannot be less or equal than the *startTime*. The valid format is *hh:mm:ss*

##### breaks: [`AttendanceCreateEntryRequestBreaksInner`](./models/attendance-create-entry-request-breaks-inner.ts)[]<a id="breaks-attendancecreateentryrequestbreaksinnermodelsattendance-create-entry-request-breaks-innerts"></a>

Array that contains the breaks in detail. Rules:<br> - A maximum of 10 breaks can be loaded via API.<br> - Breaks cannot be overlapped in the same day.<br> - \\\'start\\\' field is required.

##### comment: `string`<a id="comment-string"></a>

Optional text to describe an attendance record (pair of startTime and endTime). The maximum number of characters is 150.

#### 🔄 Return<a id="🔄-return"></a>

[AttendanceCreateEntryResponse](./models/attendance-create-entry-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendances` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.attendance.createTrackTime`<a id="kenjoattendancecreatetracktime"></a>

This endpoint tracks time only providing the following information: **employee identifier** and a **date time**. The following identifiers are the valid ones: **userId**, **email** or **externalId**, only one of them is required. This action abstracts and simplifies the entries tracking, ensuring internally the order and transforming each track action to a Kenjo user attendance format.<br><br>Example: Three calls for the employee E-111 to the */track-time* endpoint contains the following data:<br>T1: 2021-01-01T08:00:00<br>T2: 2021-01-01T09:00:00<br>T3: 2021-01-01T10:00:00<br>The three calls order is T1, T2, T3.<br><br>Then in Kenjo there will be 2 attendance pairs:<br>1: 08:00 / 09:00<br>2: 10:00 / --:--<br>The second pair is open, with no **endTime** info, until a new one comes. <br><br>If there is a new track: 2021-01-01T12:00:00, then the result will be:<br>1: 08:00 / 09:00<br>2: 10:00 / 12:00<br>If the track is 2021-01-01T07:00:00 instead, then the previous tracks are reordered to be consistent with concept of attendance pairs:<br>1: 07:00 / 08:00<br>2: 09:00 / 10:00

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTrackTimeResponse = await kenjo.attendance.createTrackTime({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  userId: "50a2db290da29e126a18789a",
  email: "john@acme.io",
  externalId: "00001",
  dateTime: "2021-07-01T09:00:00",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dateTime: `string`<a id="datetime-string"></a>

The date and the time of the Kenjo employee in format YYYY-MM-DDThh:mm:ss.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### userId: `string`<a id="userid-string"></a>

The Kenjo employee *_id*.

##### email: `string`<a id="email-string"></a>

The Kenjo *email* for an employee.

##### externalId: `string`<a id="externalid-string"></a>

The *external id* for an employee for integrations.

#### 🔄 Return<a id="🔄-return"></a>

[AttendanceCreateTrackTimeResponse](./models/attendance-create-track-time-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendances/track-time` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.attendance.getById`<a id="kenjoattendancegetbyid"></a>

This endpoint returns one attendance entry specified by  **attendanceId**.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await kenjo.attendance.getById({
  attendanceId: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### attendanceId: `string`<a id="attendanceid-string"></a>

The _id of the attendance entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[AttendanceGetByIdResponse](./models/attendance-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendances/{attendanceId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.attendance.getCategories`<a id="kenjoattendancegetcategories"></a>

This endpoint returns an array of objects. Every object contains an attendance category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCategoriesResponse = await kenjo.attendance.getCategories({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[AttendanceGetCategoriesResponse](./models/attendance-get-categories-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendances/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.attendance.getExpectedTimeByUser`<a id="kenjoattendancegetexpectedtimebyuser"></a>

This endpoint returns a paginated list of expected time by user for a given date range.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExpectedTimeByUserResponse =
  await kenjo.attendance.getExpectedTimeByUser({
    from: "2020-01-01",
    to: "2020-01-10",
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
    companyId: "80a2db290da29e126a18789a",
    officeId: "80a2db290da29e126a18789d",
    departmentId: "80a2db290da29e126a18789c",
    userId: "80a2db290da29e126a18789c",
    offset: 1,
    limit: 25,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### from: `string`<a id="from-string"></a>

A date in format YYYY-MM-DD to indicate the starting point.

##### to: `string`<a id="to-string"></a>

A date in format YYYY-MM-DD to indicate the ending point.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### companyId: `string`<a id="companyid-string"></a>

Optional filter. The company id of the Kenjo employee.

##### officeId: `string`<a id="officeid-string"></a>

Optional filter. The office id of the Kenjo employee.

##### departmentId: `string`<a id="departmentid-string"></a>

Optional filter. The department id of the Kenjo employee.

##### userId: `string`<a id="userid-string"></a>

Optional filter. The id of the Kenjo employee. It accepts 2 formats:<br><br> 1. An unique string with the Kenjo employee id. <br>Example: *userId=80a2db290da29e126a18789c* <br><br> 2. A string with more than one Kenjo employee ids separated by commas (until 15 ids as maximum). <br>Example: *userId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*

##### offset: `number`<a id="offset-number"></a>

Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.

##### limit: `number`<a id="limit-number"></a>

Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.

#### 🔄 Return<a id="🔄-return"></a>

[AttendanceGetExpectedTimeByUserResponse](./models/attendance-get-expected-time-by-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendances/expected-time` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.attendance.getList`<a id="kenjoattendancegetlist"></a>

This endpoint returns an array of objects with all the existing attendance entries within Kenjo for a maximum of 31 days, defined by the required params **from** and **to**. Every object contains an attendance entry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await kenjo.attendance.getList({
  from: "2021-02-01",
  to: "2021-02-04",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### from: `string`<a id="from-string"></a>

A date in format YYYY-MM-DD to indicate the starting point.

##### to: `string`<a id="to-string"></a>

A date in format YYYY-MM-DD to indicate the ending point.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[AttendanceGetListResponseInner](./models/attendance-get-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.attendance.removeById`<a id="kenjoattendanceremovebyid"></a>

This endpoint delete the attendance entry specified by **attendanceId**.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await kenjo.attendance.removeById({
  attendanceId: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### attendanceId: `string`<a id="attendanceid-string"></a>

The Kenjo _id of the attendance entry to remove.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendances/{attendanceId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.attendance.updateEntry`<a id="kenjoattendanceupdateentry"></a>

This endpoint updates the attendance entry specified by **attendanceId**. Only the fields submitted in the body will be updated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEntryResponse = await kenjo.attendance.updateEntry({
  attendanceId: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  startTime: "36000",
  endTime: "36000",
  comment: "Morning working attendance tracking.",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### attendanceId: `string`<a id="attendanceid-string"></a>

The _id of the attendance entry to update.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### startTime: `string`<a id="starttime-string"></a>

The new start time of the attendance entry to update. The valid format is *hh:mm:ss*

##### endTime: `string`<a id="endtime-string"></a>

The new end time of the attendance entry to update. The valid format is *hh:mm:ss*

##### breaks: [`AttendanceUpdateEntryRequestBreaksInner`](./models/attendance-update-entry-request-breaks-inner.ts)[]<a id="breaks-attendanceupdateentryrequestbreaksinnermodelsattendance-update-entry-request-breaks-innerts"></a>

Array that contains the breaks in detail. Rules:<br> - A maximum of 10 breaks can be loaded via API.<br> - Breaks cannot be overlapped in the same day.<br> - \\\'start\\\' field is required.<br> - There is no way to update specifically a break.<br> - To remove \\\'breaks\\\', just send an empty array in the update, something like \\\"breaks\\\":[]

##### comment: `string`<a id="comment-string"></a>

Optional text to describe an attendance record (pair of startTime and endTime). The maximum number of characters is 150.

#### 🔄 Return<a id="🔄-return"></a>

[AttendanceUpdateEntryResponse](./models/attendance-update-entry-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendances/{attendanceId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.authentication.createBearerToken`<a id="kenjoauthenticationcreatebearertoken"></a>

Create a bearer token to allow connecting the API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBearerTokenResponse = await kenjo.authentication.createBearerToken(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

The API key generated in Settings.

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationCreateBearerTokenResponse](./models/authentication-create-bearer-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/login` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.authentication.invalidateToken`<a id="kenjoauthenticationinvalidatetoken"></a>

Invalidates a Bearer token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const invalidateTokenResponse = await kenjo.authentication.invalidateToken();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/logout` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.calendars.getById`<a id="kenjocalendarsgetbyid"></a>

Returns the calendar referenced by *id*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await kenjo.calendars.getById({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the calendar entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[CalendarsGetByIdResponse](./models/calendars-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/calendars/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.calendars.getList`<a id="kenjocalendarsgetlist"></a>

Returns a list of the existing calendars in Kenjo.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await kenjo.calendars.getList({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Madrid Calendar",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The calendar name.

#### 🔄 Return<a id="🔄-return"></a>

[CalendarsGetListResponseInner](./models/calendars-get-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/calendars` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.companies.getList`<a id="kenjocompaniesgetlist"></a>

Returns a list of the existing companies in Kenjo.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await kenjo.companies.getList({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "ACME Ltd",
  city: "Madrid",
  country: "ES",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The name of the company.

##### city: `string`<a id="city-string"></a>

The city of the company.

##### country: `string`<a id="country-string"></a>

The country code of the company in ISO 3166-1 alpha-2.

#### 🔄 Return<a id="🔄-return"></a>

[CompaniesGetListResponseInner](./models/companies-get-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.compensation.getContracts`<a id="kenjocompensationgetcontracts"></a>

This endpoint returns a paginated list of employment contracts. The URL params help to return more accurate results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContractsResponse = await kenjo.compensation.getContracts({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  contractTypeId: "60a2db290da29e126a18789e",
  UserId: "60a2db290da29e126a18789b",
  CompanyId: "90a2db290da29e126a187891",
  offset: 1,
  limit: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### contractTypeId: `string`<a id="contracttypeid-string"></a>

Optional filter. This field allows you to retrieve contracts based on their *contractTypeId*. It can accept two formats:<br><br> 1. A single *contractTypeId* as a unique string. <br>Example: *contractTypeId=80a2db290da29e126a18789c* <br><br> 2. Multiple *contractTypeId* values separated by commas (up to a maximum of 15 values). <br>Example: *contractTypeId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.

##### UserId: `string`<a id="userid-string"></a>

Optional filter. This field allows you to retrieve contracts based on their *_userId*. It can accept two formats:<br><br> 1. A single *_userId* as a unique string. <br>Example: *_userId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_userId* values separated by commas (up to a maximum of 15 values). <br>Example: *_userId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.

##### CompanyId: `string`<a id="companyid-string"></a>

Optional filter. This field allows you to retrieve contracts based on their *_companyId*. It can accept two formats:<br><br> 1. A single *_companyId* as a unique string. <br>Example: *_companyId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_companyId* values separated by commas (up to a maximum of 15 values). <br>Example: *_companyId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.

##### offset: `number`<a id="offset-number"></a>

Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.

##### limit: `number`<a id="limit-number"></a>

Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.

#### 🔄 Return<a id="🔄-return"></a>

[CompensationGetContractsResponse](./models/compensation-get-contracts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation/contracts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.compensation.getSalariesList`<a id="kenjocompensationgetsalarieslist"></a>

This endpoint returns a paginated list of employment salaries. The URL params help to return more accurate results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSalariesListResponse = await kenjo.compensation.getSalariesList({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  UserId: "60a2db290da29e126a18789b",
  CompanyId: "90a2db290da29e126a187891",
  paymentPeriod: "Annual",
  currency: "EUR",
  offset: 1,
  limit: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### UserId: `string`<a id="userid-string"></a>

Optional filter. This field allows you to retrieve contracts based on their *_userId*. It can accept two formats:<br><br> 1. A single *_userId* as a unique string. <br>Example: *_userId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_userId* values separated by commas (up to a maximum of 15 values). <br>Example: *_userId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.

##### CompanyId: `string`<a id="companyid-string"></a>

Optional filter. This field allows you to retrieve contracts based on their *_companyId*. It can accept two formats:<br><br> 1. A single *_companyId* as a unique string. <br>Example: *_companyId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_companyId* values separated by commas (up to a maximum of 15 values). <br>Example: *_companyId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.

##### paymentPeriod: `'Annual' | 'Monthly' | 'Hourly'`<a id="paymentperiod-annual--monthly--hourly"></a>

Optional filter. This field allows you to retrieve contracts based on their *paymentPeriod*. Accepted values: \'Annual\', \'Monthly\' and \'Hourly\'. It can accept two formats:<br><br> 1. A single *paymentPeriod* as a unique string. <br>Example: *paymentPeriod=Annual* <br><br> 2. Multiple *paymentPeriod* values separated by commas (up to a maximum of 15 values). <br>Example: *paymentPeriod=Annual,Monthly*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.

##### currency: `string`<a id="currency-string"></a>

Optional filter. This field allows you to retrieve contracts based on their *currency* (ISO 4217). It can accept two formats:<br><br> 1. A single *currency* as a unique string. <br>Example: *currency=EUR* <br><br> 2. Multiple *currency* values separated by commas (up to a maximum of 15 values). <br>Example: *currency=EUR,USD*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.

##### offset: `number`<a id="offset-number"></a>

Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.

##### limit: `number`<a id="limit-number"></a>

Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.

#### 🔄 Return<a id="🔄-return"></a>

[CompensationGetSalariesListResponse](./models/compensation-get-salaries-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation/salaries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.compensation.listAdditionalPaymentTypes`<a id="kenjocompensationlistadditionalpaymenttypes"></a>

This endpoint returns a paginated list of additional payment types. The URL params help to return more accurate results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAdditionalPaymentTypesResponse =
  await kenjo.compensation.listAdditionalPaymentTypes({
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
    offset: 1,
    limit: 25,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### offset: `number`<a id="offset-number"></a>

Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.

##### limit: `number`<a id="limit-number"></a>

Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.

#### 🔄 Return<a id="🔄-return"></a>

[CompensationListAdditionalPaymentTypesResponse](./models/compensation-list-additional-payment-types-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation/additional-payment-types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.compensation.listAdditionalPayments`<a id="kenjocompensationlistadditionalpayments"></a>

This endpoint returns a paginated list of additional payments. The URL params help to return more accurate results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAdditionalPaymentsResponse =
  await kenjo.compensation.listAdditionalPayments({
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
    UserId: "60a2db290da29e126a18789b",
    CompanyId: "90a2db290da29e126a187891",
    currency: "EUR",
    offset: 1,
    limit: 25,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### UserId: `string`<a id="userid-string"></a>

Optional filter. This field allows you to retrieve contracts based on their *_userId*. It can accept two formats:<br><br> 1. A single *_userId* as a unique string. <br>Example: *_userId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_userId* values separated by commas (up to a maximum of 15 values). <br>Example: *_userId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.

##### CompanyId: `string`<a id="companyid-string"></a>

Optional filter. This field allows you to retrieve contracts based on their *_companyId*. It can accept two formats:<br><br> 1. A single *_companyId* as a unique string. <br>Example: *_companyId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_companyId* values separated by commas (up to a maximum of 15 values). <br>Example: *_companyId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.

##### currency: `string`<a id="currency-string"></a>

Optional filter. This field allows you to retrieve contracts based on their *currency* (ISO 4217). It can accept two formats:<br><br> 1. A single *currency* as a unique string. <br>Example: *currency=EUR* <br><br> 2. Multiple *currency* values separated by commas (up to a maximum of 15 values). <br>Example: *currency=EUR,USD*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.

##### offset: `number`<a id="offset-number"></a>

Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.

##### limit: `number`<a id="limit-number"></a>

Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.

#### 🔄 Return<a id="🔄-return"></a>

[CompensationListAdditionalPaymentsResponse](./models/compensation-list-additional-payments-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation/additional-payments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.compensation.listContractTypes`<a id="kenjocompensationlistcontracttypes"></a>

This endpoint returns a paginated list of contract types. The URL params help to return more accurate results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listContractTypesResponse = await kenjo.compensation.listContractTypes({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  isActive: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### isActive: `boolean`<a id="isactive-boolean"></a>

This field allows to return only the active contract types.

#### 🔄 Return<a id="🔄-return"></a>

[CompensationListContractTypesResponse](./models/compensation-list-contract-types-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation/contract-types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.customFields.getList`<a id="kenjocustomfieldsgetlist"></a>

Returns a list of the existing custom fields in Kenjo.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await kenjo.customFields.getList({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  section: "personal",
  label: "Blood type",
  apiName: "c_Bloodtype",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### section: `'personal' | 'work' | 'address' | 'financial' | 'home'`<a id="section-personal--work--address--financial--home"></a>

The name of custom field section.

##### label: `string`<a id="label-string"></a>

The name of the custom field label.

##### apiName: `string`<a id="apiname-string"></a>

The api name is a required identifier to perform POST and PUT operations with employees.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsGetListResponse](./models/custom-fields-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom-fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.departments.createNewDepartment`<a id="kenjodepartmentscreatenewdepartment"></a>

Creates a new department.<br>The *name* is the only required field.<br>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDepartmentResponse = await kenjo.departments.createNewDepartment(
  {
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
    name: "Sales",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The new name of the department to update. Required field.

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsCreateNewDepartmentResponse](./models/departments-create-new-department-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/departments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.departments.getById`<a id="kenjodepartmentsgetbyid"></a>

Returns the department referenced by *id*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await kenjo.departments.getById({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the department entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsGetByIdResponse](./models/departments-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/departments/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.departments.listDepartments`<a id="kenjodepartmentslistdepartments"></a>

Returns a list of the existing departments in Kenjo.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDepartmentsResponse = await kenjo.departments.listDepartments({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Happiness dept.",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The department name.

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsListDepartmentsResponseInner](./models/departments-list-departments-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/departments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.departments.removeById`<a id="kenjodepartmentsremovebyid"></a>

Removes the department referenced by *id*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await kenjo.departments.removeById({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the department entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/departments/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.departments.updateAttributes`<a id="kenjodepartmentsupdateattributes"></a>

Updates a deparment referenced by *id*. Only the attributes submitted are modified.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAttributesResponse = await kenjo.departments.updateAttributes({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Sales",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the deparment entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The new name of the department to update.

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsUpdateAttributesResponse](./models/departments-update-attributes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/departments/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.activateEmployee`<a id="kenjoemployeesactivateemployee"></a>

This endpoint activates a Kenjo employee given by the employeeId. It sends an email to the recipient of the employee email to start the onboarding process. Once the password is filled, the employee changes to 'active' ('isActive' = TRUE). While the employee is not active it is possible to send activation emails.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const activateEmployeeResponse = await kenjo.employees.activateEmployee({
  employeeId: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The _id of the employee to send the activation email.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/activate` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.createInactiveEmployee`<a id="kenjoemployeescreateinactiveemployee"></a>

This endpoint creates a deactivated employee in Kenjo, the 'isActive' field set to false. To activate an employee use the put /activate method. This method will send an activation message to the employee email to complete the activation through the onboarding wizard.
<br><br>The field *email* is required and must be unique. Also *firstName*, *lastName* and *companyId* are required fields. If the work schedule is not provided then all the days of the week except Saturdays and Sundays are set to true. If the *language* is not specified, the assigned company language will be set by default.
<br><br>**Custom fields** information can be provided in this operation for the **personal**, **work**, **address**, **financial** and **home** sections. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.
API names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).
<br><br>
Example:
<br>
*The custom field 'Activity type' belongs to the section 'work'*:
  ```
...
{
  ...
    "work": {
      "c_Activitytype": "1",
      ...
    },
  ...
}
```
*'Activity type' is a field type 'List' (Strings list) with the possible values: "1", "2" and "3". It means that if a different value or type is provided then the request will return an error.*
<br><br>If the operation get success then an inactive employee is created and the response will include the provided information and the Kenjo id for the new employee.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createInactiveEmployeeResponse =
  await kenjo.employees.createInactiveEmployee({
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### account: [`EmployeesCreateInactiveEmployeeRequestAccount`](./models/employees-create-inactive-employee-request-account.ts)<a id="account-employeescreateinactiveemployeerequestaccountmodelsemployees-create-inactive-employee-request-accountts"></a>

##### personal: [`EmployeesCreateInactiveEmployeeRequestPersonal`](./models/employees-create-inactive-employee-request-personal.ts)<a id="personal-employeescreateinactiveemployeerequestpersonalmodelsemployees-create-inactive-employee-request-personalts"></a>

##### work: [`EmployeesCreateInactiveEmployeeRequestWork`](./models/employees-create-inactive-employee-request-work.ts)<a id="work-employeescreateinactiveemployeerequestworkmodelsemployees-create-inactive-employee-request-workts"></a>

##### workSchedule: [`EmployeesCreateInactiveEmployeeRequestWorkSchedule`](./models/employees-create-inactive-employee-request-work-schedule.ts)<a id="workschedule-employeescreateinactiveemployeerequestworkschedulemodelsemployees-create-inactive-employee-request-work-schedulets"></a>

##### address: [`EmployeesCreateInactiveEmployeeRequestAddress`](./models/employees-create-inactive-employee-request-address.ts)<a id="address-employeescreateinactiveemployeerequestaddressmodelsemployees-create-inactive-employee-request-addressts"></a>

##### financial: [`EmployeesCreateInactiveEmployeeRequestFinancial`](./models/employees-create-inactive-employee-request-financial.ts)<a id="financial-employeescreateinactiveemployeerequestfinancialmodelsemployees-create-inactive-employee-request-financialts"></a>

##### home: [`EmployeesCreateInactiveEmployeeRequestHome`](./models/employees-create-inactive-employee-request-home.ts)<a id="home-employeescreateinactiveemployeerequesthomemodelsemployees-create-inactive-employee-request-homets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesCreateInactiveEmployeeResponse](./models/employees-create-inactive-employee-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.deactivateEmployeeById`<a id="kenjoemployeesdeactivateemployeebyid"></a>

This endpoint deactivates a Kenjo employee given by the employeeId. It sets the isActive field to FALSE and invalidate the access Kenjo for the employee. While the employee is not active it is possible to send activation emails.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deactivateEmployeeByIdResponse =
  await kenjo.employees.deactivateEmployeeById({
    employeeId: "60a2db290da29e126a18789a",
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The _id of the employee to update.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/deactivate` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.getAccounts`<a id="kenjoemployeesgetaccounts"></a>

This endpoint returns a list with the **account** sections of the existing employees. The account section contains information such as *email*, *external Id*, *language* and *activation status*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccountsResponse = await kenjo.employees.getAccounts({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  email: "john.doe@acme.com",
  language: "es",
  externalId: "USER-123456",
  isActive: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### email: `string`<a id="email-string"></a>

The Kenjo email of the employee.

##### language: `'en' | 'de' | 'es'`<a id="language-en--de--es"></a>

The employee language.

##### externalId: `string`<a id="externalid-string"></a>

The external id of the employee.

##### isActive: `boolean`<a id="isactive-boolean"></a>

The employee activation status.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesGetAccountsResponse](./models/employees-get-accounts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.getEmployeeInformation`<a id="kenjoemployeesgetemployeeinformation"></a>

This endpoint returns information about the **account**, **personal**, **work**, **work schedule**, **address**, **financial** and **home** sections for a given employee id. The *employeeId* param represents a Kenjo employee id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeInformationResponse =
  await kenjo.employees.getEmployeeInformation({
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
    employeeId: "50a2db290da29e126a187843",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### employeeId: `string`<a id="employeeid-string"></a>

The _id of the employee to request.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesGetEmployeeInformationResponse](./models/employees-get-employee-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.getList`<a id="kenjoemployeesgetlist"></a>

This endpoint returns the list of employee accounts existing in Kenjo. It is similar to the */employees/accounts* endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await kenjo.employees.getList({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesGetListResponse](./models/employees-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.getWorkSchedules`<a id="kenjoemployeesgetworkschedules"></a>

This endpoint returns a list with the **work schedule** sections of the existing employees.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkSchedulesResponse = await kenjo.employees.getWorkSchedules({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  trackAttendance: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### trackAttendance: `boolean`<a id="trackattendance-boolean"></a>

The activation status of attendance tracking for the employee.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesGetWorkSchedulesResponse](./models/employees-get-work-schedules-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/work-schedules` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.listAddresses`<a id="kenjoemployeeslistaddresses"></a>

This endpoint returns a list with the **address** sections of the existing employees.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAddressesResponse = await kenjo.employees.listAddresses({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  street: " Calle Enrique San Francisco 13",
  postalCode: "28080",
  city: "Madrid",
  country: "ES",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### street: `string`<a id="street-string"></a>

The name of the street.

##### postalCode: `string`<a id="postalcode-string"></a>

The postal code.

##### city: `string`<a id="city-string"></a>

The city.

##### country: `string`<a id="country-string"></a>

The country code in ISO 3166-1 alpha-2.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesListAddressesResponse](./models/employees-list-addresses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/addresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.listFinancials`<a id="kenjoemployeeslistfinancials"></a>

This endpoint returns a list with the **financial** sections of the existing employees.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFinancialsResponse = await kenjo.employees.listFinancials({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  accountHolderName: "Michael Corleone",
  bankName: "Bank of Sicily",
  accountNumber: "0093 344 2132221 3304 00",
  iban: "DE32120222391919191911",
  swiftCode: "12321234",
  nationalId: "04123547X",
  passport: "FA1234098",
  nationalInsuranceNumber: "23123312321",
  taxCode: "323451R",
  taxIdentificationNumber: "T4312345",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### accountHolderName: `string`<a id="accountholdername-string"></a>

The accounts holder\'s name.

##### bankName: `string`<a id="bankname-string"></a>

The bank name.

##### accountNumber: `string`<a id="accountnumber-string"></a>

The account number.

##### iban: `string`<a id="iban-string"></a>

The IBAN.

##### swiftCode: `string`<a id="swiftcode-string"></a>

The SWIFT code.

##### nationalId: `string`<a id="nationalid-string"></a>

The national id document

##### passport: `string`<a id="passport-string"></a>

The passport number.

##### nationalInsuranceNumber: `string`<a id="nationalinsurancenumber-string"></a>

The national insurance number.

##### taxCode: `string`<a id="taxcode-string"></a>

The tax number.

##### taxIdentificationNumber: `string`<a id="taxidentificationnumber-string"></a>

The tax identification number.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesListFinancialsResponse](./models/employees-list-financials-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/financials` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.listHomes`<a id="kenjoemployeeslisthomes"></a>

This endpoint returns a list with the **home** sections of the existing employees.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listHomesResponse = await kenjo.employees.listHomes({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  maritalStatus: "Widowed",
  spouseFirstName: "Catherine",
  spouseLastName: "Tramell",
  spouseBirthdate: "2060-01-26T00:00:00.000Z",
  spouseGender: "Female",
  personalEmail: "john.doe@acme.com",
  personalPhone: "4567092323",
  personalMobile: "3567092310",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### maritalStatus: `'Divorced' | 'Domestic Partnership' | 'Married' | 'Separated' | 'Single' | 'Widowed'`<a id="maritalstatus-divorced--domestic-partnership--married--separated--single--widowed"></a>

The marital status. Only is valid one of the following values \"Divorced\", \"Domestic Partnership\", \"Married\", \"Separated\", \"Single\", \"Widowed\".

##### spouseFirstName: `string`<a id="spousefirstname-string"></a>

The first name of the employee\'s spouse.

##### spouseLastName: `string`<a id="spouselastname-string"></a>

The last name of the employee\'s spouse.

##### spouseBirthdate: `string`<a id="spousebirthdate-string"></a>

The birth date of the employee\'s spouse. Format YYYY-MM-DDThh:mm:ss.000Z.

##### spouseGender: `'Male' | 'Female' | 'Other'`<a id="spousegender-male--female--other"></a>

The employee\'s spouse gender. Only is valid one of the following values \'Male\' (male), \'Female\' (female) or \'Other\' (other).

##### personalEmail: `string`<a id="personalemail-string"></a>

The employee personal email.

##### personalPhone: `string`<a id="personalphone-string"></a>

The employee personal phone.

##### personalMobile: `string`<a id="personalmobile-string"></a>

The employee personal mobile.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesListHomesResponse](./models/employees-list-homes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/homes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.listPersonals`<a id="kenjoemployeeslistpersonals"></a>

This endpoint returns a list with the **personal** sections of the existing employees.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPersonalsResponse = await kenjo.employees.listPersonals({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  firstName: "John",
  lastName: "Doe",
  displayName: "John Doe",
  gender: "es",
  birthdate: "1980-01-28T00:00:00.000Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### firstName: `string`<a id="firstname-string"></a>

The name of the Kenjo employee. This field is required.

##### lastName: `string`<a id="lastname-string"></a>

The surname of the Kenjo employee. This field is required.

##### displayName: `string`<a id="displayname-string"></a>

The composition of firstName and lastName of the Kenjo employee.

##### gender: `'Male' | 'Female' | 'Other'`<a id="gender-male--female--other"></a>

The employee gender. Only is valid one of the following values \'Male\' (male), \'Female\' (female) or \'Other\' (other).

##### birthdate: `string`<a id="birthdate-string"></a>

The employee birth date. Format YYYY-MM-DDThh:00:00.000Z.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesListPersonalsResponse](./models/employees-list-personals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/personals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.listWorks`<a id="kenjoemployeeslistworks"></a>

This endpoint returns a list with the **work** sections of the existing employees.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWorksResponse = await kenjo.employees.listWorks({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  companyId: "80a2db290da29e126a18789a",
  officeId: "80a2db290da29e126a18789d",
  departmentId: "80a2db290da29e126a18789c",
  startDate: "2022-06-01T00:00:00.000Z",
  jobTitle: "Actor",
  workPhone: "34 666 70 90 32",
  workMobile: "34 680 70 90 32",
  isAssistant: true,
  probationPeriodEnd: "2022-06-01T00:00:00.000Z",
  reportsToId: "80a2db290da29e126a187891",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### companyId: `string`<a id="companyid-string"></a>

The company id of the Kenjo employee.

##### officeId: `string`<a id="officeid-string"></a>

The office id of the Kenjo employee.

##### departmentId: `string`<a id="departmentid-string"></a>

The department id of the Kenjo employee.

##### startDate: `string`<a id="startdate-string"></a>

The starting date of the Kenjo employee in format YYYY-MM-DDThh:mm:ss.

##### jobTitle: `string`<a id="jobtitle-string"></a>

The job title of the employee.

##### workPhone: `string`<a id="workphone-string"></a>

The work phone of the employee.

##### workMobile: `string`<a id="workmobile-string"></a>

The work mobile of the employee.

##### isAssistant: `boolean`<a id="isassistant-boolean"></a>

Allow to indicate if the employee has or not the assistant role.

##### probationPeriodEnd: `string`<a id="probationperiodend-string"></a>

The probation period of the employee. Format YYYY-MM-DDThh:mm:ss.000Z.

##### reportsToId: `string`<a id="reportstoid-string"></a>

The Kenjo employee id of the user to whom the employee reports. The employee id to assign can be an active or inactive user. Trying to assign the own employee id or the id of someone who is already reporting will arise an error.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesListWorksResponse](./models/employees-list-works-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/works` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.updateAddress`<a id="kenjoemployeesupdateaddress"></a>

This endpoint updates the employee **address** section for a given employee id. The operation only updates the fields provided in the body.
<br><br>**Custom fields** information can be provided in this operation. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.
API names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).
<br><br>
Example:
<br>
*The custom field 'province' belongs to the 'address' section*:
  ```
  {
    ...,
    "country": "ES",
    "c_province": "MD",
    ...
  }
```
*'province' is a field type 'String'. It means that if a different type of data (number or boolean) is provided then the request will return an error.*


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAddressResponse = await kenjo.employees.updateAddress({
  employeeId: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The _id of the employee to update.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### street: `string`<a id="street-string"></a>

The name of the street.

##### postalCode: `string`<a id="postalcode-string"></a>

The postal code.

##### city: `string`<a id="city-string"></a>

The city.

##### country: `string`<a id="country-string"></a>

The country code in ISO 3166-1 alpha-2.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesUpdateAddressResponse](./models/employees-update-address-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/addresses` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.updateEmployeeAccounts`<a id="kenjoemployeesupdateemployeeaccounts"></a>

This endpoint updates the employee **account** section for a given employee id. The operation only updates the fields provided in the body.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeAccountsResponse =
  await kenjo.employees.updateEmployeeAccounts({
    employeeId: "60a2db290da29e126a18789a",
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
    email: "john@acme.io",
    externalId: "E-000001",
    language: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The _id of the employee to update.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### email: `string`<a id="email-string"></a>

The employee email in Kenjo. This is an unique identifier and required.

##### externalId: `string`<a id="externalid-string"></a>

The employee external id for integration proposals. This value must be unique.

##### language: `string`<a id="language-string"></a>

The employee language. Only is valid one of the following values \\\'en\\\' (english), \\\'es\\\' (spanish) or \\\'de\\\' (german).

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesUpdateEmployeeAccountsResponse](./models/employees-update-employee-accounts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/accounts` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.updateFinancials`<a id="kenjoemployeesupdatefinancials"></a>

This endpoint updates the employee **financial** section for a given employee id. The operation only updates the fields provided in the body.
<br><br>**Custom fields** information can be provided in this operation. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.
API names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).
<br><br>
Example:
<br>
*The custom field 'special tax' belongs to the 'financial' section*:
  ```
  {
    ...,
    "iban": "ES2345123456789077",
    "c_specialtax": 1500,
    ...
  }
```
*'special tax' is a field type 'Number'. It means that if a different type of data (string or boolean) is provided then the request will return an error.*


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFinancialsResponse = await kenjo.employees.updateFinancials({
  employeeId: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  accountHolderName: "Michael Corleone",
  bankName: "Bank of Sicily",
  accountNumber: "0093 344 2132221 3304 00",
  iban: "DE32120222391919191911",
  swiftCode: "12321234",
  nationalId: "04123547X",
  passport: "FA1234098",
  nationalInsuranceNumber: "23123312321",
  taxCode: "323451R",
  taxIdentificationNumber: "T4312345",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The _id of the employee to update.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### accountHolderName: `string`<a id="accountholdername-string"></a>

The accounts holder\\\'s name.

##### bankName: `string`<a id="bankname-string"></a>

The bank name.

##### accountNumber: `string`<a id="accountnumber-string"></a>

The account number.

##### iban: `string`<a id="iban-string"></a>

The IBAN.

##### swiftCode: `string`<a id="swiftcode-string"></a>

The SWIFT code.

##### nationalId: `string`<a id="nationalid-string"></a>

The national id document.

##### passport: `string`<a id="passport-string"></a>

The passport number.

##### nationalInsuranceNumber: `string`<a id="nationalinsurancenumber-string"></a>

The national insurance number

##### taxCode: `string`<a id="taxcode-string"></a>

The tax number.

##### taxIdentificationNumber: `string`<a id="taxidentificationnumber-string"></a>

The tax identification number.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesUpdateFinancialsResponse](./models/employees-update-financials-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/financials` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.updateHome`<a id="kenjoemployeesupdatehome"></a>

This endpoint updates the employee **home** section for a given employee id. The operation only updates the fields provided in the body.
<br><br>**Custom fields** information can be provided in this operation. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.
API names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).
<br><br>
Example:
<br>
*The custom field 'pet name' belongs to the 'home' section*:
  ```
  {
    ...,
    "maritalStatus": "Divorced",
    "c_petname": "Boliche",
    ...
  }
```
*'pet name' is a field type 'String'. It means that if a different type of data (number or boolean) is provided then the request will return an error.*


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateHomeResponse = await kenjo.employees.updateHome({
  employeeId: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  maritalStatus: "Widowed",
  spouseFirstName: "Catherine",
  spouseLastName: "Tramell",
  spouseBirthdate: "2060-01-26T00:00:00.000Z",
  spouseGender: "Female",
  personalEmail: "john@acme.io",
  personalPhone: "4567092323",
  personalMobile: "3567092310",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The _id of the employee to update.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### maritalStatus: `string`<a id="maritalstatus-string"></a>

The marital status. Only is valid one of the following values \\\"Divorced\\\", \\\"Domestic Partnership\\\", \\\"Married\\\", \\\"Separated\\\", \\\"Single\\\", \\\"Widowed\\\".

##### spouseFirstName: `string`<a id="spousefirstname-string"></a>

The first name of the employee\\\'s spouse.

##### spouseLastName: `string`<a id="spouselastname-string"></a>

The last name of the employee\\\'s spouse.

##### spouseBirthdate: `string`<a id="spousebirthdate-string"></a>

The birth date of the employee\\\'s spouse. Format YYYY-MM-DDThh:mm:ss.000Z.

##### spouseGender: `string`<a id="spousegender-string"></a>

The employee\\\'s spouse gender. Only is valid one of the following values \\\'Male\\\' (male), \\\'Female\\\' (female) or \\\'Other\\\' (other).

##### personalEmail: `string`<a id="personalemail-string"></a>

The employee personal email.

##### personalPhone: `string`<a id="personalphone-string"></a>

The employee personal phone.

##### personalMobile: `string`<a id="personalmobile-string"></a>

The employee personal phone

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesUpdateHomeResponse](./models/employees-update-home-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/homes` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.updatePersonals`<a id="kenjoemployeesupdatepersonals"></a>

This endpoint updates the employee **personal** section for a given employee id. The operation only updates the fields provided in the body.
<br><br>**Custom fields** information can be provided in this operation. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.
API names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).
<br><br>
Example:
<br>
*The custom field 'category' belongs to the 'personal' section*:
  ```
  {
    ...,
    "lastName": "Nadie",
    "c_category": "Good",
    ...
  }
```
*'category' is a field type 'List' (Strings list) with the possible values: "Good" and "Bad". It means that if a different value or type is provided then the request will return an error.*


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePersonalsResponse = await kenjo.employees.updatePersonals({
  employeeId: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  firstName: "Juanito",
  lastName: "Nadie",
  displayName: "Juanito Nadie",
  gender: "Male",
  birthdate: "1980-01-28T00:00:00.000Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The _id of the employee to update.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### firstName: `string`<a id="firstname-string"></a>

The name of the Kenjo employee. This field is required.

##### lastName: `string`<a id="lastname-string"></a>

The surname of the Kenjo employee. This field is required.

##### displayName: `string`<a id="displayname-string"></a>

The composition of firstName and lastName of the Kenjo employee.

##### gender: `string`<a id="gender-string"></a>

The gender of the Kenjo employee. Only is valid one of the following values \\\'Male\\\' (male), \\\'Female\\\' (female) or \\\'Other\\\' (other).

##### birthdate: `string`<a id="birthdate-string"></a>

The employee birth date. Format YYYY-MM-DDThh:mm:ss.000Z.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesUpdatePersonalsResponse](./models/employees-update-personals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/personals` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.updateWorkSchedule`<a id="kenjoemployeesupdateworkschedule"></a>

This endpoint updates the employee **work schedule** section for a given employee id. The operation only updates the fields provided in the body.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWorkScheduleResponse = await kenjo.employees.updateWorkSchedule({
  employeeId: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  mondayWorkingDay: true,
  tuesdayWorkingDay: true,
  wednesdayWorkingDay: true,
  thursdayWorkingDay: true,
  fridayWorkingDay: false,
  saturdayWorkingDay: false,
  sundayWorkingDay: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The _id of the employee to update.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### mondayWorkingDay: `boolean`<a id="mondayworkingday-boolean"></a>

Allow to indicate if mondays are working days for the employee.

##### tuesdayWorkingDay: `boolean`<a id="tuesdayworkingday-boolean"></a>

Allow to indicate if tuesdays are working days for the employee.

##### wednesdayWorkingDay: `boolean`<a id="wednesdayworkingday-boolean"></a>

Allow to indicate if wednesdays are working days for the employee.

##### thursdayWorkingDay: `boolean`<a id="thursdayworkingday-boolean"></a>

Allow to indicate if thursdays are working days for the employee.

##### fridayWorkingDay: `boolean`<a id="fridayworkingday-boolean"></a>

Allow to indicate if fridays are working days for the employee.

##### saturdayWorkingDay: `boolean`<a id="saturdayworkingday-boolean"></a>

Allow to indicate if saturdays are working days for the employee.

##### sundayWorkingDay: `boolean`<a id="sundayworkingday-boolean"></a>

Allow to indicate if sundays are working days for the employee.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesUpdateWorkScheduleResponse](./models/employees-update-work-schedule-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/work-schedules` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.employees.updateWorks`<a id="kenjoemployeesupdateworks"></a>

This endpoint updates the employee **work** section for a given employee id. The operation only updates the fields provided in the body.
<br><br>**Custom fields** information can be provided in this operation. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.
API names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).
<br><br>
Example:
<br>
*The custom field 'activity type' belongs to the 'personal' section*:
  ```
  {
    ...,
    "companyId": "61d874aef37c05cfba4f1b38",
    "c_activityType": "1",
    ...
  }
```
*'activity Type' is a field type 'List' (Strings list) with the possible values: "1" and "2". It means that if a different value or type is provided then the request will return an error.*


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWorksResponse = await kenjo.employees.updateWorks({
  employeeId: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  companyId: "50a2db290da29e126a187894",
  officeId: "50a2db290da29e126a187895",
  departmentId: "50a2db290da29e126a187896",
  startDate: "2021-07-01T00:00:00.000Z",
  jobTitle: "Actor",
  workPhone: "+34 666 70 90 32",
  workMobile: "+34 680 70 90 32",
  isAssistant: false,
  probationPeriodEnd: "2022-06-01T00:00:00.000Z",
  reportsToId: "50a2db290da29e126a1878523",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The _id of the employee to update.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### companyId: `string`<a id="companyid-string"></a>

The company id of the Kenjo employee.

##### officeId: `string`<a id="officeid-string"></a>

The office id of the Kenjo employee.

##### departmentId: `string`<a id="departmentid-string"></a>

The department id of the Kenjo employee.

##### startDate: `string`<a id="startdate-string"></a>

The starting date of the Kenjo employee in format YYYY-MM-DDThh:mm:ss.

##### jobTitle: `string`<a id="jobtitle-string"></a>

The job title of the employee.

##### workPhone: `string`<a id="workphone-string"></a>

The work phone of the employee.

##### workMobile: `string`<a id="workmobile-string"></a>

The work mobile of the employee.

##### isAssistant: `boolean`<a id="isassistant-boolean"></a>

Allow to indicate if the employee has or not the assistant role.

##### probationPeriodEnd: `string`<a id="probationperiodend-string"></a>

The probation period of the employee. Format YYYY-MM-DDThh:mm:ss.000Z.

##### reportsToId: `string`<a id="reportstoid-string"></a>

The Kenjo employee id of the user to whom the employee reports. The employee id to assign can be an active or inactive user. Trying to assign the own employee id or the id of someone who is already reporting will arise an error.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesUpdateWorksResponse](./models/employees-update-works-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{employeeId}/works` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.offices.createNewOffice`<a id="kenjoofficescreatenewoffice"></a>

Creates a new office.<br><br>The required fields are *name*, *companyId*, *calendarId*.<br>Optional fields are *street*, *postalCode*, *city* and *country*. <br> The *country* field has to be a valid ISO country code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewOfficeResponse = await kenjo.offices.createNewOffice({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Spain office",
  companyId: "60dadb6362702d057f8fb486",
  calendarId: "60f808f727ad58fe791bae91",
  country: "ES",
  postalCode: "28030",
  city: "ES",
  street: "Paseo Castellana, 13",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The new name of the office to create. Required field.

##### companyId: `string`<a id="companyid-string"></a>

The company id of the office to create. Required field.

##### calendarId: `string`<a id="calendarid-string"></a>

The calendar id of the office to create. Required field.

##### country: `string`<a id="country-string"></a>

The country of the office to create in ISO code.

##### postalCode: `string`<a id="postalcode-string"></a>

The postal code of the office to create.

##### city: `string`<a id="city-string"></a>

The city of the office to create.

##### street: `string`<a id="street-string"></a>

The street of the office to create.

#### 🔄 Return<a id="🔄-return"></a>

[OfficesCreateNewOfficeResponse](./models/offices-create-new-office-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/offices` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.offices.getById`<a id="kenjoofficesgetbyid"></a>

Returns the office referenced by *id*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await kenjo.offices.getById({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the office entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[OfficesGetByIdResponse](./models/offices-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/offices/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.offices.getList`<a id="kenjoofficesgetlist"></a>

Returns a list of the existing offices in Kenjo.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await kenjo.offices.getList({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Berlin office",
  companyId: "40a2db290da29e126a187895",
  calendarId: "40a2db290da29e126a187895",
  street: "Urbanstrasse, 71",
  postalCode: "34213",
  city: "Berlin",
  country: "DE",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The name of the office.

##### companyId: `string`<a id="companyid-string"></a>

The Kenjo id of the company.

##### calendarId: `string`<a id="calendarid-string"></a>

The Kenjo id of the calendar.

##### street: `string`<a id="street-string"></a>

The street of the office.

##### postalCode: `string`<a id="postalcode-string"></a>

The postal code of the office.

##### city: `string`<a id="city-string"></a>

The city of the office.

##### country: `string`<a id="country-string"></a>

The country of the office in ISO code.

#### 🔄 Return<a id="🔄-return"></a>

[OfficesGetListResponseInner](./models/offices-get-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/offices` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.offices.removeById`<a id="kenjoofficesremovebyid"></a>

Removes the office referenced by *id*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await kenjo.offices.removeById({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the office entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/offices/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.offices.updateOfficeAttributes`<a id="kenjoofficesupdateofficeattributes"></a>

Updates an office referenced by *id*. Only the attributes submitted are modified.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOfficeAttributesResponse =
  await kenjo.offices.updateOfficeAttributes({
    id: "60a2db290da29e126a18789a",
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
    name: "Madrid office",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the office entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The new name of the office to update.

#### 🔄 Return<a id="🔄-return"></a>

[OfficesUpdateOfficeAttributesResponse](./models/offices-update-office-attributes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/offices/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.teams.createTeam`<a id="kenjoteamscreateteam"></a>

Creates a new team.<br>The *name* is the only required field.<br>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeamResponse = await kenjo.teams.createTeam({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Tech devOps",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The new name of the team to update. Required field.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsCreateTeamResponse](./models/teams-create-team-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.teams.getById`<a id="kenjoteamsgetbyid"></a>

Returns the team referenced by *id*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await kenjo.teams.getById({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the team entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsGetByIdResponse](./models/teams-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.teams.getList`<a id="kenjoteamsgetlist"></a>

Returns a list of the existing teams in Kenjo.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await kenjo.teams.getList({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Developers",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The team name.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsGetListResponseInner](./models/teams-get-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.teams.removeTeam`<a id="kenjoteamsremoveteam"></a>

Removes the team referenced by *id*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTeamResponse = await kenjo.teams.removeTeam({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the team entry to request.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.teams.updateTeamAttributes`<a id="kenjoteamsupdateteamattributes"></a>

Updates a team referenced by *id*. Only the attributes submitted are modified.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTeamAttributesResponse = await kenjo.teams.updateTeamAttributes({
  id: "60a2db290da29e126a18789a",
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  name: "Sales",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The _id of the team entry to request. Required field.

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### name: `string`<a id="name-string"></a>

The new name of the team to update.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsUpdateTeamAttributesResponse](./models/teams-update-team-attributes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.timeOff.getRequestsByDate`<a id="kenjotimeoffgetrequestsbydate"></a>

This endpoint returns a paginated list of time off requests for a given date range.The maximum number of time off requests to retrieve once is 92 days, so the URL params *from* and *to* are mandatory. The URL params help to return more accurate results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRequestsByDateResponse = await kenjo.timeOff.getRequestsByDate({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
  from: "2020-01-01",
  to: "2020-01-10",
  UserId: "60a2db290da29e126a18789b",
  TimeOffTypeId: "90a2db290da29e126a187891",
  status: "Approved",
  offset: 1,
  limit: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

##### from: `string`<a id="from-string"></a>

A date in format YYYY-MM-DD to indicate the starting point. It needs to be equals or less than the *to* param.

##### to: `string`<a id="to-string"></a>

A date in format YYYY-MM-DD to indicate the ending point. It needs to be equals or greater than the *from* param.

##### UserId: `string`<a id="userid-string"></a>

This field allows to return only the time off requests for a given *_userId*.

##### TimeOffTypeId: `string`<a id="timeofftypeid-string"></a>

This field allows to filter by time-off type Id.

##### status: `'Approved' | 'Declined' | 'Cancelled' | 'Pending' | 'Submitted' | 'Processed' | 'CancelledAfterProcessed' | 'InApproval'`<a id="status-approved--declined--cancelled--pending--submitted--processed--cancelledafterprocessed--inapproval"></a>

This field allows to filter by the time-off request status.

##### offset: `number`<a id="offset-number"></a>

Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.

##### limit: `number`<a id="limit-number"></a>

Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffGetRequestsByDateResponse](./models/time-off-get-requests-by-date-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/time-off/requests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `kenjo.userAccounts.listEmployees`<a id="kenjouseraccountslistemployees"></a>

This endpoint returns an array of objects with the existing employees in Kenjo. Every object contains the basic employee information from **account**, **personal** and **work** sections per each existing employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeesResponse = await kenjo.userAccounts.listEmployees({
  authorization:
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

A valid bearer token.

#### 🔄 Return<a id="🔄-return"></a>

[UserAccountsListEmployeesResponseInner](./models/user-accounts-list-employees-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user-accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
