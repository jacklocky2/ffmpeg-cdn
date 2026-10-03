export const MIME_TYPE_JAVASCRIPT = "text/javascript";
export const MIME_TYPE_WASM = "application/wasm";
export const CORE_VERSION = "0.12.10";
/**
 * Self-hosted `@ffmpeg/core` **ESM** build that lives next to this folder.
 *
 * Resolved against `import.meta.url` so it keeps working no matter which
 * origin/path this CDN is mounted at. Note this must be the ESM build: the
 * worker is spawned with `type: "module"`, so `importScripts()` is
 * unavailable and the core has to be loaded with dynamic `import()`.
 */
export const CORE_URL = new URL("../ffmpeg/ffmpeg-core.js", import.meta.url).href;
/**
 * Kept for `@ffmpeg/util` compatibility (`downloadWithProgress`).
 */
export const HeaderContentLength = "Content-Length";
export var FFMessageType;
(function (FFMessageType) {
    FFMessageType["LOAD"] = "LOAD";
    FFMessageType["EXEC"] = "EXEC";
    FFMessageType["FFPROBE"] = "FFPROBE";
    FFMessageType["WRITE_FILE"] = "WRITE_FILE";
    FFMessageType["READ_FILE"] = "READ_FILE";
    FFMessageType["DELETE_FILE"] = "DELETE_FILE";
    FFMessageType["RENAME"] = "RENAME";
    FFMessageType["CREATE_DIR"] = "CREATE_DIR";
    FFMessageType["LIST_DIR"] = "LIST_DIR";
    FFMessageType["DELETE_DIR"] = "DELETE_DIR";
    FFMessageType["ERROR"] = "ERROR";
    FFMessageType["DOWNLOAD"] = "DOWNLOAD";
    FFMessageType["PROGRESS"] = "PROGRESS";
    FFMessageType["LOG"] = "LOG";
    FFMessageType["MOUNT"] = "MOUNT";
    FFMessageType["UNMOUNT"] = "UNMOUNT";
})(FFMessageType || (FFMessageType = {}));
