/**
 * サイト全体で参照する定数を集約する。
 * DL リンク・バージョン・GitHub URL 等はここを一元管理し、
 * 各コンポーネントからは必ずこのファイルを import して参照する。
 */

/** リリース配布用の公開リポジトリ（ソース本体は非公開のまま） */
export const RELEASES_REPO = "kito8/tegasuku-releases";

/** リリース一覧ページ（固定名アセットが無い場合のフォールバック先） */
export const RELEASES_URL = `https://github.com/${RELEASES_REPO}/releases`;

/** インストールと使い方の手順書（配布リポジトリの README として公開している） */
export const GUIDE_URL = `https://github.com/${RELEASES_REPO}`;

/**
 * 固定名アセットの永続 DL URL。
 * `latest` タグに `Tegasuku-arm64.dmg` を必ず併置する運用（docs/mac-release-plan.md）。
 */
export const DOWNLOAD_URL = `https://github.com/${RELEASES_REPO}/releases/latest/download/Tegasuku-arm64.dmg`;

/** アプリのバージョン（package.json の version と揃える） */
export const VERSION = "0.3.1";

/** 作者名 */
export const AUTHOR = "Koki Ito";

/**
 * DMG がまだ公開されていない期間は false にして「まもなく公開」表示に切り替える。
 * リリース公開後に true にすると DL ボタンが実 DMG を指す（T7）。
 */
export const RELEASE_READY = false;

/* --- サイトメタ（<head> / OGP 用） --- */

/** アプリ名 */
export const SITE_NAME = "tegasuku";

/** 公開予定の URL（Cloudflare Pages, T6） */
export const SITE_URL = "https://tegasuku.pages.dev";

/** meta description / OGP description */
export const SITE_DESCRIPTION =
  "Zoomの説明会で共有されるスライドを、切り替わった瞬間に自動でキャプチャ。クラウド送信なし、完全ローカルで完結するMacアプリ。";

/** OGP 画像（public/ 配下・当面プレースホルダー） */
export const OG_IMAGE = "/og-image.png";
