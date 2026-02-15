function Button1(event) {
  event.preventDefault();

  var input = document.getElementById("taskname").value;

  const newPara = document.createElement("p");
  newPara.textContent = input;
  newPara.classList.add("task");

  document.body.appendChild(newPara);

  newPara.addEventListener("click", taskclick);
}

function taskclick(event) {
  event.preventDefault();
  event.target.classList.toggle("completed");
}

var Button1Object = document.getElementById("button1");
Button1Object.addEventListener("click", Button1);