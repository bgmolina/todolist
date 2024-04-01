<a href="README.md">
  <img
    align="right"
    src="https://img.shields.io/badge/Inicio-161b22?style=for-the-badge&logoColor=white&logo=github"
    alt="Inicio"
  />
</a>

# Lista de tareas 🗒️
<div>
  <a href="https://docs.docker.com/compose/" target="_blank">
    <img
      src="https://img.shields.io/badge/v2.24.6-gray?style=flat&logo=docker&logoColor=white&label=Docker Compose&labelColor=46a2f1"
      alt="Docker compose"
    />
  </a>
  <a href="https://nginx.org/en/docs/" target="_blank">
    <img
      src="https://img.shields.io/badge/v1.23.3-gray?style=flat&logo=nginx&logoColor=white&label=Nginx&labelColor=009639"
      alt="Nginx"
    />
  </a>
  <a href="https://nodejs.org/en/" target="_blank">
    <img
      src="https://img.shields.io/badge/v18.14.2-gray?style=flat&logo=node.js&logoColor=white&label=Node.js&labelColor=43853D"
      alt="Node Js"
    />
  </a>
  <a href="https://reactjs.org/" target="_blank">
    <img
      src="https://img.shields.io/badge/-v18.1.0-gray?style=flat&logo=react&label=React&labelColor=20232a"
      alt="React"
    />
  </a>
</div>

### Requisitos previos 📝
- Docker Compose **versión 2.x**
- Ejecutar bash desde la carpeta **docker**

#### Puertos habilitados
- [**3002**](http://localhost:3002) para desarrollo
- [**4002**](http://localhost:4002) para producción

#### Menu de opciones 📋
```bash
$ bash deployment.sh
```
```bash
==============
 To do list 🗒️
==============
1) Deploy on development mode 🛠
2) Delete on development mode 🗑️
3) Deploy on production mode 🚀
4) Delete on production mode 🗑️
5) Quit 👋
Select an option and press Enter 👆: 
```

### Demo 🎬
<img width="500" src="./demo/docker.gif"/>

## Información relevante 📑
### Image
```bash
$ docker images
```
| REPOSITORY      | TAG                | SIZE   |
| --------------- | ------------------ | ------ |
| node            | 18.14.2-alpine3.17 | ~174MB |
| todolist        | 1.0.0              | ~41MB  |

### Container
```bash
$ docker ps
```
| NAME            | PORTS                  |
| --------------- | ---------------------- |
| todolist        | 0.0.0.0:3002->3000/tcp |
| todolist-prod   | 0.0.0.0:4002->80/tcp   |
