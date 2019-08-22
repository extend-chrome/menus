import { Subject, Subscription } from 'rxjs'
/**
 * Observable of created context menu ids
 */
export declare const createContextMenuStream: Subject<string>
export declare function createContextMenu({
  selector,
  invert,
  ...options
}: ContextMenuOptions): Promise<void>
export declare function createDynamicMenu(
  options: ContextMenuOptions,
  selector: string,
  invert: boolean,
): Promise<Subscription>
