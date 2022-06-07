// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

    let takeoff = this.document.getElementById("takeoff");
    let flightStatus = this.document.getElementById("flightStatus");
    let shuttleBackground = this.document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = this.document.getElementById("landing");
    let missionAbort = this.document.getElementById("missionAbort");
    let up = this.document.getElementById("up");
    let down = this.document.getElementById("down");
    let right = this.document.getElementById("right");
    let left = this.document.getElementById("left");
    let rocket = this.document.getElementById("rocket");
    let statusInFlight = "Shuttle in flight.";

    //set rocket position within shuttleBackground
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "0px";

    function printRocketPosition() {
        console.log("top: " + rocket.style.top);
        console.log("bottom: " + rocket.style.bottom);
        console.log("left: " + rocket.style.left);
        console.log("right: " + rocket.style.right);
    }

    function isInFlight(alertWhenBoolean) {
        let output = (flightStatus.innerHTML === statusInFlight)
        if (output) {
            if (alertWhenBoolean === "alertWhenTrue") {
                window.alert("Shuttle is already flight!");
            }
        } else {
            if (alertWhenBoolean === "alertWhenFalse") {
                window.alert("Shuttle is not in flight!");
            }
        }
        return output;
    }

    function moveRocket(direction, px = 10) {
        if (!isInFlight("alertWhenFalse")) {
            return;
        }
        if (direction === "up") {
            rocket.style.bottom = parseInt(rocket.style.bottom) + px + "px";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        } else if (direction === "down") {
            rocket.style.bottom = parseInt(rocket.style.bottom) - px + "px";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        } else if (direction === "left") {
            rocket.style.left = parseInt(rocket.style.left) - px + "px";
        } else if (direction === "right") {
            rocket.style.left = parseInt(rocket.style.left) + px + "px";
        } else if (direction === "land" || direction === "abort") {
            rocket.style.bottom = "0px";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerHTML = 0;
            if (direction === "land") {
                window.alert("The shuttle is landing. Landing gear engaged.");
                flightStatus.innerHTML = "The shuttle has landed.";
            }
        }

        printRocketPosition();
    }

    //event listeners
    takeoff.addEventListener("click", function (event) {
        if (isInFlight("alertWhenTrue")) {
            return;
        }
        let readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (readyForTakeoff) {
            flightStatus.innerHTML = statusInFlight;
            shuttleBackground.style.background = "blue";
            moveRocket("up");
        }
    });

    landing.addEventListener("click", function () {
        moveRocket("land");

    });

    missionAbort.addEventListener("click", function () {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            if (isInFlight()) {
                moveRocket("abort");
            }
            flightStatus.innerHTML = "Mission aborted";
        }
    });

    up.addEventListener("click", function (event) {
        moveRocket("up");
    });

    down.addEventListener("click", function (event) {
        if (Number(spaceShuttleHeight.innerHTML) >= 20000) {
            moveRocket("down");
        } else {
            window.alert("Cannot descend below 10,000 miles without landing or aborting mission!");
        }
    });

    left.addEventListener("click", function (event) {
        moveRocket("left");
    });

    right.addEventListener("click", function (event) {
        moveRocket("right");
    });

});