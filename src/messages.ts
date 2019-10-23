import { useScope } from '@bumble/messages'
import { debounceTime } from 'rxjs/operators'
import { element, hide, id, show } from './CONSTANTS'
import { of, concat } from 'rxjs'

const messages = useScope('@bumble/messages')

// Use in content script to send command
// export const showMenu = () => {
//   console.log('showMenu')

//   return messages.send({ type: show, domain, id })
// }

export const [sendShowMenu, showMenuStream] = messages.useLine<
  string
>(show)

export const showMenu = () => sendShowMenu(id)

// Use in content script to send command
// export const hideMenu = () => {
//   console.log('hideMenu')

//   return messages.send({ type: hide, domain, id })
// }

export const [sendHideMenu, hideMenuStream] = messages.useLine<
  string
>(hide)

export const hideMenu = () => sendHideMenu(id)

// export const lastElement = (el: HTMLElement | null) => {
//   if (!el) return

//   const { innerText } = el

//   console.log('lastElement', innerText)

//   messages.send({
//     type: element,
//     domain,
//     id,
//     // Update contextMenuClickStream here
//     element: {
//       innerText,
//     },
//   })
// }

export const [
  sendLastElement,
  _lastElementStream,
] = messages.useLine<{
  id: string
  element: Partial<HTMLElement>
}>(element)

export const lastElement = (el: HTMLElement | null) =>
  sendLastElement({
    id,
    element: { innerText: el ? el.innerText : '' },
  })

export const lastElementStream = concat(
  of(null),
  _lastElementStream,
).pipe(debounceTime(25))
