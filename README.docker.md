<a href="README.md">
  <img
    align="right"
    src="https://img.shields.io/badge/Inicio-161b22?style=for-the-badge&logoColor=white&logo=github"
    alt="Inicio"
  />
</a>

# List de tareas 🗒️
<div>
  <a href="https://ubuntu.com/wsl" target="_blank">
    <img
      src="https://img.shields.io/badge/v22.04.2-gray?style=flat&logo=ubuntu&logoColor=white&label=WSL 2&labelColor=e95420"
      alt="WSL 2 Ubuntu"
    />
  </a>
  <a href="https://www.docker.com/" target="_blank">
    <img
      src="https://img.shields.io/badge/v23.0.1-gray?style=flat&logo=docker&logoColor=white&label=Docker&labelColor=46a2f1"
      alt="Docker"
    />
  </a>
  <a href="https://docs.docker.com/compose/" target="_blank">
    <img
      src="https://img.shields.io/badge/v2.16.0-gray?style=flat&logo=docker&logoColor=white&label=Docker Compose&labelColor=46a2f1"
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
  <a href="https://www.npmjs.com/" target="_blank">
    <img
      src="https://img.shields.io/badge/v9.5.0-gray?style=flat&logo=npm&label=npm&labelColor=cb0000"
      alt="Npm"
    />
  </a>
  <a href="https://pages.github.com/" target="_blank">
    <img
      src="https://img.shields.io/badge/v4.0.0-gray?style=flat&logo=github&label=gh-pages&labelColor=161b22"
      alt="GitHub Page"
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
- Ejecutar comandos en **root** del proyecto

#### Variables de entorno
Configurar variables del proyecto en archivo **.env**
```bash
# development
DEV_APP_NAME="todolist-app-dev" # Nombre app
DEV_APP_VERSION=1.0.0 # Versión app
DEV_APP_PORT=3000 # Puerto FrontEnd

# production
PROD_APP_NAME="todolist-app-prod"
PROD_APP_VERSION=1.0.0
PROD_APP_PORT=3001
```

## Docker Compose ![](./public/img/docker-compose.webp)
### Desarrollo ⛏️
```bash
$ docker compose up -d
```

### Demo 🎬
<img width="500" src="./demo/dev-docker-compose.gif"/>

### Comandos Útiles 🔧
Acceder a directorio de contenedor
```bash
$ docker compose exec todolist-app-dev sh
```
Remueve contenedor/red
```bash
$ docker compose down
```
Logs de contenedor
```bash
$ docker compose logs todolist-app-dev
```

---

### Producción con Nginx ⚙️
```bash
$ docker compose -f docker-compose.prod.yml up -d
```

### Demo 🎬
<img width="500" src="./demo/prod-docker-compose.gif"/>

### Comandos Útiles 🔧
Acceder a directorio de contenedor
```bash
$ docker compose exec todolist-app-prod sh
```
Remueve contenedor/red
```bash
$ docker compose -f docker-compose.prod.yml down
```
Logs de contenedor
```bash
$ docker compose -f docker-compose.prod.yml logs todolist-app-prod
```

## Comandos Docker ![](./public/img/terminal.png)
### Desarrollo ⛏️
```bash
$ docker build -t todolist-app-dev:1.0.0 .
```
```bash
$ docker volume create todolist-app-dev
```
```bash
$ docker run -d --name todolist-app-dev -p 3000:8080  \
--mount type=bind,source="$(pwd)",target=/app  \
--mount type=volume,source=todolist-app-dev,target=/app/node_modules  \
todolist-app-dev:1.0.0
```

### Demo 🎬
<img width="500" src="./demo/dev-docker-command.gif"/>

### Comandos Útiles 🔧
Acceder a directorio de contenedor
```bash
$ docker exec -it todolist-app-dev sh
```
Logs de contenedor
```bash
$ docker logs todolist-app-dev
```

---

### Producción con Nginx ⚙️
```bash
$ docker build -t todolist-app-prod:1.0.0 -f Dockerfile.prod .
```
```bash
$ docker run -d --restart always --name todolist-app-prod -p 3001:80 todolist-app-prod:1.0.0
```

### Demo 🎬
<img width="500" src="./demo/prod-docker-command.gif"/>

### Comandos Útiles 🔧
Acceder a directorio de contenedor
```bash
$ docker exec -it todolist-app-prod sh
```
Logs de contenedor
```bash
$ docker logs todolist-app-prod
```


## Información relevante 📑
### Imagen
```bash
$ docker images
```
| REPOSITORY        | TAG   | SIZE   |
| ----------------- | ----- | ------ |
| todolist-app-dev  | 1.0.0 | 488MB  |
| todolist-app-prod | 1.0.0 | 41.3MB |

### Volumen
```bash
$ docker volume ls
```
| DRIVER | VOLUME NAME      |
| ------ | ---------------- |
| local  | todolist-app-dev |

### Red
```bash
$ docker network ls
```
| NAME              | DRIVER | SCOPE |
| ----------------- | ------ | ----- |
| todolist-app-dev  | bridge | local |
| todolist-app-prod | bridge | local |

### Contenedor
```bash
$ docker compose ps
```
| NAME              | IMAGE                   | SERVICE           | PORTS                                     |
| ----------------- | ----------------------- | ----------------- | ----------------------------------------- |
| todolist-app-dev  | todolist-app-dev:1.0.0  | todolist-app-dev  | 0.0.0.0:3000->8080/tcp, :::3000->8080/tcp |
| todolist-app-prod | todolist-app-prod:1.0.0 | todolist-app-prod | 0.0.0.0:3001->80/tcp, :::3001->80/tcp     |

