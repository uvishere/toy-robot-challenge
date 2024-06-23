# Toy Robot Simulator test
![Infrastructure workflow](https://github.com/uvishere/toy-robot-challenge/actions/workflows/aws-deploy.yml/badge.svg)
![App workflow](https://github.com/uvishere/toy-robot-challenge/actions/workflows/publish-app.yml/badge.svg)

This is based on the popular toy robot coding test. Read the [link](https://joneaves.wordpress.com/2014/07/21/toy-robot-coding-test/) to know more about it.
The UI version of the Robot simulator is a bit modified from original question

## Accessing the app
The simulator can be accessed from: https://d3ehh2amh3b8rt.cloudfront.net/

## Structure
The app is developed in react using vite and infrastrucutre is provisioned in aws using cdk. To insall and run it locally, here are the steps:

### Frontend
1. clone this repo
2. Get inside toy-robot folder, `cd toy-robot` 
3. run `npm install`
4. run `npm run dev` and follow the url in the `localhost:5173`

### Infrastructure
Make sure you have aws profile set. To do this, install `aws-cli` and run `aws configure` to configure your access
1. Run `npm install`
2. To check diffs, `npx cdk diff`
3. To deploy, `npx cdk deploy --all`

