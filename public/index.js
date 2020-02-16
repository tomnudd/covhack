// tomnudd, 15-16 February 2020
window.onload = async function() {
  try {
    const response = await fetch("http://127.0.0.1:8090/isLoggedIn");
    if (!response.ok) {
      throw new Error("Error: " + response.code);
    } else {
      const body = await response.json();
      console.log(body)
      if (!body) {
        throw new Error("Error: Unable to contact server! :hmm:");
      } else {
        if (body.loggedIn == true) {
          document.getElementById("hiddenWhenLoggedIn").style.display = "none";
          document.getElementById("hiddenWhenLoggedOut").style.display = "inline";
        }
      }
    }
  } catch(error) {
    throw new Error("Error: " + error);
  }
}
