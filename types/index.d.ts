/// <reference types="chrome" />
import { createContextMenu } from './create'
import { updateContextMenu } from './update'
export declare const menus: {
  create: typeof createContextMenu
  update: typeof updateContextMenu
  remove: (id: string) => Promise<void>
  createStream: import('rxjs').Observable<string>
  updateStream: import('rxjs').Observable<ContextMenuOptions>
  removeStream: import('rxjs').Observable<string>
  clickStream: import('rxjs').Observable<
    [MenuClickData, chrome.tabs.Tab]
  >
}
