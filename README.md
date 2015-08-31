# project-2-VoteApp 

A jstogether project. Follow us on slack and reddit [https://www.reddit.com/r/jstogether](https://www.reddit.com/r/jstogether/).

## Demo

> Flex and indexedDB aren't implemented properly in Safari yet.
> Please view using another browser, thanks :)

http://casioo.github.io

## Running The App

To run the app, follow these steps.

1. Install gulp, our task runner:

  ```shell
  npm install -g gulp
  ```
  
2. Install jspm, our client side package manager:

  ```shell
  npm install -g jspm@beta
  ```
  
3. Configure jspm with your Github account. Prevents any download rate-limits:

  ```shell
  jspm registry config github
  ```
   
4. Install the required npm development tools:

  ```shell
  npm install
  ```
  
5. Install the required jspm client libraries:

  ```shell
  jspm install -y
  ```
  
6. Start the development webserver:

  ```shell
  gulp watch or gulp serve
  ```

7. Browse to [http://localhost:9000](http://localhost:9000).