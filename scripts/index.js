window.onload = function () {
    setInterval(() => {
        fetch('../resources/status.json')
            .then(res => res.json())
            .then(carData => {
                document.getElementById("speed").innerHTML = carData.carSpeed;
                document.getElementById("acceleration").innerHTML = carData.acceleration;
                document.getElementById("light").innerHTML = carData.trafficLight;
                document.getElementById("road").innerHTML = carData.roadCondition;
                document.getElementById("direction").innerHTML = carData.direction;
                document.getElementById("x").innerHTML = carData.location.x;
                document.getElementById("y").innerHTML = carData.location.y;
                document.getElementById("car").style.left = carData.location.x;
                document.getElementById("car").style.top = carData.location.y;
            })
    }, 100);
}