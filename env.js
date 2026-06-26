/**
 * Tifty AI — Client-Side Environment Configuration
 * --------------------------------------------------
 * This file exposes environment variables to the browser.
 * Replace the placeholder URL with your actual webhook endpoint
 * (n8n, Zapier, Make, etc.)
 *
 * ⚠️  DO NOT commit this file to public repositories.
 *     Add env.js to your .gitignore.
 */
window.__ENV__ = {
    WEBHOOK_URL: "https://your-webhook-url.example.com/audit"
};
