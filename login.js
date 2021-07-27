const form = document.querySelector("#form");
const inputName = document.querySelector("#inputName");
const inputAge = document.querySelector("#inputAge");
const getName = localStorage.getItem("userName");
const getAge = localStorage.getItem("userAge");
const welcome = document.querySelector("#welcome");
const birth = document.querySelector("#birth")
console.log(welcome, birth)

if (!getName) {
  form.addEventListener(`submit`, function (e) {
    e.preventDefault();
    const userName = inputName.value;
    const userAge = inputAge.value;
    if (userName === "" || userAge === "") {
      return alert("plese Fill out")
    } else {
      localStorage.setItem("userName", userName);
      localStorage.setItem("userAge", userAge);
      location.reload();
    }

  });
} else {
  form.classList.add("hide");
  welcome.innerHTML = `Hello ${getName}`
  const time = new Date();
  const years = time.getFullYear();
  birth.innerHTML = `you're born in ${years - getAge} years`;

}
