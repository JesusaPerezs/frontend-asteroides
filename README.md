# 🛸 Asteroid Tracker — Frontend

> Monitor visual de asteroides cercanos a la Tierra con datos reales de la NASA.

[🚀 Ver app en vivo](https://frontend-asteroides.vercel.app) · [⚙️ Backend / API](aquí-va-el-link-de-tu-otro-repo)

---

## 🌌 Qué es esto


Nació de mi fascinación por el espacio, los planetas y los asteroides. Es un
monitor visual que consulta datos reales de la NASA sobre asteroides cercanos a
la Tierra, los organiza por sus métricas (tamaño, velocidad, distancia,
peligrosidad) y los guarda en una base de datos PostgreSQL. También trae la
**Foto del Día** de la NASA (APOD), todo mientras de fondo giran la Tierra,
Júpiter y Saturno con sus anillos. 🪐

## 🛠️ Tecnologías

- **React + Vite** — interfaz y build rápido
- **Tailwind CSS** — estilos (diseño HUD oscuro estilo SpaceX)
- **Three.js** — render 3D de los planetas girando (Tierra, Júpiter, Saturno)
- **Vercel** — hosting del frontend
- **Fetch API** — consumo de mi propio backend (FastAPI en Cloud Run)

## 📸 Pantallas

| Asteroides | Métricas | Foto del Día |
|:---:|:---:|:---:|
| Pantalla de asteroides | Métricas | Foto del día |


## ✨ Features

- 🌍 **Planetas 3D girando** de fondo (Tierra, Júpiter y Saturno con anillos), con un componente `Planeta.jsx` reutilizable
- ☄️ **Lista de asteroides** cercanos con sus datos reales de la NASA
- 📊 **Métricas** calculadas sobre los asteroides (tamaño, velocidad, distancia, peligrosidad)
- 🖼️ **Foto del Día** de la NASA (APOD) con su explicación
- 🎨 **Diseño HUD oscuro** estilo SpaceX (fuente Exo 2, botones neón, efectos glow)

## 🔭 Roadmap

- [ ] Animación de un asteroide cruzando la pantalla en la vista de lista
- [ ] Vista de detalle por asteroide (`/asteroides/:id`)
- [ ] Filtros dentro de la lista de asteroides
- [ ] PWA para instalar la app en el celular

## 🧠 Qué aprendí

Este proyecto fue mi primer full-stack de verdad. Los retos más grandes:
Three.js desde cero para renderizar planetas en 3D, diseñar un componente
reutilizable en lugar de repetir código para cada planeta, y conectar el
frontend con mi propio backend en producción. Vengo de analítica de datos,
así que fue mi salto hacia el desarrollo de software.

## 📸 Pantallas

| Asteroides | Métricas | Foto del Día |
|:---:|:---:|:---:|
| ![Pantalla de asteroides](./public/screenshots/asteroides.png) | ![Métricas](./public/screenshots/metricas.png) | ![Foto del día](./public/screenshots/foto.png) |

## ✨ Features

- 🌍 **Planetas 3D girando** de fondo (Tierra, Júpiter y Saturno con anillos), con un componente `Planeta.jsx` reutilizable
- ☄️ **Lista de asteroides** cercanos con sus datos reales de la NASA
- 📊 **Métricas** calculadas sobre los asteroides (tamaño, velocidad, distancia, peligrosidad)
- 🖼️ **Foto del Día** de la NASA (APOD) con su explicación
- 🎨 **Diseño HUD oscuro** estilo SpaceX (fuente Exo 2, botones neón, efectos glow)

## ⚙️ Correr localmente

​```bash
# Clonar e instalar
git clone https://github.com/JesusaPerezs/frontend-asteroides.git
cd frontend-asteroides
npm install

# Correr en modo desarrollo
npm run dev
​```

> Si conectas tu propio backend, agrega un archivo `.env` con la URL de tu API
> (por ejemplo `VITE_API_URL`). El `.env` no se sube al repo.

## 🔭 Roadmap

- [ ] Animación de un asteroide cruzando la pantalla en la vista de lista
- [ ] Vista de detalle por asteroide (`/asteroides/:id`)
- [ ] Filtros dentro de la lista de asteroides
- [ ] PWA para instalar la app en el celular

## 🧠 Qué aprendí

Este proyecto fue mi primer full-stack de verdad. Los retos más grandes:
Three.js desde cero para renderizar planetas en 3D, diseñar un componente
reutilizable en lugar de repetir código para cada planeta, y conectar el
frontend con mi propio backend en producción. Vengo de analítica de datos,
así que fue mi salto hacia el desarrollo de software.

## 🙏 Créditos

- Texturas de planetas: [Solar System Scope](https://www.solarsystemscope.com/textures/) (CC-BY 4.0)
- Datos de asteroides y foto del día: [NASA Open APIs](https://api.nasa.gov/)