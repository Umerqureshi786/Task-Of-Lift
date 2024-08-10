
const animationDuration = 500;
function applyTransform(targetId) {
    const target = document.getElementById(targetId);
    const targetPosition = target.offsetTop;
    const lift = document.getElementById('parentLift');
    lift.style.transition = `transform ${animationDuration}ms ease-in-out`;    
    lift.style.transform = `translatey(-${targetPosition}px)`;
}

function floorone() {
    applyTransform('liftone');
}
function floortwo() {
    applyTransform('lifttwo');
}
function floorthree() {
    applyTransform('liftthree');
}
function floorfour() {
    applyTransform('liftfour');
}
function floorfive() {
    applyTransform('liftfive');
}
function applyTransformGround() {
    applyTransform('groundfloor');
}
document.querySelector('button[onclick="floorone()"]').addEventListener('click', floorone);
document.querySelector('button[onclick="floortwo()"]').addEventListener('click', floortwo);
document.querySelector('button[onclick="floorthree()"]').addEventListener('click', floorthree);
document.querySelector('button[onclick="floorfour()"]').addEventListener('click', floorfour);
document.querySelector('button[onclick="floorfive()"]').addEventListener('click', floorfive);
document.querySelector('button[onclick="applyTransform()"]').addEventListener('click', applyTransformGround);


