function encrypt() {
  let text = document.getElementById("textContent").value;
  let avatar = document.getElementById("avatar");

  if (!/^[a-z\s]*$/.test(text)) {
    swal("Error", "Write your text in lowercase", "warning");
    avatar.src = "./sources/chico-asustado.png";
    return;
  }

  let encryptedText = text
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (text.length != 0) {
    document.getElementById("textContent").value = encryptedText;
    avatar.src = "./sources/chico-alegre.png";
  } else {
    avatar.src = "./sources/chico-asustado.png";
    swal("Error!", "Check your text", "warning");
  }
}

function decrypt() {
  let text = document.getElementById("textContent").value;

  if (!/^[a-z\s]*$/.test(text)) {
    avatar.src = "./sources/chico-asustado.png";
    swal("Error", "Write your text in lowercase", "warning");
    return;
  }

  let decryptedText = text
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (text.length != 0) {
    document.getElementById("textContent").value = decryptedText;
    avatar.src = "./sources/chico-alegre.png";
  } else {
    avatar.src = "./sources/chico-asustado.png";
    swal("Error", "Check your text", "warning");
  }
}

function copy() {
  let text = document.getElementById("textContent").value;
  let copyButton = document.getElementById("copy-button");

  if (text.length === 0) {
    swal("Verify your text", "", "warning");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      copyButton.innerHTML = "Copied!";
      setTimeout(function () {
        copyButton.innerHTML = "Copy";
      }, 3000);
    })
    .catch((err) => {
      console.error("Error: ", err);
      alert("Text was not copied");
    });
}
