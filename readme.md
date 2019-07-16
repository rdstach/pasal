# pasal

`pasal` means chapter in Indonesian, this repository was a way for me to generate 5 bible chapters to read, daily.<br>
This project is related to [https://github.com/drepram/bapa](https://github.com/drepram/bapa)

Let me explains the directories and the files in this project.

## Installing
> First, we have to clone the project into our machine

```shell
$ git clone https://github.com/drepram/pasal
$ cd pasal
$ yarn install
```

And we're good to go.

### `TESTAMENTS/` || JSON Files

```
TESTAMENTS/NEW-TESTAMENT.json  : Array of objects, objects are chapters in the New Testament, each objects consists of it's book & verse number
TESTAMENTS/OLD-TESTAMENT.json  : Array of objects, objects are chapters in the Old Testament, each objects consists of it's book & verse number
TESTAMENTS/VB5-NEW.json        : Array of objects chunked into 5 index-es, source are from NEW-TESTAMENT.json
TESTAMENTS/VB5-OLD.json        : Array of objects chunked into 5 index-es, source are from OLD-TESTAMENT.json
```

### `index.js`

> Creates an object for each chapter, basically ranging it

```shell
$ node index.js Kejadian 40
# parameters = book name, amount of chapters in the book
```

### `split5.js`

> Split array into chunks with 5 elements

```shell
$ node split5.js|pbcopy
# we would specify the source of json we're chunking, after the script has been run, we will copy the output of the script
# and insert into a file named VB5-{NEW|OLD}.json
```

### `verse.js`

> Loop through JSON file, assign a day for each object

```shell
$ node verse.js|pbcopy
# this will loop through the VB5 file objects and also assignt the day of the reading using MomentJS
# the output of this will then be put inside object.js
```

### `object.js`

We don't actually run this file, the only use of this file is to combine the reading schedule of the New and Old Testaments.

## License

This project is licensed under the MIT license.

