function volume_sphere() {
e.preventDefault(); // stop form from refreshing
    
    let radius = document.getElementById("radius").value;
    radius = parseFloat(radius);

    if (isNaN(radius) || radius < 0) {
        alert("Please enter a valid non-negative number for radius.");
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").value = volume.toFixed(4);
}



window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
