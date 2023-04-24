fetch('https://api.jikan.moe/v4/anime?letter=Naruto&score=something')
.then(res => {
  return res.json();
})
.then(data => {
  console.log(data)
})

function getAnimeByName() {

}

