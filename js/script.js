const nameForm = document.getElementById("nameForm");
const dateForm = document.getElementById("dateForm");
const rdoMale = document.getElementById("rdoMale");
const rdoFemale = document.getElementById("rdoFemale");
const messagesForm = document.getElementById("messagesForm");
const btnSubmit = document.getElementById("btnSubmit");

const nameResult = document.getElementById("nameResult");
const currentTimeResult = document.getElementById("currentTimeResult");
const dateResult = document.getElementById("dateResult");
const genderResult = document.getElementById("genderResult");
const birthdayResult = document.getElementById("birthdayResult");
const messagesResult = document.getElementById("messagesResult");

const titleShowName = document.getElementById("titleShowName");

if (
  localStorage.getItem("name") &&
  window.location.pathname === "/index.html"
) {
  titleShowName.innerText = `Hi ${localStorage.getItem(
    "name"
  )}, Welcome to Website!`;
}

const SubmitForm = () => {
  if (
    nameForm.value == "" ||
    dateForm.value == "" ||
    messagesForm.value == ""
  ) {
    alert("Please complete the form");
  } else {
    nameResult.innerText = nameForm.value;
    birthdayResult.innerText = dateForm.value;
    messagesResult.innerText = messagesForm.value;

    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var formattedTime =
      day + "-" + month + "-" + year + " " + hour + ":" + minute + ":" + second;

    currentTimeResult.innerText = formattedTime;
    if (rdoMale.checked == true) {
      genderResult.innerText = "Male";
    } else {
      genderResult.innerText = "Female";
    }

    titleShowName.innerText = `Hi ${nameResult.innerText}, Welcome to Website!`;
    localStorage.setItem("name", nameResult.innerText);
    nameForm.value = "";
    dateForm.value = "";
    messagesForm.value = "";
  }
  return;
};

const Home = () => {
  window.location.href = "index.html";
};
const Profile = () => {
  window.location.href = "profile.html";
};
const MessageUs = () => {
  window.location.href = "messageus.html";
};
const Achievement = () => {
  window.location.href = "achievement.html";
};
