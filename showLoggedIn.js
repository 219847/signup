async function showLoggedInUser() {
  const { data, error } = await client.auth.getUser();

  if (error || !data.user) {
    document.getElementById("userInfo").textContent = "Not logged in.";
    return;
  }

  const user = data.user;

  document.getElementById("userInfo").textContent =
    "Logged in as: " + user.email+"\nClear cookies to log out.";
}
showLoggedInUser();
