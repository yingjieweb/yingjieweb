export type NavTranslationKey = "home" | "about" | "projects" | "contact";

export interface NavItemConfig {
  translationKey: NavTranslationKey;
  targetEl: `#${string}`;
}
