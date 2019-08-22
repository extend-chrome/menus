/// <reference types="chrome" />
export declare const showMenu: () => Promise<void>
export declare const hideMenu: () => Promise<void>
export declare const lastElement: ({
  innerText,
}: HTMLElement) => void
export declare const messageStream: import('rxjs').Observable<
  [
    {
      type: string
      domain: string
      id: string
      element: {
        innerText: string
      }
    },
    chrome.runtime.MessageSender,
  ]
>
export declare const showMenuStream: import('rxjs').Observable<
  [
    {
      type: string
      domain: string
      id: string
      element: {
        innerText: string
      }
    },
    chrome.runtime.MessageSender,
  ]
>
export declare const hideMenuStream: import('rxjs').Observable<
  [
    {
      type: string
      domain: string
      id: string
      element: {
        innerText: string
      }
    },
    chrome.runtime.MessageSender,
  ]
>
export declare const lastElementStream: import('rxjs').Observable<
  [
    {
      type: string
      domain: string
      id: string
      element: {
        innerText: string
      }
    },
    chrome.runtime.MessageSender,
  ]
>
