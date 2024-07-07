let num = 0;
function showTime() {
  console.log(`${num++}초`);
  if (num > 5) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);
