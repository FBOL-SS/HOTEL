# 🏨 Hotel San Ignacio Inn — Landing Page

Landing page de conversión para **Hotel San Ignacio Inn**, ubicado en Torreón, Coahuila.  
Desarrollada en **Next.js 14 + TypeScript + Tailwind CSS**.  
Orientada a generar reservas directas por WhatsApp.

---

## 📁 Estructura de carpetas

```
hotel-san-ignacio-inn/
├── public/                    → Imágenes, favicon
├── src/
│   ├── app/
│   │   ├── globals.css        → Estilos globales, variables CSS
│   │   ├── layout.tsx         → Layout raíz, metadata SEO
│   │   └── page.tsx           → Página principal (ensambla secciones)
│   ├── components/
│   │   ├── Header.tsx         → Navbar fija con menú responsive
│   │   ├── Hero.tsx           → Sección hero principal
│   │   ├── Benefits.tsx       → Cards de beneficios (6 íconos)
│   │   ├── Rooms.tsx          → 3 tipos de habitación con CTA
│   │   ├── DirectBook.tsx     → Por qué reservar directo
│   │   ├── Services.tsx       → Grid de servicios del hotel
│   │   ├── Location.tsx       → Dirección + Google Maps
│   │   ├── Testimonials.tsx   → 3 testimonios + barra social proof
│   │   ├── FinalCTA.tsx       → CTA final de conversión
│   │   ├── Footer.tsx         → Pie de página completo
│   │   └── WhatsAppFloat.tsx  → Botón flotante de WhatsApp
│   └── lib/
│       └── constants.ts       → Datos del hotel, links, teléfono
├── next.config.js             → Configuración Next.js (export estático)
├── tailwind.config.js         → Tema personalizado del hotel
├── tsconfig.json
└── package.json
```

---

## 🚀 Correr en local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🏗️ Build para producción

```bash
npm run build
```

Genera la carpeta `/out` con el sitio estático listo para subir.

---

## ☁️ Subir a GitHub y desplegar en Vercel

### 1. Crear repositorio en GitHub

```bash
git init
git add .
git commit -m "feat: landing hotel san ignacio inn"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/hotel-san-ignacio-inn.git
git push -u origin main
```

### 2. Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New Project"**.
3. Selecciona el repositorio `hotel-san-ignacio-inn`.
4. Vercel detectará automáticamente que es Next.js.
5. Haz clic en **"Deploy"**.

En 2-3 minutos tendrás la URL pública, por ejemplo:  
`https://hotel-san-ignacio-inn.vercel.app`

### 3. (Opcional) Conectar dominio propio

En Vercel → Settings → Domains → Agrega `hotelsanignacioinn.com` o el dominio que tengas.

---

## ✏️ Cómo personalizar

### Cambiar teléfono o número de WhatsApp
Edita `src/lib/constants.ts`:
```ts
export const HOTEL = {
  phone: '+52 871 268 1366',
  phoneRaw: '528712681366',   // Sin espacios ni +
  ...
}
```

### Agregar imágenes reales
Coloca las fotos del hotel en `/public/images/`:
- `hero.jpg` — Foto principal del hotel (1920×1080 mínimo)
- `habitacion-sencilla.jpg`
- `habitacion-doble.jpg`
- `habitacion-familiar.jpg`
- `alberca.jpg`
- `restaurante.jpg`

Luego en `Hero.tsx`, reemplaza el gradiente por:
```tsx
<Image src="/images/hero.jpg" alt="Hotel San Ignacio Inn" fill className="object-cover" />
```

### Agregar logo real
Coloca el archivo en `/public/logo.png` y en `Header.tsx` reemplaza el texto por:
```tsx
<Image src="/logo.png" alt="Hotel San Ignacio Inn" width={160} height={48} />
```

### Cambiar colores
Edita `tailwind.config.js` → sección `colors`:
- `navy` — Azul marino principal
- `gold` — Dorado acento
- `cream` — Fondo claro

---

## 📱 Características técnicas

- ✅ **Mobile-first** — diseñado primero para móvil
- ✅ **Export estático** — no requiere servidor
- ✅ **SEO** — metadata completa en `layout.tsx`
- ✅ **Botón flotante** de WhatsApp en todas las páginas
- ✅ **Sin backend** — 100% frontend estático
- ✅ **Sin dependencias pesadas** — solo Next.js, Tailwind y Lucide

---

## 📞 Datos del hotel

- **Nombre:** Hotel San Ignacio Inn
- **Dirección:** Carretera Santa Fe, Roberto Fierro Km 75, Ignacio Allende, 27400 Torreón, Coah.
- **Teléfono:** +52 871 268 1366
- **WhatsApp:** https://wa.me/528712681366

---

_Landing desarrollada para maximizar reservas directas y reducir dependencia de OTAs._
