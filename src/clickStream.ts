import { contextMenus } from '@bumble/chrome-rxjs'
import { map, withLatestFrom } from 'rxjs/operators'
import { lastElementStream } from './messages'
import { ContextMenuClickStream } from './types'

export const contextMenuClickStream: ContextMenuClickStream = contextMenus.clickStream.pipe(
  withLatestFrom(lastElementStream),
  map(([[clickData, tab], lastElement]) => {
    if (lastElement) {
      return [
        { ...clickData, element: lastElement[0].element },
        tab,
      ]
    } else {
      return [clickData, tab]
    }
  }),
)

// contextMenus.clickStream.subscribe((args) => {
//   console.log('🚀: contextMenus.clickStream', args)
// })

// lastElementStream.subscribe((args) => {
//   console.log('🚀: lastElementStream', args)
// })
