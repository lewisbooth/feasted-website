var feed = new Instafeed({
  accessToken: 'IGQVJWUzIxVkdWR2ZA6RHNhaXZA6ZATB4ZATgxUFRKaEpsaHliaU9NZA3VGVGZAxcHZAnWi0zemR6d3N5bFdjS0J6V21qcUVVcGVNaHhKR3M4YkJvSDBWS0JJdjlrS2d6V1hwYlhGTUZArZA3ln',
  limit: 12,
  template: `
    <a href="{{link}}" target="_blank">
      <img src="{{image}}" title="{{caption}}"/>
    </a>
  `
})
feed.run()

curl - i - X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=IGQVJWUzIxVkdWR2ZA6RHNhaXZA6ZATB4ZATgxUFRKaEpsaHliaU9NZA3VGVGZAxcHZAnWi0zemR6d3N5bFdjS0J6V21qcUVVcGVNaHhKR3M4YkJvSDBWS0JJdjlrS2d6V1hwYlhGTUZArZA3ln"