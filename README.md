# 🍯🍓 AI Jam #1

Forkni si tento repozitář a postupuj podle návodů níže.

## Jak začít

```bash
git clone <tvůj-fork-url>
cd aijam1
npm install
npm run dev
```

## Setup nástrojů

| Nástroj | Návod |
|---------|-------|
| Google Stitch MCP | [docs/guides/stitch.md](docs/guides/stitch.md) |
| Playwright CLI + Skills | [docs/guides/playwright.md](docs/guides/playwright.md) |

## Projekty pro Stitch - Příklady

Vyber si jeden z připravených promptů a vlož ho do Google Stitch:

- [Presentační web](docs/projects/presentacni-web.md) — kreativní studio "Atelier Luma"
- [Itinerář výletu](docs/projects/itinerar-vyletu.md) — třídenní výlet po jižní Moravě
- [Ukázka produktu](docs/projects/ukazka-produktu.md) — chytrá termoska "ThermoSync"

## Skills

Zkopíruj si skill do svého projektu:

| Skill | Popis | Soubor |
|-------|-------|--------|
| `/update-docs` | Vygeneruje AGENTS.md z codebase | [docs/skills/update-docs/SKILL.md](docs/skills/update-docs/SKILL.md) |

Kam zkopírovat: `.claude/skills/update-docs/SKILL.md` ve tvém projektu.

## Prompty

- [Update AGENTS.md](docs/prompts/update-docs.md) — prompt pro aktualizaci dokumentace projektu

## Příkazy

| Příkaz | Co dělá |
|--------|---------|
| `npm run dev` | Spustí dev server |
| `npm run build` | Type-check + build |
| `npm run lint` | ESLint |
| `npm run preview` | Náhled produkčního buildu |
