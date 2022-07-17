
//https://api.ipify.org?format=json
// function getip(){
//     ip = $.getJSON("https://api.ipify.org?format=json")
// }
class ip {
    Getip(data)
    {
        $.getJSON("https://api.ipify.org?format=json", function(data){   
        console.log(data.ip)
        return "http://ip-api.com/json/" + data.ip + "?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,isp,org,as,reverse,mobile,proxy,hosting,query";
        })
        // url = "https://api.ipify.org?format=json"
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open( "GET", url, false ); // false for synchronous request
        // xmlHttp.send( null );
        // alert(xmlHttp.responseText);
        // return xmlHttp.responseText;
    }
}

function getBrowser (){
    var ua= navigator.userAgent;
    var tem; 
    var M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    $("#available-resolution").html(window.screen.availHeight + "x" + window.screen.availWidth);
    $("#resolution").html(window.screen.height + "x" + window.screen.width);
    $("#time").html(new Date())
    $("#browser").html(M.join(''));
    $("#os").html(window.navigator.platform);
    console.log(navigator);
    return M.join(' ');
    
};
console.log(getBrowser())
//Getip()
//console.log(data.ip)

//console.log(string)
function getip(data) {
$.getJSON("http://ip-api.com/json/", function(data){
    console.log(data.query)
    return data.query
})}
$.getJSON("http://ip-api.com/json?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,isp,org,as,reverse,mobile,proxy,hosting,query", function(data) {
//let userdata = $.getJSON("http://ip-api.com/json/" + data.ip) 
// Setting text of element P with id gfg
// if (data.status == fail){
//     $("#message").html(data.message);
// }
console.log(data);
$("#status").html(data.status);
$("#as").html(data.as);
$("#city").html(data.city);
$("#country").html(data.country);
$("#countryCode").html(data.countryCode);
$("#region").html(data.region);
$("#regionName").html(data.regionName);
$("#timezone").html(data.timezone);
$("#offset").html(data.offset);
$("#zip").html(data.zip);
$("#lat").html(data.lat);
$("#lon").html(data.lon);
$("#latlng").html(data.lat + ", " + data.lon)
$("#org").html(data.org);
$("#isp").html(data.isp);
$("#query").html(data.query);
$("#proxy").html(data.proxy);
$("#mobile").html(data.mobile);
$("#hosting").html(data.hosting);
$("#reverse").html(data.reverse);

})




var localmachine = "http://127.0.0.1/:" + range 


function initialize() {
  var directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  latlong = document.getElementById("latlng").value;
  var chicago = new google.maps.LatLng(41.850033, -87.6500523); //41.850033, -87.6500523 document.getElementById("lat").value + document.getElementById("lng").value
  var mapOptions = { zoom:7, mapTypeId: google.maps.MapTypeId.ROADMAP, center: chicago }
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsDisplay.setMap(map);
}

// function locateMe() {
//   latlong = document.getElementById("latlng").value;
//   const pos = new google.maps.LatLng(latlong); console.log(latlong)
//   this.map.setCenter(pos)
//   const locationInfoWindow = new google.maps.InfoWindow({
//   content: 'You are here.',
//   position: pos,
//   pixelOffset: new google.maps.Size(0, -25)
//   })
//   const marker = new google.maps.Marker({
//   animation: 'DROP',
//   position: pos,
//   map: this.map,
//   icon: {
//     url: 'public/images/star.png'
//   }
//   })
//   locationInfoWindow.open(this.map)
//   marker.addListener('click', () => {
//   locationInfoWindow.open(this.map)
//   $("#map").html(this.map)
//   })
// }
// locateMe()
  
  
