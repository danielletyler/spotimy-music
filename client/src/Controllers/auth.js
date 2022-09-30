/**
 * Handles logic for retrieving the Spotify access token from localStorage
 * or URL query params
 * returns A Spotify access token
 */
export const getAccessToken = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const url_access_token = urlParams.get("access_token");
  const url_refresh_token = urlParams.get("refresh_token");
  const url_expires_in = urlParams.get("expires_in");
  const hasError = urlParams.get("error");

  // If there's an error OR the token in localStorage has expired, refresh the token
  if (
    hasError ||
    hasTokenExpired() ||
    window.localStorage.getItem("access_token") === "undefined"
  ) {
    logout();
  }

  // If there is a valid access token in localStorage, use that
  if (
    window.localStorage.getItem("access_token") &&
    window.localStorage.getItem("access_token") !== "undefined"
  ) {
    return window.localStorage.getItem("access_token");
  }

  // If there is a token in the URL query params, user is logging in for the first time
  if (url_access_token) {
    // Store the query params in localStorage
    window.localStorage.setItem("access_token", url_access_token);
    window.localStorage.setItem("refresh_token", url_refresh_token);
    window.localStorage.setItem("expires_in", url_expires_in);

    // Set timestamp
    window.localStorage.setItem("timestamp", Date.now());
    // Return access token from query params
    return url_access_token;
  }

  // We should never get here!
  return false;
};

/**
 * Checks if the amount of time that has elapsed between the timestamp in localStorage
 * and now is greater than the expiration time of 3600 seconds (1 hour).
 * returns whether or not the access token in localStorage has expired
 */
const hasTokenExpired = () => {
  const token = window.localStorage.getItem("access_token");
  const timestamp = window.localStorage.getItem("timestamp");
  const expiresin = window.localStorage.getItem("expires_in");
  if (!token || !timestamp) {
    return false;
  }
  const millisecondsElapsed = Date.now() - Number(timestamp);
  return millisecondsElapsed / 1000 > Number(expiresin);
};

/**
 * Use the refresh token in localStorage to hit the /refresh_token endpoint
 * in our Node app, then update values in localStorage with data from response.
 */
// const refreshToken = async () => {
//   try {
//     // Logout if there's no refresh token stored or we've managed to get into a reload infinite loop
//     if (
//       !window.localStorage.getItem("refresh_token") ||
//       window.localStorage.getItem("refresh_token") === "undefined" ||
//       Date.now() - Number(window.localStorage.getItem("timestamp")) / 1000 <
//         1000
//     ) {
//       console.error("No refresh token available");
//       logout();
//     }

//     // Use `/refresh_token` endpoint from our Node app
//     const ref_token = window.localStorage.getItem("refresh_token");
//     const data = await fetch(
//       `http://localhost:4000/refresh_token?refresh_token=${ref_token}`
//     );

//     // Update localStorage values
//     window.localStorage.setItem("access_token", data.access_token);
//     window.localStorage.setItem("timestamp", Date.now());

//     // Reload the page for localStorage updates to be reflected/
//     // window.location.reload();
//   } catch (e) {
//     console.error(e);
//   }
// };

/**
 * Clear out all localStorage items we've set and reload the page
 */
export const logout = () => {
  // Clear all localStorage items

  window.localStorage.removeItem("access_token");
  window.localStorage.removeItem("refresh_token");
  window.localStorage.removeItem("timestamp");
  window.localStorage.removeItem("expires_in");

  // Navigate to homepage
  window.location = window.location.origin;
};
