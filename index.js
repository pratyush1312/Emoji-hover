let emoji = document.getElementById("emoji");
let emojiArr = [
  "๐",
  "๐",
  "๐",
  "๐คฃ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐ฅฐ",
  "๐",
  "๐คจ",
  "๐ค",
  "๐คฉ",
  "๐",
  "๐ค",
  "๐",
  "๐",
  "๐",
];

let incr = 0;

emoji.innerHTML = emojiArr[incr];
incr++;

emoji.addEventListener("mouseover", function () {
  if (incr == emojiArr.length) {
    incr = 0;
  } else {
    emoji.innerHTML = emojiArr[incr];
    incr++;
  }
});
