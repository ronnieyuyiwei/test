window.onload = function () {
  const button = document.getElementById("get")
  button.addEventListener('click', function () {
    alert("123")
  })
}
const a = function () {
  setTimeout(function () {
    document.getElementById("get").click()
  },2000)
}
a()
