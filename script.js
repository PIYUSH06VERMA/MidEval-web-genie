function updateCount() {
  const text = document.getElementById("inputText").value;
  document.getElementById("charCount").innerText = `Total Character: ${text.length}`;
  document.getElementById("charRemain").innerText = `Remaining: ${150 - text.length}`;
}

function checkText() {
  const text = document.getElementById("inputText").value;
  if (text.trim().length === 0) {
    alert("Please enter some text!");
    return;
  }
  alert("Grammar check complete. (Demo only, no real model used yet)");
}

function copyText() {
  const textArea = document.getElementById("inputText");
  textArea.select();
  navigator.clipboard.writeText(textArea.value)
    .then(() => alert("Text copied to clipboard!"))
    .catch(() => alert("Failed to copy text."));
}

function clearText() {
  document.getElementById("inputText").value = "";
  updateCount();
}
