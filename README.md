# Toy Robot Simulator
![Infrastructure workflow](https://github.com/uvishere/toy-robot-challenge/actions/workflows/aws-deploy.yml/badge.svg)
![App workflow](https://github.com/uvishere/toy-robot-challenge/actions/workflows/publish-app.yml/badge.svg)

This is based on the popular toy robot coding test. Read the [link](https://joneaves.wordpress.com/2014/07/21/toy-robot-coding-test/) to know more about it.
The UI version of the Robot simulator is a bit modified from original question

## Accessing the app
The simulator can be accessed from: [https://d3ehh2amh3b8rt.cloudfront.net](https://d3ehh2amh3b8rt.cloudfront.net/)

## Structure
The app is developed in react using vite and infrastrucutre is provisioned in aws using **aws cdk**. The repository is structured as monorepo. Details to run the app and infra can be found inside individual directories.

Toy Robot App: [Documentation](toy-robot/README.md)

Infrastructure: [Documentation](infrastructure/README.md)

## CI/CD
- CI/CD pipelines are defined using GitHub Actions. 
- The workflow files are located inside `.github/workflows`. 
- The respective pipelines for Inftrastruce and App will only trigger if changes are made into those directories.
- Edit those files if you need to add, remove or update the steps.

### Credits
- To the person who made the 🚶 emoji 
- To my little son who laughed everytime the guy moved on screen. It made the excerise a real fun for both of us.
