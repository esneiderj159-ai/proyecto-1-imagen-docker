# Proyecto 1 — Imagen Docker

API REST de productos empaquetada en una imagen Docker propia.

## Descripción

Tienda virtual que expone una API REST de productos. La aplicación se ejecuta en cualquier computador sin instalar Node.js gracias a Docker.

## Tecnologías

- Node.js + Express
- Docker

## Conceptos evaluados

- Diferencia entre imagen y contenedor
- Dockerfile completo (FROM, WORKDIR, COPY, RUN, EXPOSE, CMD)
- Ciclo de vida de contenedores
- Uso de `.dockerignore`

## Requisitos

- Docker instalado y en ejecución

## Endpoints

| Método | Ruta              | Descripción              |
|--------|-------------------|--------------------------|
| GET    | /health           | Health check             |
| GET    | /productos        | Listar todos             |
| GET    | /productos/:id    | Obtener uno              |
| POST   | /productos        | Crear                    |
| PUT    | /productos/:id    | Actualizar               |
| DELETE | /productos/:id    | Eliminar                 |

## Instrucciones de construcción y ejecución

### 1. Construir la imagen

```bash
docker build -t api-productos:1.0 .
```

### 2. Ejecutar el contenedor en segundo plano (puerto 3000)

```bash
docker run -d --name api-productos -p 3000:3000 api-productos:1.0
```

### 3. Verificar que está corriendo

```bash
docker ps
```

### 4. Probar los endpoints con curl

```bash
# Listar
curl http://localhost:3000/productos

# Obtener uno
curl http://localhost:3000/productos/1

# Crear
curl -X POST http://localhost:3000/productos \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Monitor","precio":300,"stock":10}'

# Actualizar
curl -X PUT http://localhost:3000/productos/1 \
  -H "Content-Type: application/json" \
  -d '{"precio":1100}'

# Eliminar
curl -X DELETE http://localhost:3000/productos/2
```

### 5. Ver logs del contenedor

```bash
docker logs api-productos
```

### 6. Ciclo de vida (detener y eliminar)

```bash
docker stop api-productos
docker rm api-productos
# Opcional: eliminar la imagen
docker rmi api-productos:1.0
```

## Evidencias (para entregar)

1. Captura de `docker ps` mostrando el contenedor en ejecución.
2. Salidas de curl de los 5 endpoints funcionando.
3. Captura de `docker logs api-productos`.

## Diferencia imagen vs contenedor (resumen)

- **Imagen**: plantilla inmutable (como una foto). Se construye con `docker build`.
- **Contenedor**: instancia en ejecución de una imagen (como un proceso vivo). Se crea con `docker run`.

## Versionado Git

```bash
git init
git add .
git commit -m "feat: API REST de productos con Express"
git commit -m "chore: agregar Dockerfile alpine y .dockerignore"
git branch -M main
git remote add origin <tu-repo>
git push -u origin main
```
//proyecto 1 erick snneider jimenez lopez
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)
![alt text](image-6.png)

////////////////////////////////
//proyecto 2
![alt text](image-7.png)
![alt text](image-8.png)
![alt text](image-9.png)
![alt text](image-10.png)
![muestra de que los volumenes funcinan](image-10.png)
![alt text](image-11.png)
![alt text](image-12.png)

////////////////////////////////////
proyecto 3
![alt text](image-13.png)
![alt text](image-14.png)
![alt text](image-15.png)
![alt text](image-16.png)
![alt text](image-17.png)
![alt text](image-18.png)
![alt text](image-19.png)
![alt text](image-20.png)
![alt text](image-21.png)

![alt text](image-22.png)

