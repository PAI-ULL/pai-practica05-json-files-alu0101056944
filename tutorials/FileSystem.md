# Getting started with Node.js FileSystem

We use <code>fs</code> Node module for file handling using either promises, callbacks or synchronous techniques. Most of the time I'll use the same four functions:
- readFileSync
- readFile
- writeFileSync
- writeFile

**Note:** Import names matter; 'fs' is the callback **and synchronous** API, 'fs/promises' is the Promises API.

### Table of contents

- [Important notes](#important-notes)
- [Questions and Answers](#questions-and-answers)
- [References](#references)


### Important notes

- Eloquent JS's Chapter 20 describes the following <code>fs</code> functions as useful:
    - readdir: Obstains the names of the files in a directory as an array.
    - stat: For checking information about a file. Returns a Stat object.
    - rename: Renames a file.
    - unlink: Removes a file.


- **Important** Relative paths are relative to the current working directory, which will be the directory where node was executed. On the other hand, global binding <code>__dirname</code> is assigned the script's current directory.

- It is better to do the operation assuming everything is correct and handle the errors appropiately rather than checking for the errors before the operation. For example: always read first, then if the file doesn`t exist handle it as an error inside the operation. **That is because many processes may be accessing and modifying the same file so it's never safe to assume the file is in the same state it was when it was checked.** (See reference B)

- Files aren't really designed to be manipulated by multiple applications at the same time.

### Questions and Answers

1. What happens if I try to read a non-existent file?
> An error is triggered in those cases. That's why it's important to have an error handling routine when handling files.

2. Do I have to include extension's when calling fs callback functions that use filenames?
> Yes.

3. It is suggested to use <code>access</code> function instead of <code>stat</code> if I won't manipulate the file afterwards. Why is that?
> Because access is more straightforward for checking access information and therefore could be faster than <code>stats</code> function. The latter has a higher level of abstraction and probably uses <code>access</code> too, so unless I need to know stuff like whether a path is a file or a directory I can use lower level functions if they provide what I need, in exhange of faster execution times.

4. What is the mode of a file?
> It's an Operating System dependent file state that represents different operations being applied to the file. For example; read, write, read and write, etc...



### References

- ##### A [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html)
- ##### B [https://stackoverflow.com/questions/54514627/nodejs-fs-stat-or-fs-access-to-check-if-a-folder-exists](https://stackoverflow.com/questions/54514627/nodejs-fs-stat-or-fs-access-to-check-if-a-folder-exists)