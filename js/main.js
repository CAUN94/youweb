function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// Map
var map = L.map('mapid').setView([-33.408578991937375, -70.577943164225], 14);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-33.408578991937375, -70.577943164225]).addTo(map)
    .bindPopup('You Just Better<br>Av. Apoquindo 4900,<br>Local 7')
    .openPopup();

// Shuffle Image from Equipo
var list = document.getElementsByClassName('fotos-equipo')[0];
function shuffleNodes() {
    var nodes = list.children, i = 0;
    nodes = shuffle(Array.from(nodes))
    while(i < nodes.length) {
        list.appendChild(nodes[i]);
        ++i;
    }
}
shuffleNodes();

// Filter Professional
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("foto-team");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}