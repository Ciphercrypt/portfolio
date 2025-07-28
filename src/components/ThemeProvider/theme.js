import { pxToRem } from 'utils/style'

const systemFontStack =
    'system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif'

// Full list of tokens
const baseTokens = {
    rgbBlack: '0 0 0',
    rgbWhite: '255 255 255',
    bezierFastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    durationXS: '200ms',
    durationS: '300ms',
    durationM: '400ms',
    durationL: '600ms',
    durationXL: '800ms',
    systemFontStack,
    fontStack: `Gotham, ${systemFontStack}`,
    monoFontStack:
        'SFMono Regular, Roboto Mono, Consolas, Liberation Mono, Menlo, Courier, monospace',
    japaneseFontStack:
        'ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSizeH0: pxToRem(140),
    fontSizeH1: pxToRem(100),
    fontSizeH2: pxToRem(58),
    fontSizeH3: pxToRem(38),
    fontSizeH4: pxToRem(28),
    fontSizeBodyXL: pxToRem(22),
    fontSizeBodyL: pxToRem(20),
    fontSizeBodyM: pxToRem(18),
    fontSizeBodyS: pxToRem(16),
    fontSizeBodyXS: pxToRem(14),
    lineHeightTitle: '1.1',
    lineHeightBody: '1.5',
    maxWidthS: '540px',
    maxWidthM: '720px',
    maxWidthL: '1096px',
    maxWidthXL: '1680px',
    spaceOuter: '64px',
    spaceXS: '4px',
    spaceS: '8px',
    spaceM: '16px',
    spaceL: '24px',
    spaceXL: '32px',
    space2XL: '48px',
    space3XL: '64px',
    space4XL: '96px',
    space5XL: '128px',
}

// Tokens that change based on viewport size
const tokensDesktop = {
    fontSizeH0: pxToRem(120),
    fontSizeH1: pxToRem(80),
}

const tokensLaptop = {
    maxWidthS: '480px',
    maxWidthM: '640px',
    maxWidthL: '1000px',
    maxWidthXL: '1100px',
    spaceOuter: '48px',
    fontSizeH0: pxToRem(100),
    fontSizeH1: pxToRem(70),
    fontSizeH2: pxToRem(52),
    fontSizeH3: pxToRem(36),
    fontSizeH4: pxToRem(26),
}

const tokensTablet = {
    fontSizeH0: pxToRem(80),
    fontSizeH1: pxToRem(60),
    fontSizeH2: pxToRem(48),
    fontSizeH3: pxToRem(32),
    fontSizeH4: pxToRem(24),
}

const tokensMobile = {
    spaceOuter: '24px',
    fontSizeH0: pxToRem(56),
    fontSizeH1: pxToRem(40),
    fontSizeH2: pxToRem(34),
    fontSizeH3: pxToRem(28),
    fontSizeH4: pxToRem(22),
    fontSizeBodyL: pxToRem(18),
    fontSizeBodyM: pxToRem(16),
    fontSizeBodyS: pxToRem(14),
}

const tokensMobileSmall = {
    spaceOuter: '16px',
    fontSizeH0: pxToRem(42),
    fontSizeH1: pxToRem(38),
    fontSizeH2: pxToRem(28),
    fontSizeH3: pxToRem(24),
    fontSizeH4: pxToRem(20),
}

// Tokens that change based on theme
const dark = {
    themeId: 'dark',
    rgbBackground: '8 8 20',
    rgbBackgroundLight: '13 13 30',
    rgbPrimary: '0 212 255',
    rgbAccent: '124 58 237',
    rgbText: '226 232 240',
    rgbError: '255 59 59',
    colorTextTitle: 'rgb(var(--rgbText) / 1)',
    colorTextBody: 'rgb(var(--rgbText) / 0.82)',
    colorTextLight: 'rgb(var(--rgbText) / 0.55)',
}

const light = {
    themeId: 'light',
    rgbBackground: '248 250 252',
    rgbBackgroundLight: '255 255 255',
    rgbPrimary: '13 148 136',
    rgbAccent: '6 182 212',
    rgbText: '15 23 42',
    rgbError: '220 38 38',
    colorTextTitle: 'rgb(var(--rgbText) / 1)',
    colorTextBody: 'rgb(var(--rgbText) / 0.75)',
    colorTextLight: 'rgb(var(--rgbText) / 0.55)',
}

export const tokens = {
    base: baseTokens,
    desktop: tokensDesktop,
    laptop: tokensLaptop,
    tablet: tokensTablet,
    mobile: tokensMobile,
    mobileS: tokensMobileSmall,
}

export const theme = { dark, light }
