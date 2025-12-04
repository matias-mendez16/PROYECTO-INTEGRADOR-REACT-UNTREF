# PLANMIX - Cotizador de Planes

PLANMIX es una aplicación web que permite **cotizar planes de TV, WiFi y Telefonía móvil** con descuentos especiales. Facilita la comparación y contratación de servicios de TV, WiFi y Móvil en un solo lugar, ofreciendo descuentos por combinación de planes y una experiencia intuitiva para el usuario.  
Incluye una **tabla comparativa de precios**, opciones para seleccionar planes, y un **formulario de usuario** que al enviarse muestra un mensaje con todos los datos ingresados junto con el detalle del plan y el precio final.

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar el proyecto en modo desarrollo
npm run dev
```

# Estructura de Carpetas 
PLANMIX/
├─ public/
│  └─ Favicon PLANMIX.png
│  └─ Logo PLANMIX con nombre.png
│
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  └─ components/
│     ├─ UserForm.jsx
│     ├─ ServiceOptions.jsx
│     ├─ QuoteResult.jsx
│     └─ ComparisonTable.jsx
│
└─ package.json


## 📝 Descripción del Proyecto

PLANMIX es una aplicación web interactiva que permite a los usuarios **cotizar planes de TV, WiFi y Telefonía móvil** de manera sencilla y rápida.  
El sistema está diseñado para ofrecer una experiencia clara y amigable, integrando las siguientes funcionalidades:

- 📊 **Tabla Comparativa de Precios**: muestra de forma organizada los distintos planes disponibles en cada servicio (TV, WiFi y Móvil).
- ✅ **Selección de Planes**: el usuario puede elegir entre varias opciones de cada categoría.
- 💰 **Aplicación de Descuentos Automáticos**:  
  - 10% de descuento al seleccionar 2 planes.  
  - 20% de descuento al seleccionar los 3 planes.
- 🧾 **Resumen de Cotización**: se calcula el subtotal, el descuento aplicado y el total a pagar.
- 🖊️ **Formulario de Usuario**: permite ingresar datos personales y elegir el medio de pago.
- 📩 **Mensaje Final**: al enviar el formulario, se muestra un resumen con los datos del usuario, los planes seleccionados y el precio final.

