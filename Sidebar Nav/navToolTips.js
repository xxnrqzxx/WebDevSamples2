const sideNavToolTips = document.querySelector('.sidenav-tooltips');
const homeLink = document.querySelector('.home');
const homeLabel = document.querySelector('.home-label');
const peopleLink = document.querySelector('.people');
const peopleLabel = document.querySelector('.people-label');
const notifLink = document.querySelector('.notif');
const notifLabel = document.querySelector('.notif-label');
const mailLink = document.querySelector('.mail');
const mailLabel = document.querySelector('.mail-label');
const settingsLink = document.querySelector('.settings');
const settingsLabel = document.querySelector('.settings-label');

homeLink.addEventListener('mouseover', function(){
    sideNavToolTips.style.left = '0%';
    homeLabel.style.opacity = 1;
});
homeLink.addEventListener('mouseout', function(){
    sideNavToolTips.style.left = '-25%';
    homeLabel.style.opacity = 0;
});

peopleLink.addEventListener('mouseover', function(){
    sideNavToolTips.style.left = '0%';
    peopleLabel.style.opacity = 1;
});
peopleLink.addEventListener('mouseout', function(){
    sideNavToolTips.style.left = '-25%';
    peopleLabel.style.opacity = 0;
});

notifLink.addEventListener('mouseover', function(){
    sideNavToolTips.style.left = '0%';
    notifLabel.style.opacity = 1;
});
notifLink.addEventListener('mouseout', function(){
    sideNavToolTips.style.left = '-25%';
    notifLabel.style.opacity = 0;
});

mailLink.addEventListener('mouseover', function(){
    sideNavToolTips.style.left = '0%';
    mailLabel.style.opacity = 1;
});
mailLink.addEventListener('mouseout', function(){
    sideNavToolTips.style.left = '-25%';
    mailLabel.style.opacity = 0;
});

settingsLink.addEventListener('mouseover', function(){
    sideNavToolTips.style.left = '0%';
    settingsLabel.style.opacity = 1;
});
settingsLink.addEventListener('mouseout', function(){
    sideNavToolTips.style.left = '-25%';
    settingsLabel.style.opacity = 0;
});