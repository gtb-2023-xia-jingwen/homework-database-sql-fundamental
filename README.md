# Introduction

在本次 homework 中，你需要通过所有的测试。首先，需要准备本地的数据库环境。

## 环境准备

### 启动数据库

1. 运行 Docker Desktop 软件（Linux 系统请启动 docker-engine 服务）
1. 运行数据库启动脚本
    ```
    ./start-mysql-from-docker.sh
    ```

### 安装项目依赖

在项目根目录下运行 `npm install` 来安装依赖

## 通过所有测试

在目录 `src/sqls` 下的所有 SQL 文件中完成 SQL 语句的编写（编写 SQL 语句时，请参照文件中的介绍），使得所有的测试可以通过。运行所有测试的命令如下所示
```
npm test
```

### 注意事项

完成编码并提交后，可以运行数据库停止脚本，释放资源。命令如下所示
```
./stop-mysql-from-docker.sh
```
