import Style from '../style/main.module.scss';

const themeColors = {
  itaucard: {
    colorPrimary: 'orange',
    colorPrimaryContrast: 'white',
  },
  credicard: {
    colorPrimary: 'blue',
    colorPrimaryContrast: 'yellow',
  },
};

type Theme = 'itaucard' | 'credicard';

export function setTheme(theme: Theme, element: HTMLElement): void {
  element.style.setProperty(
    '--itau-color-primary',
    themeColors[theme].colorPrimary
  );
  element.style.setProperty(
    '--itau-color-primary-contrast',
    themeColors[theme].colorPrimaryContrast
  );
}

type StylesType = (keyof typeof Style)[];

export function css(styles: StylesType): string {
  return styles
    .map((name) => {
      return Style[name];
    })
    .join(' ');
}
