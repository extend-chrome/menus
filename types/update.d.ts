import { Subject } from 'rxjs'
/**
 * Observable of updated ContextMenuOptions
 */
export declare const updateContextMenuStream: Subject<
  ContextMenuOptions
>
export declare function updateContextMenu(
  options: ContextMenuOptions,
): Promise<void>
