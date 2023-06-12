let dir = "C:/CarVisualization";
window.onload = function () {
    setInterval(() => {
        fetch(dir + '/status.json')
            .then(res => res.json())
            .then(carData => {
                document.getElementById("speed").innerHTML = carData.carSpeed;
                document.getElementById("acceleration").innerHTML = carData.acceleration;
                document.getElementById("light").innerHTML = carData.trafficLight;
                document.getElementById("road").innerHTML = carData.roadCondition;
                document.getElementById("direction").innerHTML = carData.direction;
                document.getElementById("x").innerHTML = carData.location.x;
                document.getElementById("y").innerHTML = carData.location.y;
                document.getElementById("car").style.left = carData.location.x * 300 + "px";
                document.getElementById("car").style.top = carData.location.y * 300 + "px";
            })
    }, 100);
}

function sidebarShow() {
    let item = document.getElementById("sidebar");
    if (item.style.right === "0px") {
        item.style.right = "-10em";
        item.style.opacity = "0"
    }else {
        item.style.right = "0px";
        item.style.opacity = "1";
    }
}