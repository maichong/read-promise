# [read-promise](https://github.com/maichong/read-promise)

Promise version of [read](https://github.com/npm/read)


## USAGE

```javascript

const read = require('read-promise');

let value = await read(options);

let name = await read('What is your name?');

```

## OPTIONS

Every option is optional.

* `prompt` What to write to stdout before reading input.
* `silent` Don't echo the output as the user types it.
* `replace` Replace silenced characters with the supplied character value.
* `timeout` Number of ms to wait for user input before giving up.
* `default` The default value if the user enters nothing.
* `edit` Allow the user to edit the default value.
* `terminal` Treat the output as a TTY, whether it is or not.
* `input` Readable stream to get input data from. (default `process.stdin`)
* `output` Writeable stream to write prompts to. (default: `process.stdout`)

If silent is true, and the input is a TTY, then read will set raw
mode, and read character by character.

## Contribute
[Maichong Software](http://maichong.it)

[Liang Xingchen](https://github.com/liangxingchen)

## License

This project is licensed under the terms of the MIT license
