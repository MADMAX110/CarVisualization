let dir = "C:/CarVisualization";

window.onload = function() {
  setInterval(() => {
    fetch(dir + '/car_view.json')
    .then(res => res.json())
    .then(data => {
        var base64Image = data.image;
        let image = document.getElementById('carview');
        image.src = base64Image;
    })
  }, 100);
} 