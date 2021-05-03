# Backend
This folder contains the Django application and the uwsgi configurations to be Dockerised.

## Dependencies
The following libraries are required:
* django
* djangorestframework
* django-cors-headers
* uwsgi
 
To install, execute the following commands:
```
# This step is required as uwsgi requires C libraries to install
sudo apt install gcc -y

# Installed required Python libraries
python3 -m pip install django djangorestframework django-cors-headers uwsgi
```

## Folders
There are 2 folders in this directory, backend and address. The backend folder contains the code used to start the application, whereas the address folder contains the code related to the Address entity (mainly CRUD).

## Notes
The database currently contains the following entries:
ID | First Name | Last Name | Phone Number | Department
--- | --- | --- | --- |---
1 | John | Doe | +1234567 | Marketing
2 | Jane | Doe | +7654321 | Rnd
3 | Doe | John | +2345678 | Rnd
4 | Doe | Jane | +8765432 | Marketing
