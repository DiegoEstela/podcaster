# PodCaster

[screen-capture (6).webm](https://user-images.githubusercontent.com/83254494/224710991-bc32c6d2-85db-403c-92c7-1e2cabdb0a81.webm)

## Herramientas:

En este proyecto se utilizaron las siguientes herramientas:

- ReactJs 18.
- TypeScript
- Style component
- Axios 
- React-query
- Vercel

## Para comenzar

Deberemos clonar el repositorio e instalar sus dependencias. Para esto, es necesario tener instalado [git], luego, para instalar las depedencias es necesario tener un gestor como [npm] o [yarn] y [node].

### Clonar el repositorio

Ejecutar el siguiente comando:

```
git clone https://github.com/DiegoEstela/podcaster.git
```

### Instalar dependencias:

```
yarn install
```
o
```
npm install
```
## Ejecución de la aplicación

### Modo desarrollo BRANCH NEXT

Una vez instaladas las dependecias debemos movernos a la rama NEXT, la cual es la rama de desarrollo y ejecutar el comando:
```
yarn dev
```
Este comando correrá el proyecto de forma local, dejándonos ver en pantalla las opciones de desarrollador de react-query, en las cuales se visualizarán todas las peticiones hechas a la api y el manejo de caché. 
Todos los cambios que se efectúen en esta rama no se verán reflejados en producción y, por lo tanto, no se deployarán automaticamente.


### Modo producción BRANCH MAIN (rama protegida)

Esta rama está conectada a [vercel], la misma tiene un buil automático, por lo que para llevar nuestros cambios a producción debemos hacer nuestros commits en NEXT y, luego, generar una pull request de NEXT A MAIN. Una vez aprobada esta PR, se mergea a MAIN y se deploya automaticamente en este dominio:
https://podcaster-amber.vercel.app/

## Tecnologías aplicadas:

Para esta Single Page Application utilicé React debido a sus beneficios a la hora de manejar las rutas con su bibloteca de enrutado "React Router", de esta manera, logramos urls limpias y evitamos el refetching.
Por otra parte, se utilizó StyleComponent para la estilización de la app, siguiendo el diseño solicitado. Con dicha herramienta, evitamos el solapado de clases debido a que cada componente posee un id único.
Por último, se utilizó react-query para el manejo de peticiones y caché. Esta se configuró anulando cualquier tipo de refetch, con un staleTime infinito logrando que la data permanezca fresca y, de esta manera, no se efectúen llamadas automáticas. Se dispuso el cacheTime en 1 día, que mantiene la data en cache por 24hs borrándola luego de ese tiempo si la misma no se utiliza.


[git]: https://git-scm.com
[npm]: https://www.npmjs.com
[yarn]: https://yarnpkg.com
[node]:https://nodejs.org/en
[vercel]: https://vercel.com/
