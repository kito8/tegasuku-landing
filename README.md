# tegasuku-landing

macOS アプリ **[tegasuku](https://github.com/kito8/tegasuku-releases)** のダウンロード LP。

tegasuku は Zoom・Teams の説明会で共有されるスライドが切り替わった瞬間を自動でキャプチャし、PDF にまとめる Mac アプリ。画像は端末内（`~/Documents/ZoomCapture/`）にのみ保存され、外部送信は一切ない。アプリ本体のソースは非公開で、配布は [tegasuku-releases](https://github.com/kito8/tegasuku-releases) の Releases から行う。

このリポジトリは LP のみを含む（アプリのコードは入っていない）。

## 技術構成

| 項目 | 内容 |
| --- | --- |
| フレームワーク | Astro 7（静的出力・アダプタなし・JS アイランドなし） |
| スタイル | Tailwind CSS v4（`@tailwindcss/vite`／トークンは `src/styles/global.css` の `@theme`） |
| ホスティング | Cloudflare Pages（`main` への push で自動デプロイ） |
| Node | 22.12.0 以上 |

## 開発

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # dist/ に静的出力
npm run preview  # ビルド結果を確認
```

## 構成

```
src/
├── pages/index.astro     # 単一ページ。各セクションを縦に並べるだけ
├── layouts/BaseLayout.astro
├── components/           # Hero / ProblemSolution / Features / HowItWorks /
│                         # Screenshots / Requirements / Faq / Footer / DownloadButton
├── data/site.ts          # DL URL・バージョン・サイトメタの単一ソース
└── styles/global.css     # Tailwind v4 の @theme トークン
public/
├── _headers              # Cloudflare Pages のセキュリティ／キャッシュヘッダ
├── icon.png / apple-touch-icon.png / favicon.ico / og-image.png
└── screenshots/          # roi.png / capture.png / manage-pdf.png
```

### `src/data/site.ts` について

公開 URL・DL URL・バージョンはすべてこのファイルに集約している。各コンポーネントはここから import する。`astro.config.mjs` の `site` もこの `SITE_URL` を参照するので、ドメイン変更時の修正は 1 箇所で足りる。

`RELEASE_READY` は DL ボタンの状態を切り替えるフラグ。

- `false` — ボタンは非活性の「まもなく公開」表示
- `true` — `DOWNLOAD_URL`（`releases/latest/download/Tegasuku-arm64.dmg` の永続 URL）へのリンクになる

公証済み DMG が Releases に並ぶまでは `false` で運用する。

## デプロイ

Cloudflare Pages の Git 連携。`main` への push でビルドとデプロイが走る。

| 設定 | 値 |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| `NODE_VERSION` | `22` |

`wrangler.toml` の `pages_build_output_dir` も `dist` を指している。
