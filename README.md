
# Craco Module Federation Example
Webpack 5 Module Federation aims to solve the sharing of modules in a distributed system, by shipping those critical shared pieces as macro or as micro as you would like. It does this by pulling them out of the the build pipeline and out of your apps.

# Usage
```
$ npx lerna bootstrap
```

Bootstrap the packages in the current Lerna repo. Installs all of their dependencies and links any cross-dependencies.

When run, this command will:

 1. ```npm install``` all external dependencies of each package.
 2. Symlink together all Lerna packages that are dependencies of each
    other.
 3. ```npm run prepublish``` in all bootstrapped packages (unless
    --ignore-prepublish is passed).
 4. ```npm run prepare``` in all bootstrapped packages.


Run the all applications
```
$ npx lerna run start
```
Open  [http://localhost:3000](http://localhost:3000/)  to view it in the browser.
