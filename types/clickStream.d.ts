/// <reference types="chrome" />
import { Observable } from 'rxjs'
export declare const contextMenuClickStream: Observable<
  [MenuClickData, chrome.tabs.Tab]
>
