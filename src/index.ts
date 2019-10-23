import { contextMenuClickStream } from './clickStream'
import {
  createContextMenu,
  createContextMenuStream,
} from './create'
import {
  removeContextMenu,
  removeContextMenuStream,
} from './remove'
import {
  updateContextMenu,
  updateContextMenuStream,
} from './update'

export * from './types'
export { useMenu } from './use-menu'

export const menus = {
  /** Observable of context menu clicks */
  clickStream: contextMenuClickStream,
  /** Create a new context menu */
  create: createContextMenu,
  /** Observable of context menu creations */
  createStream: createContextMenuStream.asObservable(),
  /** Remove a context menu by id */
  remove: removeContextMenu,
  /** Observable of context menu removals */
  removeStream: removeContextMenuStream.asObservable(),
  /** Update a context menu */
  update: updateContextMenu,
  /** Observable of context menu updates */
  updateStream: updateContextMenuStream.asObservable(),
}
