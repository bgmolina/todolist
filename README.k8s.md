<a href="README.md">
  <img
    align="right"
    src="https://img.shields.io/badge/Inicio-161b22?style=for-the-badge&logoColor=white&logo=github"
    alt="Inicio"
  />
</a>

# Lista de tareas 🗒️

### Requisitos previos 📝
- [**Microk8s**](https://microk8s.io/docs/getting-started)
- Ejecutar bash desde la carpeta **kubernetes**

#### Puerto habilitado
- [**30002**](http://localhost:30002)

#### Menu de opciones 📋
```bash
$ bash deployment.sh
```
```bash
==============
 To do list 🗒️
==============
1) Deploy service 🚀
2) Delete service 🗑️
3) Port forward website 🌐
5) Quit 👋
Select an option and press Enter 👆: 
```
### Demo 🎬
<!-- <img width="500" src="./demo/kubernetes.gif"/> -->

## Información relevante 📑
### Deployment
```bash
$ kubectl get deployment -n web
```
| NAME       | IMAGES                   |
| ---------- | ------------------------ |
| todolist   | bgmolina/todolist:latest |


### Service
```bash
$ kubectl get services -n web
```
| NAME           | TYPE     | PORT(S)      |
| -------------- | -------- | ------------ |
| todolist-svc   | NodePort | 80:30002/TCP |
