# Prueba técnina - ZOCO

Prueba técnica desarrollada para la empresa **ZOCO**, construida con **React**, **Vite** y **Tailwind CSS**. Se trata de una plataforma de gestión de usuarios con funcionalidades distintas según el rol del usuario (admin o client).

## Demo
[Enlace del proyecto en producción](https://zocotechnicaltest.netlify.app)


## Tecnologías y caracteristicas

**React** + **Vite**
**Javascript** como lenguaje principal
**Tailwind CSS** para estilos personaizados
**React Context API** para gestión global de estado
**sessionStorage** para gestión y autenticacion del usuario
**React Router DOM** para navegación entre rutas
**API Mock** simulación de peticiones a una 
**Diseño responsivo** Para una correcta visualización en dispositivos mobiles

## Funcionalidades
- *Login*
  1- Formulario de autenticación con email y password
  2- Simulación de autenticación contra una API mock
  3- Almacenamiento de token en "sessionStorage"
  4- Redirección al dashboard

- *DASHBOARD*
-Ruta protegida
**ADMIN**
  1- Visualización de todos los usuarios
  2- Acceso a los datos personales y relacionados de todos los usuarios
  3- Registro y edición de usuarios y sus datos relacionados
**CLIENT**
  1- Visualización de sus datos personales y relacionados (estudios y direcciones)
  2- Edición de sus datos personales y relacionados

## CONTEXT
Estados globales con:
  1- Token de session
  2- usuario logueado
  3- rol de usuario
  4-isAuthenticated
  5- funciones de login y logout

## ⚙️ Instalación local

# Clonar repositorio
git clone https://github.com/dante-sarmiento/technicalTestZoco.git

## Acceder al proyecto
cd technicalTestZoco

# Una vez ingresado al proyecto
npm install

# Correr el proyecto
npm run dev

# Visualizar estilos de tailwind en el momento
npx tailwindcss -i ./src/styles/globals.css -o ./src/styles/global.css --watch


## USUARIOS DE PRUEBA ##
*Email*                              *Contraseña*             *Rol*
1- dantesarmiento@admin.com           dante123                 Admin
2- emilianomartinez@admin.com         emiliano123              Admin
3- carlosruiz20@admin.com             carlos123                Admin
4- mariagonzalez@client.com           maria123                 Client
5- pedroperez@user.com                pedro123                 Client
6- sofiasanchez@user.com              sofia123                 Client
