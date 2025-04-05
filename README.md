# Express and SonarQube

Simple POC to test SonarQube integration with a ExpressJS app

## Setup
#### 1. Run SonarQube in docker
```
docker run -d --name sonarqube -p 9000:9000 sonarqube
```

#### 2. Install npm depedencies
```
npm install
```

#### 3. Run the project
```
npm run start
```

## Run SonarQube Scanner
#### 1. Open the SonarQube in your browser
[http://localhost:9000/](http://localhost:9000/)

#### 2. Create the SonarQube Token in
Administration > Security >  Users > Tokens

#### 3. Create the **sonar-project.properties** file
Do the cloning from **sonar-project.properties.example**
```
cp sonar-project.properties.example sonar-project.properties
```

#### 4. Run the scan script
```
npm run scan
```

#### 5. Open SonarQube in you browser
See the report in
[http://localhost:9000/projects](http://localhost:9000/projects)