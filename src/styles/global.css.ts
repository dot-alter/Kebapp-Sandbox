// src/styles/global.css.ts
import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme/vars.css';

globalStyle('body', {
  backgroundColor: vars.color.background,
});