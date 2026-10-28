 // ====== EDIT THESE ======
  // Country code + number, no "+" and no leading 0 (e.g. 2348012345678)
  var WHATSAPP_NUMBER = "2349041874373";
  var PREFILLED = " 💖 I said yes to the date!";
  // ========================

  document.getElementById("yes").href =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(PREFILLED);

  var lines = [
    "This button is asleep 😴",
    "Shhh, No is taking a nap 💤",
    "Nice try, but No is off duty 😌",
    "Error: ‘No’ not found. Try Yes? 💖",
    "Even the button believes in us 🥹"
  ];
  var i = 0;
  var no = document.getElementById("no");
  var msg = document.getElementById("msg");

  no.addEventListener("click", function (e) {
    e.preventDefault();
    msg.textContent = lines[i++ % lines.length];
    no.classList.remove("shake");
    void no.offsetWidth;
    no.classList.add("shake");
  });
