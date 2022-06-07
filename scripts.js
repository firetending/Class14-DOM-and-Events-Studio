// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

    let takeoff = this.document.getElementById("takeoff");
    let flightStatus = this.document.getElementById("flightStatus");
    let shuttleBackground = this.document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let spaceShuttleHeightValue = Number(spaceShuttleHeight.innerHTML);
    let landing = this.document.getElementById("landing");
    let missionAbort = this.document.getElementById("missionAbort");
    let up = this.document.getElementById("up");
    let down = this.document.getElementById("down");
    let right = this.document.getElementById("right");
    let left = this.document.getElementById("left");
    let rocket = this.document.getElementById("rocket");
    let statusInFlight = "Shuttle in flight.";

    takeoff.addEventListener("click", function (event) {
        let readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (readyForTakeoff) {
            flightStatus.innerHTML = statusInFlight;
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }

    });

    landing.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbort.addEventListener("click", function () {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    rocket.style.position = "absolute";
    //rocket.style.top = "0px";
    rocket.style.bottom = "0px";
    rocket.style.left = "0px";
    rocket.style.right = "0px";
    function printRocketPosition() {
        console.log("top: " + rocket.style.top);
        console.log("bottom: " + rocket.style.bottom);
        console.log("left: " + rocket.style.left);
        console.log("right: " + rocket.style.right);
    }
    printRocketPosition();

    up.addEventListener("click", function (event) {
        if (flightStatus.innerHTML !== statusInFlight) {
            window.alert("Rocket must be in flight first!");
            return;
        }
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        printRocketPosition();
    });

    down.addEventListener("click", function (event) {
        if (Number(spaceShuttleHeight.innerHTML) >= 20000) {
            rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        } else {
            window.alert("Cannot descend below 10,000 miles without landing or aborting mission!");
        }
        printRocketPosition();
    });

    left.addEventListener("click", function (event) {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        printRocketPosition();
    });

    right.addEventListener("click", function (event) {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        printRocketPosition();
    });

});