function candidateSearch (userInput) {
    fetch(`https://api.github.com/users/${userInput}/repos`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson.name));
}

function submitFormListener() {
    $('form').submit(event => {
        event.preventDefault();
        const userInput = $('#js-search').val();
        candidateSearch(userInput);
    });
}

function displayResults(candidateRepos) {
    $('.js-results').empty();
    for (let i = 0; i < candidateRepos.length; i++) {
        $('.js-results').append(`<li>${candidateRepos[i]}</li>`);
        }
    $('.js-results').removeClass('hidden');    
    }

$(function() {
    submitFormListener();
  });