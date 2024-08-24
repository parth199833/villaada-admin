/*
 Thwe Routes that not require Authentication
* @type {string[]}
*/

export const publicRoutes = ["/"];

/*
 Array of routes that is used for authentication
* @type {string[]}
*/

export const authRoutes = ["/auth/signup", "/auth/signin"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
