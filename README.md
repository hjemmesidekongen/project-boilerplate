# Bootstrapped theme

## Install

```
yarn install
```

#### Theme dependencies
If you don't have Yarn installed on your local machine, simply paste the following into your terminal:

```
npm install -g yarn
```

## Update dependencies
If the package.json has been updated, you need to update your local packages. 

To update your local packages, simply run:
```
yarn install
```

## Browser sync upon rebuild?
We all want to take advantage of live reload, in the browser.

This is now easier than ever!

#### Custom proxy path 
To achieve this, we not to proxy our local development domain, through BrowserSync. 
Since the local development domain is custom per developer, you need to tell BrowserSync, what your local domain is.

To do this, simply copy .env.json.example to .env.json and set your local domain in the "proxy" key. 
This file is ignored by git.

Yoy could also paste this in to your terminal:

```
cp .env.json.example .env.json
```

## Build commands
You can trigger the compilation of the files manually and you can use the watch command.

The watch command, watches for any file changes, and automatically performs a compilation of your files, when a change is detected.  

### Build
The build commands is environment specific.

#### For development environment
```
npm run dev
```

#### For production environment
```
npm run prod
```

### Watch
```
npm run watch
```
