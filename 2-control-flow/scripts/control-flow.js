/**
 * Example 1 If Statement
 */
let userRole = "admin";
let userAccess;

if (userRole === "admin") {
  userAccess = "Full access granted";
} else if (userRole === "manager") {
  userAccess = "Limited access granted";
} else {
  userAccess = "No access granted";
}

console.log("[+] Access Level: " + userAccess);

/**
 * Example 2 - Nested If Statement
 */
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
  if (userRole === "admin") {
    userMessage = "Welcome Admin!";
  } else {
    userMessage = "Welcome User!";
  }
} else {
  userMessage = "Please log in to the system";
}

console.log("[+] User Message: ", userMessage);

/**
 * Examples 3 - Switch Statement
 */
let userType = "admin";
let userCategory;

switch (userType) {
  case "admin":
    userCategory = "Administrator";
    break;
  case "manager":
    userCategory = "Management";
    break;
  case "subscriber":
    userCategory = "Subscriber";
    break;
  default:
    userCategory = "Unknown";
}

console.log("[+] User Category: ", userCategory);

/**
 * Example 4 - Ternary Operator
 */
let isAuthenticated = true;
let authenticationStatus = isAuthenticated
  ? "Authenticated"
  : "Not Authenticated";

console.log("[+] Authentication Status: ", authenticationStatus);
