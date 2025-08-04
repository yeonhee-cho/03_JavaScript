const send = document.getElementById("send");

send.addEventListener("click", () => {
  const childInput = document.getElementById("childInput").value;
  opener.document.getElementById("inputId").value = childInput;

  window.close();
});
