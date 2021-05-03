# Frontend
This folder contains the ReactJS application and the nginx configurations to be Dockerised.

## Dependencies
The following libraries are required:
* node
* npm
 
To install, execute the following commands:
```
# Install required software
sudo apt install node npm -y

# Install required libraries
npm install
```

## Folders
There are 3 folders in the src directory, components, config and pages. The components folder contains the components of the application (mainly table and routes), the config folder contains the configuration used for the application (mainly the Django backend endpoints and the column headers/accessors) and the pages folder contains the pages that will be rendered while using the application (mainly the main page with the table and a form page to add entries).
