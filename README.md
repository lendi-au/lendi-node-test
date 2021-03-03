# Lendi Technical Assignment

## Get Started

#### Run It

Get started developing...

```shell
# install deps
yarn

# run in development mode
yarn dev
```


#### Try It

- Open you're browser to [http://localhost:3000](http://localhost:3000)
- Invoke the `/applications` endpoint
  ```shell
  curl http://localhost:3000/api/v1/applications
  ```


## The Task

In the file [/server/api/controllers/applications/router.js](/server/api/controllers/applications/router.js) there are 3 tasks

#### Task 1
There is a bug in the route for get by Id. Find and fix that bug
[link](https://github.com/AllanCrain/lendi-api-test/blob/988dab7ae52acdd726169ee030cb1976e4b347bc/server/api/controllers/applications/router.js#L8)

#### Task 2
Add an additional route to edit application
[link](https://github.com/AllanCrain/lendi-api-test/blob/988dab7ae52acdd726169ee030cb1976e4b347bc/server/api/controllers/applications/router.js#L9)

#### Task 3
Add an additional route to delete an application
[link](https://github.com/AllanCrain/lendi-api-test/blob/988dab7ae52acdd726169ee030cb1976e4b347bc/server/api/controllers/applications/router.js#L10)

## Guidelines

**Note: Please do NOT spend more than 2 hours on this test.**

We are interested in your coding style and how you solve problems - if you do not 100% finish the task, 
we would rather you submit what you've completed with notes on what you would do if you had additional
time.

- Please include your source code and any build steps / explanations we may need to test the submission
- Please make sure your code is executable, and all dependencies are included
- Please structure the code for reusability
- Feel free to use any frameworks, preprocessors, or tools you are familiar with


## Submission
Please submit a complete copy of the source code you wrote for this test.

**Note: Please do NOT submit your solution publicly / on github.**

The easiest way to submit this is to upload a zip onto google drive and provide a link to the recruiter.





## Additional tips:

#### Production mode
Compiles the application and starts it in production production mode.

```shell
yarn compile
yarn start
```

#### Test It

Run the Mocha unit tests

```shell
yarn test
```

#### Debug the server:

```
yarn dev:debug
```

#### Debug Tests

```
yarn test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file
