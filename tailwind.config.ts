import type { Config } from 'tailwindcss';

/**
 * Design tokens exported from the Google Stitch design ("Botanical Editorial Portfolio").
 * Source of truth: DESIGN.md
 */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
        "colors": {
              "primary-fixed": "#dce7c2",
              "secondary": "#5c6147",
              "on-primary-container": "#faffe8",
              "on-primary-fixed": "#161e07",
              "tertiary-container": "#7a7468",
              "on-tertiary": "#ffffff",
              "surface-variant": "#e2e4d8",
              "on-secondary-fixed-variant": "#444931",
              "on-surface-variant": "#46483f",
              "on-error": "#ffffff",
              "inverse-surface": "#2e312a",
              "outline-variant": "#c6c7bc",
              "on-primary-fixed-variant": "#414a2f",
              "surface-container-high": "#e7e9dd",
              "secondary-container": "#e1e6c5",
              "on-tertiary-fixed-variant": "#4b463b",
              "on-primary": "#ffffff",
              "surface": "#f9faee",
              "surface-container-lowest": "#ffffff",
              "inverse-primary": "#c0cba7",
              "on-tertiary-fixed": "#1f1b12",
              "primary": "#566043",
              "error": "#ba1a1a",
              "on-secondary-fixed": "#191d09",
              "on-tertiary-container": "#fffbff",
              "on-error-container": "#93000a",
              "tertiary": "#605c50",
              "outline": "#76786e",
              "tertiary-fixed": "#eae2d3",
              "surface-container-low": "#f3f5e9",
              "secondary-fixed": "#e1e6c5",
              "surface-container": "#edefe3",
              "error-container": "#ffdad6",
              "primary-container": "#6e785a",
              "on-background": "#1a1d15",
              "on-secondary": "#ffffff",
              "primary-fixed-dim": "#c0cba7",
              "surface-tint": "#586245",
              "on-surface": "#1a1d15",
              "surface-bright": "#f9faee",
              "inverse-on-surface": "#f0f2e6",
              "tertiary-fixed-dim": "#cdc6b7",
              "surface-dim": "#d9dbd0",
              "surface-container-highest": "#e2e4d8",
              "on-secondary-container": "#62674d",
              "background": "#f9faee",
              "secondary-fixed-dim": "#c5c9aa"
        },
        "borderRadius": {
              "DEFAULT": "1rem",
              "lg": "2rem",
              "xl": "3rem",
              "full": "9999px"
        },
        "spacing": {
              "space-xs": "0.25rem",
              "margin": "2rem",
              "space-sm": "0.5rem",
              "margin-mobile": "1rem",
              "gutter-mobile": "1rem",
              "space-lg": "1.5rem",
              "gutter": "1.5rem",
              "space-md": "1rem",
              "space-2xl": "4rem",
              "space-xl": "2.5rem"
        },
        "fontFamily": {
              "label-sm": [
                    "Plus Jakarta Sans"
              ],
              "label-md": [
                    "Plus Jakarta Sans"
              ],
              "section-title": [
                    "Plus Jakarta Sans"
              ],
              "display-hero-mobile": [
                    "Playfair Display"
              ],
              "headline-lg-mobile": [
                    "Playfair Display"
              ],
              "display-hero": [
                    "Playfair Display"
              ],
              "headline-md": [
                    "Playfair Display"
              ],
              "body-lg": [
                    "Plus Jakarta Sans"
              ],
              "body-sm": [
                    "Plus Jakarta Sans"
              ],
              "headline-lg": [
                    "Playfair Display"
              ],
              "body-md": [
                    "Plus Jakarta Sans"
              ]
        },
        "fontSize": {
              "label-sm": [
                    "11px",
                    {
                          "lineHeight": "16px",
                          "letterSpacing": "0.04em",
                          "fontWeight": "600"
                    }
              ],
              "label-md": [
                    "13px",
                    {
                          "lineHeight": "18px",
                          "letterSpacing": "0.02em",
                          "fontWeight": "600"
                    }
              ],
              "section-title": [
                    "13px",
                    {
                          "lineHeight": "18px",
                          "letterSpacing": "0.12em",
                          "fontWeight": "700"
                    }
              ],
              "display-hero-mobile": [
                    "36px",
                    {
                          "lineHeight": "44px",
                          "letterSpacing": "-0.01em",
                          "fontWeight": "600"
                    }
              ],
              "headline-lg-mobile": [
                    "28px",
                    {
                          "lineHeight": "36px",
                          "letterSpacing": "0em",
                          "fontWeight": "500"
                    }
              ],
              "display-hero": [
                    "56px",
                    {
                          "lineHeight": "64px",
                          "letterSpacing": "-0.02em",
                          "fontWeight": "600"
                    }
              ],
              "headline-md": [
                    "24px",
                    {
                          "lineHeight": "32px",
                          "letterSpacing": "0em",
                          "fontWeight": "500"
                    }
              ],
              "body-lg": [
                    "16px",
                    {
                          "lineHeight": "26px",
                          "letterSpacing": "-0.005em",
                          "fontWeight": "400"
                    }
              ],
              "body-sm": [
                    "12px",
                    {
                          "lineHeight": "18px",
                          "letterSpacing": "0em",
                          "fontWeight": "400"
                    }
              ],
              "headline-lg": [
                    "36px",
                    {
                          "lineHeight": "44px",
                          "letterSpacing": "-0.01em",
                          "fontWeight": "500"
                    }
              ],
              "body-md": [
                    "14px",
                    {
                          "lineHeight": "22px",
                          "letterSpacing": "0em",
                          "fontWeight": "400"
                    }
              ]
        }
  }
  },
  plugins: []
} satisfies Config;
