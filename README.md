# Front Page 20 Nov 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/alfajri14092002-a11y/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/alfajri14092002-a11y/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A one-image front page summing up world news from **Friday, 20 November 2026**,
for the [make.fun](https://make.fun/bounty/news-image-20261120) bounty "Sum up 20 November's world news in one image"
(`news-image-20261120`).

## The image

`entry.png` (1024×1024, 248,689 bytes) is a hand-built newspaper front page:
"The Front Page", dated Friday, 20 November 2026. It shows **34 verified stories**
from every region, drawn and written from real reporting of the day:

- **Lead:** the EU–UK summit opens in Brussels — PM Andy Burnham meets
  Ursula von der Leyen and António Costa at the second post-Brexit summit.
- **Markets:** Wall Street slides 2% as the AI rally fades (Dow −2.19%,
  S&P 500 −2.02%, Nasdaq −2.25%); Anthropic's record $81bn IPO debuts
  (opened $111.50, closed $97.17, +17.1%).
- **Drawn stories:** students walk out across Europe; Cyclone Akvan bears
  down on Odisha (80,000 evacuated); Glenn Phillips' 118 puts New Zealand
  on top in Wellington.
- **World in brief (28 more):** GTA VI: The Album out today; the US Army's
  planned detonation of unstable explosives in Iowa; Florida flooding shuts
  schools; Haiti police kill 34 suspected gang members; the LA Sparks' near
  $750m WNBA-record sale; Gaza, Syria, Lebanon, Yemen and King Charles's
  message to Palestinians; Zelenskyy on Trump and Xi; the SCO dialogue forum
  in Delhi; BepiColombo's first images; Euclid's 31 ancient quasars; South
  Sudan postpones its first elections; the four-nation anti-terror pact;
  COP31; gold and Bitcoin; Dangote's IPO; and more.

Every story was verified against reporting published on 20 November 2026
(Reuters, AP, AFP, Le Monde, Arab News, The Hindu BusinessLine, Des Moines
Register and others). Sources are credited in the image footer. All
illustrations are simple drawn scenes — no photos, no real logos.

## How it was made

`front-page.html` is a self-contained page (inline CSS, inline SVG scenes,
no external resources). It was rendered to `entry.png` with headless
Chromium at 1024×1024. Reproduce it with:

```sh
chromium --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1024,1024 --screenshot=entry.png file://$PWD/front-page.html
```

## The program

`main.ts` (Node 22) copies the bundled `entry.png` to the harness output
directory (`$MAKEFUN_OUTPUT_DIR`, default `/output/entry.png`). The copy is
byte-for-byte, so the output is deterministic and uses no network at run time.

## License

MIT. See `LICENSE`.
