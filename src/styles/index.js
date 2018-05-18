import { mq, breakpoints, containers, padding } from './grid-flexbox'

export const color = (() => {
  const c = {
    white: ['255,255,255'],
    black: ['20,22,24', '27,29,31', '40,60,59'],
    gray: ['48,49,51', '119,119,119', '221,221,221'],
    red: ['241,238,235', '252,91,93', '130,57,55'],
    green: ['95,185,170', '40,60,59'],
    blue: ['131,200,188'],
    yellow: ['250,196,89'],
  }
  return {
    ...c,
    main: [c.red[1], c.blue[0], c.yellow[0]], // primary, secondary, tertiary
  }
})()

export const font = {
  // all in rem units
  size: {
    main: [0.75, 0.9375, 1.125], // sm, md, lg
    headings: [0, 2.5, 2, 1.75, 1.5, 1.25, 1], // offset, h1, h2, h3, h4, h5, h6
  },
  family: {
    sans: "'Poppins', sans-serif",
    mono: "'Source Code Pro', monospace",
  },
}

export const spacer = [0.625, 1.875, 2.25, 3.75]

export const theme = {
  breakpoints,
  containers,
  mq,
  padding,
  color,
  font,
  spacer,
}

export default theme
