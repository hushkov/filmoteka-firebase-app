function spinnerOn() {
    document.getElementById('spinner-loader').style.display = 'block';
    document.getElementById('content').style.display = 'none';
}

function spinnerOff() {
    setTimeout(function() {
    document.getElementById('spinner-loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    }, 2000)
}