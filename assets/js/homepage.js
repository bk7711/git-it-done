var getUserRepos = function(){
    console.log("hello there");
    fetch("https://api.github.com/users/octocat/repos");
};
getUserRepos();