import viewports from './viewports'

export default function mq(from, to) {
  let media = `@media only screen and (max-width: ${viewports[from]}px)`

  if (to) {
    media += ` and (min-width: ${Number.parseInt(viewports[to], 10)}px)`
  }

  return media
}
