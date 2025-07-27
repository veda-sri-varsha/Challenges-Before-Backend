//  7. Log Failed Login Attempts
//  Input: List of login attempts (username, status).
//  Goal: Log only failed attempts with username.

const loginAttempts = [
    { username: "Alice", status: "success" },
    { username: "Bob", status: "failed" },
    { username: "Admin", status: "failed" },
    { username: "manager", status: "success" },]

for (let i = 0; i < loginAttempts.length; i++) {
    const attempt = loginAttempts[i];

    if (attempt.status === "failed") {
        console.log("Failed Login Attempt by:", attempt.username);
    }
}

// Output:
// Failed Login Attempt by: Bob
// Failed Login Attempt by: Admin

