# SQL Practice Introduction

In this practice, you should be able to pass all the tests in the `/practice` folder. But first you should prepare your environment first.

## 1.1 Start MySQL Server And Web-Client

1. Ensure that your docker desktop daemon is running. Make sure that you are able to see this little icon: <img alt="docker" src="assets/docker.png" style="width:30px;"/>.
1. Please go to `/prepare` folder;
1. Please execute the following command: `docker-compose up -d`;
1. Please open a web broser and access `http://localhost:44444`. The user name should be `root` and the password should be `test`.
1. You can find a database called `classicmodels`.

> Note: If you finally ruins yor database. You can simplely destory the database and web-client by running `docker-compose down` under `/prepare` folder.

## 1.2 Fix All The Tests

1. Please goto `/practice` folder.
1. Please execute `npm install` to install all the dependencies.
1. Please fix all the SQLs under `practice/src/sqls` to pass the tests. You should follow the instructions in the `.sql` file.