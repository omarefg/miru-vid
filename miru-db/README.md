# miru-db

## Usage

``` js
const setupDataBase = require('miru-db')

setupDataBase(config)
    .then(db => {
        const { User } = db;
    })
    .catch(err => console.log(err))

```