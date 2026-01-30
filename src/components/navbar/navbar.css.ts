import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme/vars.css';

export const navbar = style({
  padding: vars.space.md,
  background: vars.color.primary,
  width: 100px,
  height: 80px
});
