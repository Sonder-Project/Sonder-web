// We have methods for retrieving data from server
// In case we access protected resources, the HTTP request needs Authorization header


// If there is a logged in user with accessToken (JWT),
// return the Authorization header with the accessToken, othersize return an empty object
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  }
  else {
    return {};
  }
}