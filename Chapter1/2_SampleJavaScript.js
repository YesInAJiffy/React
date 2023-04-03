function printInput() {
  const nameInput = document.getElementById("username").value;
  if (!nameInput) {
    console.log("String is empty.");
    alert("EMPTY");
  } else {
    console.log(nameInput);
    alert(nameInput);
  }
}
