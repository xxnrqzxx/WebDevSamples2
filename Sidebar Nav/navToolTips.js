const sideNavToolTips = document.querySelector(".sidenav-tooltips");
const profileToolTip = document.querySelector(".profile-tooltip");
const homeLink = document.querySelector(".home");
const homeLabel = document.querySelector(".home-label");
const peopleLink = document.querySelector(".people");
const peopleLabel = document.querySelector(".people-label");
const notifLink = document.querySelector(".notif");
const notifLabel = document.querySelector(".notif-label");
const mailLink = document.querySelector(".mail");
const mailLabel = document.querySelector(".mail-label");
const settingsLink = document.querySelector(".settings");
const settingsLabel = document.querySelector(".settings-label");
const profileLink = document.querySelector(".profile");
const profileLabel = document.querySelector(".profile-label");

homeLink.addEventListener("mouseover", function () {
  if (!homeLink.classList.contains("collapsed")) {
    sideNavToolTips.style.left = "0%";
    homeLabel.style.opacity = 1;
  }
});
homeLink.addEventListener("mouseout", function () {
  if (!homeLink.classList.contains("collapsed")) {
    sideNavToolTips.style.left = "-25%";
    homeLabel.style.opacity = 0;
  }
});

peopleLink.addEventListener("mouseover", function () {
  if (!peopleLink.classList.contains("collapsed")) {
    sideNavToolTips.style.left = "0%";
    peopleLabel.style.opacity = 1;
  }
});
peopleLink.addEventListener("mouseout", function () {
  if (!peopleLink.classList.contains("collapsed")) {
    sideNavToolTips.style.left = "-25%";
    peopleLabel.style.opacity = 0;
  }
});

notifLink.addEventListener("mouseover", function () {
  if (!notifLink.classList.contains("collapsed")) {
    sideNavToolTips.style.left = "0%";
    notifLabel.style.opacity = 1;
  }
});
notifLink.addEventListener("mouseout", function () {
  if (!notifLink.classList.contains("collapsed")) {
    sideNavToolTips.style.left = "-25%";
    notifLabel.style.opacity = 0;
  }
});

mailLink.addEventListener("mouseover", function () {
  if (!mailLink.classList.contains("collapsed")) {
    sideNavToolTips.style.left = "0%";
    mailLabel.style.opacity = 1;
  }
});
mailLink.addEventListener("mouseout", function () {
  if (!mailLink.classList.contains("collapsed")) {
    sideNavToolTips.style.left = "-25%";
    mailLabel.style.opacity = 0;
  }
});

settingsLink.addEventListener("mouseover", function () {
  if (!settingsLink.classList.contains("collapsed")) {
    sideNavToolTips.style.left = "0%";
    settingsLabel.style.opacity = 1;
  }
});
settingsLink.addEventListener("mouseout", function () {
  if (!settingsLink.classList.contains("collapsed")) {
    sideNavToolTips.style.left = "-25%";
    settingsLabel.style.opacity = 0;
  }
});

profileLink.addEventListener("mouseover", function () {
  if (!profileLink.classList.contains("collapsed")) {
    profileToolTip.style.left = "0%";
    profileLabel.style.opacity = 1;
  }
});
profileLink.addEventListener("mouseout", function () {
  if (!profileLink.classList.contains("collapsed")) {
    profileToolTip.style.left = "-25%";
    profileLabel.style.opacity = 0;
  }
});
