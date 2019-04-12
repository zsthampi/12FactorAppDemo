# 12FactorAppDemo
Demo to showcase the Container portion of the 12 Factor App Methodology: Codebase, Dependencies, Logs and Disposability

## Container Overview
### Dependencies
Our recommendations for working with dependencies are:
- Always use a package manager to install dependent libraries
- Declare package dependency information as part of the delivered software
- Install all dependent libraries within the context of the application
- Avoid global installation of dependent packages

For the purposes of this demo we're using Node and its package manager.
### Codebase
Recommendations for choosing tools and best practices:
- Use an IDE or a separate program that sees Treeview Visualizations for branches and commits
- Compare files between branches and commits using Diff View
- Choose a tool that helps you easily resolve merge conflicts

### Logs
Recommendations and best practices:
- Categorize your logs to make it easier to discern between what's important and not
- Consider creating a style/format guide for logs
- Don't forget about error handling
- Remember that logs aren't just for you, they're for anyone that can potentially work on the codebase

### Disposability
Recommendations and best practices:
- Keep it simple
- Take into consideration all of the processes you may have running on your app
- If you need a third-party tool, do extensive research before implementing


## Instructions 
- Clone the repo
- run npm install
- build and run the Docker image based on commands below. 
- launch localhost:3000 to verify the app is running. 

Now, updates on the source directory in the local machine will be mapped to the target directory in docker container.
Verify it by ssh-ing to the Docker Container.

<s>Restart the docker container to update the app.</s>
Using <i>forever</i> node module, the app restarts itself automatically on updates. So restarting the docker container will be optional

### Build Docker Image
docker build -t 12factorapp .

### List Docker Images
docker images

### Run Docker Image (Update <src> based on your local directory)
docker run -d -p 3000:3000 --name 12factorapp --mount type=bind,source=<src>/12FactorAppDemo/app,target=/usr/src/app 12factorapp

### List Docker Containers 
docker container ls 

### ssh to Docker Container 
docker exec -it 12factorapp bash

### Restart Docker Container 
docker restart 12factorapp
