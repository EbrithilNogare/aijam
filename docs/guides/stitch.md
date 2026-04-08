# Google Stitch – MCP server setup

Oficiální dokumentace: https://stitch.withgoogle.com/docs/mcp/setup

## Claude Code

```bash
claude mcp add stitch --transport http https://stitch.googleapis.com/mcp --header "X-Goog-Api-Key: api-key" -s project

```

## VS Code copilot

Přidej do `.vscode/mcp.json`:

```json
{
  "servers": {
    "stitch": {
      "url": "https://stitch.googleapis.com/mcp",
      "type": "http",
      "headers": {
        "Accept": "application/json",
        "X-Goog-Api-Key": "YOUR-API-KEY"
      }
    }
  }
}
```

Případně otevři Command Palette (`Cmd+Shift+P`) → **MCP: Add Server** a zadej údaje ručně.
