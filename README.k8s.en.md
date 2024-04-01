<a href="README.md">
  <img
    align="right"
    src="https://img.shields.io/badge/Inicio-161b22?style=for-the-badge&logoColor=white&logo=github"
    alt="Inicio"
  />
</a>

# To do list 🗒️

### Previous requirements 📝
- [**Microk8s**](https://microk8s.io/docs/getting-started)
- Run bash from the **kubernetes** folder

#### Enabled port
- [**30002**](http://localhost:30002)

#### Options menu 📋
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
<img width="500" src="./demo/kubernetes.gif"/>

## Important information 📑
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
