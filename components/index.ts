export { default as Button } from './Button'
export { default as Text } from './Text'

const themeColors = {
    itaucard: {
        colorPrimary: 'orange',
        colorPrimaryContrast: 'white'
    },
    credicard: {
        colorPrimary: 'blue',
        colorPrimaryContrast: 'yellow'
    }
}

type Theme = 'itaucard' | 'credicard';

export function setTheme(theme: Theme, element: HTMLElement) {
    element.style.setProperty('--itau-color-primary', themeColors[theme].colorPrimary);
    element.style.setProperty('--itau-color-primary-contrast', themeColors[theme].colorPrimaryContrast);
}
