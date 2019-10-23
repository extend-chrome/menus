import {
  ContextMenuOptions,
  ContextMenuClickStream,
} from './types'
import { contextMenuClickStream } from './clickStream'
import { filter } from 'rxjs/operators'
import { updateContextMenu } from './update'
import { createContextMenu } from './create'

interface UpdateMenuFunction {
  (options: Partial<ContextMenuOptions>): Promise<void>
}

/**
 * Use a context menu item easily
 * Returns a tuple of an updater function and an Observable of clicks for that specific menu item
 */
export function useMenu(
  options: ContextMenuOptions,
): [UpdateMenuFunction, ContextMenuClickStream] {
  const update: UpdateMenuFunction = (_options) =>
    updateContextMenu({ id: options.id, ..._options })

  const stream = contextMenuClickStream.pipe(
    filter(([{ menuItemId }]) => menuItemId === options.id),
  )

  createContextMenu(options).catch((error) => {
    console.warn(
      `${options.id} context menu item could not be created`,
    )
    console.error(error)
  })

  return [update, stream]
}
