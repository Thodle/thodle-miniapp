import { defineConfig, presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
} from 'unocss';

export default defineConfig({
   shortcuts: [
    { logo: 'icon-logos:svelte-icon w-7em h-7em transform transition-300' },
  ],
  presets: [
    presetWind3(),
    presetIcons({
      prefix: 'icon-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      scale: 1
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // these will extend the default theme
        // sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  safelist: ['bg-orange-300', 'prose'],
})
