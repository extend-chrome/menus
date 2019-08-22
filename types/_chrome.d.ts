/// <reference types="chrome" />
/**
 * The old Chrome API with Promises
 * @param options ContextMenuOptions
 * @param key contextMenuMap key
 */
export declare const _createContextMenu: (
  options: chrome.contextMenus.CreateProperties,
) => Promise<void>
/**
 * The old Chrome API with Promises
 * @param options ContextMenuOptions
 * @param key contextMenuMap key
 */
export declare const _updateContextMenu: (
  id: string,
  options: chrome.contextMenus.UpdateProperties,
) => Promise<void>
/**
 * Use key to manage contextMenuMap<key, ContextMenuOptions[]>
 * @param id contextMenuMap key
 */
export declare const _removeContextMenu: (
  id: string,
) => Promise<void>
/**
 * Remove all context menus and clear contextMenuMap
 */
export declare const _removeAllContextMenus: () => Promise<void>
export declare const _executeScriptInTab: (
  tabId: number,
  options: chrome.tabs.InjectDetails,
) => Promise<any[]>
