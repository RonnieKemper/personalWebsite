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
  
function loadGithubRepos(){
    let gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        document.getElementById("githubRepos").innerHTML = this.responseText;
    }
    };
    gitHubRequest.open("GET", "https://api.github.com/users/RonnieKemper/repos", true);
    gitHubRequest.send();
}
loadGithubRepos()
