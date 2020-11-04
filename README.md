# spotify-sherlock-holmes

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## extract json using JSONata

```json
{
    "items": $sort(items[$contains(name, 'Die Originale')].{
        "name": name,
        "uri": uri,
        "images": images,
        "spotifyUrl": external_urls.spotify,
        "case": $number($split($match(name, /[Folge|Fall] \d+/).match, " ")[-1])
    }, function($l, $r) {
        $l.case > $r.case
    }
    )
}
```

## get the source data

- make dev account for api access on spotify
- visit https://developer.spotify.com/documentation/web-api/reference/albums/get-several-albums/ and hit the "try it" button, it will allow you to curl what you need (pipe to file :wink:)
