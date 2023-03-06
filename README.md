### Pull image from docker hub

```
docker pull marinakharchenko/node-web-app
```

### Run container

```
docker run -p 80:80 --memory="512m" --cpus="0.5" marinakharchenko/node-web-app
```

### Check if the app is working

```
curl http://localhost:80
```