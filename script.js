$(document).ready(function(){
    $(".menu-container").hover(function(){
        $(this).css("background-color", "orange");
    }, function(){
        $(this).css("background-color", "aquamarine");
    });
});


const toggleIcon = (e) => {
    e.target.classList.toggle('active');
  };
  
  $('.img1').on('mouseover', toggleIcon);
  $('.img1').on('mouseout', toggleIcon);

  $('.img2').on('mouseover', toggleIcon);
  $('.img2').on('mouseout', toggleIcon);

  $('.img3').on('mouseover', toggleIcon);
  $('.img3').on('mouseout', toggleIcon);
  
function loadRepo() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      results = JSON.parse(this.responseText);
      for (let i = 0; i < results.length; i++) {
        console.log(results[i].name);
        let ul = document.getElementById("repositories");
        let li = document.createElement("LI");
        li.className = "list-group-item";
        let a = document.createElement("a");
        li.appendChild(document.createTextNode(results[i].name));
        a.appendChild(li);
        a.setAttribute("href", results[i].html_url);
        ul.appendChild(a);
	document.getElementById("githubRepos").innerHTML = this.responseText;
      }
    }
  };
  xhttp.open("GET", "https://api.github.com/users/RonnieKemper/repos", true);
  xhttp.send();
}
