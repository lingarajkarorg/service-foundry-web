# Service Foundry Web

A modern, responsive web application for the Service Foundry platform, built with React, TypeScript, Material-UI, and Toolpad Core.

## Features

- **Dashboard Layout**: Professional dashboard style using `@toolpad/core`.
- **Dynamic Theming**: Configurable primary colors and mode via JSON.
- **Internationalization**: English and Korean support.
- **Comprehensive Foundry Modules**: Pages for Infra, SSO, Observability, and more.

## Configuration

The application theme and settings can be configured without recompiling by editing `public/config.json`.

```json
{
    "theme": {
        "primaryColor": "#007FFF",
        "mode": "light"
    }
}
```

### Theme Color Suggestions

You can change the `primaryColor` to match your brand or preference. Here are some recommended values:

| Style | Hex Code | Description |
| :--- | :--- | :--- |
| **Default Blue** | `#007FFF` | A vibrant, professional blue (Azure). |
| **Greenish** | `#009688` | A modern Teal, great for sustainability or growth themes. |
| **Orangeish** | `#ED6C02` | A warm Orange, suitable for energy or warnings. |
| **Deep Purple** | `#673AB7` | A rich, creative purple. |

## Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Locally**:
   ```bash
   npm run dev
   ```

3. **Build**:
   ```bash
   npm run build
   ```
