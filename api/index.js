/**
 * Single entry point for this CDN.
 *
 * It re-exports both packages of ffmpeg.wasm 0.12.x so that one URL is enough:
 *
 * - `@ffmpeg/ffmpeg` -> `FFmpeg` (classes.js) + const/errors/types
 * - `@ffmpeg/util`   -> `fetchFile`, `toBlobURL`, ... (util.js)
 *
 * ```js
 * import { FFmpeg, fetchFile } from "https://jacklocky2.github.io/ffmpeg-cdn/api/index.js";
 * ```
 */
export * from "./classes.js";
export * from "./types.js";
export * from "./const.js";
export * from "./errors.js";
export * from "./util.js";
