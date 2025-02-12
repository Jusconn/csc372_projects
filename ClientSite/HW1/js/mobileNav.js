//open nav menu on mobile
document.getElementById('open').addEventListener('click', function() {
    var navbars = document.getElementsByClassName('navbar');
    for (var i = 0; i < navbars.length; i++) {
        navbars[i].style.display = 'block';
    }
});

//close nav menu on mobile
document.getElementById('close').addEventListener('click', function() {
    var navbars = document.getElementsByClassName('navbar');
    for (var i = 0; i < navbars.length; i++) {
        navbars[i].style.display = 'none';
    }
});