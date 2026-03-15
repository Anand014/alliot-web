# LifeKit Web

React 18 + TypeScript + Vite + Tailwind. Consumes LifeKit backend API.

- **Structure:** `src/api/`, `src/components/`, `src/hooks/`, `src/pages/`, `src/stores/`, `src/types/`, `src/utils/`
- **API:** Base client in `src/api/client.ts`; add per-module files (e.g. `money.ts`). Types in `src/types/` aligned with backend/OpenAPI.
- **Dev:** `npm run dev` — proxy to backend at `http://localhost:8000` for `/api`.

Set `VITE_API_URL` to full backend URL if not using proxy.
# alliot-web
