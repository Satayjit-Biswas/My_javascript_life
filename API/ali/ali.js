function ali(){
    fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal')
        .then(response => response.json())
        .then(json => console.log(json))
}
ali();