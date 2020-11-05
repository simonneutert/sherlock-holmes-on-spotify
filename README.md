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

## get the source data

- make dev account for api access on spotify
- visit https://developer.spotify.com/documentation/web-api/reference/albums/get-several-albums/ then scroll around until you find the "try it" button, it will generate a key, which in turn allows you to curl what you need (pipe to file :wink:)

## extract json using JSONata

``` jsonata
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
