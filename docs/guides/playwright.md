# Playwright CLI + Skills

Playwright CLI umožňuje AI agentům ovládat prohlížeč přímo z příkazové řádky. Pro kódovací agenty je doporučený přístup **CLI + Skills** (token-efektivnější než MCP).

Repozitář: https://github.com/microsoft/playwright-cli

## Instalace CLI

```bash
npm install -g @playwright/cli@latest
```

Nebo bez globální instalace:

```bash
npx @playwright/cli@latest --help
```

## Instalace Skills

Skills naučí agenta používat Playwright CLI automaticky — fungují v Claude Code i VS Code Copilot:

```bash
playwright-cli install --skills
```

Tento příkaz nainstaluje skill soubory do `.claude/skills/` (Claude Code) a `.github/copilot/skills/` (VS Code Copilot).
