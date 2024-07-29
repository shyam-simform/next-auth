/**
 * An array that are accessible to the public
 * These routes does not required authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of the route which are used for the authentication
 * These routes will redirect logged in user to /settingss
 * @type {string[]}
 */

export const authRoutes = ["/login", "/register"];

/**
 * The prefix for API authentication route
 * Routes that start with this prefixare userd for APIauthentication purposes
 * @type {string}
 */
export const APIAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
