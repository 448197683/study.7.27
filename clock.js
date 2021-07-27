const clockSpan = document.querySelector("#clockSpan")
function timer() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const years = currentTime.getFullYear();
  const month = currentTime.getMonth() + 1;
  const date = currentTime.getDate();
  clockSpan.innerHTML = `Current Time is ${hours < 10 ? `0${hours}` : hours}: ${minutes < 10 ? `0${minutes}` : minutes} :${seconds < 10 ? `0${seconds}` : seconds}<br>
  Today is ${years}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`
}

timer();
setInterval(timer, 1000)