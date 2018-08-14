# CLI Based Note Taking App

A Simple Note-Taking application using Node.js and Yargs.

## Steps to Setup

Install dependencies

```bash
npm install
```

## Usage

1 Add Note

```bash
node app.js add -t="Title" -b="Body/Description"
```

2 Read Specific Note

```bash
node app.js read -t="Title"
```

3 Delete Specific Note

```bash
node app.js delete -t="Title"
```

4 List All Notes

```bash
node app.js list
```

5 Get Help

```bash
node app.js --help
```
