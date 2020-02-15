/// how to unlock a level: change id:1 to id:1 thru id:5

let rsp = await fetch("http://127.0.0.1:8090/unlock", {
  method: "POST",
	headers: {"Accept": "application/json",
		"Content-Type": "application/json"},
	body: JSON.stringify({id:1})
});
let data = await response.json();
if (data && data.unlocked == true) {
  // if it works
} else {
  // what if we haven't?
}



//// how to check if a level is unlocked: change id=1 thru id=5

let rsp = await fetch("http://127.0.0.1:8090/isUnlocked?id=1", {
  method: "GET",
});
let data = await response.json();
if (data && data.unlocked == true) {
  // what do we do if we have unlocked this level?
} else {
  // what if we haven't?
}
