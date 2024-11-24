/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* istanbul ignore file */
import { I18n } from "i18n-js";
import { en, ja } from "./locale";
// Add the json translation files here
const i18n = new I18n({
    ...ja,
    ...en,
    "en": { ...en },
});
i18n.fallbacks = true;
i18n.enableFallback = true;
i18n.locale = navigator.language || "en";
export { i18n };
