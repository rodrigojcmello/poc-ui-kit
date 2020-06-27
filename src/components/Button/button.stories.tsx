import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { action } from "@storybook/addon-actions";
import { setTheme } from '../../util/style';
import Button from '.';

const stories = storiesOf('Components', module);

setTheme('itaucard', document.body);

stories.add(
  'TicTacToeCell',
  withInfo({ inline: true })(() => <Button>Hello Button</Button>)
);
