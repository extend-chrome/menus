import { Subject } from 'rxjs'
export declare const removeContextMenuStream: Subject<string>
export declare const removeContextMenu: (
  id: string,
) => Promise<void>
