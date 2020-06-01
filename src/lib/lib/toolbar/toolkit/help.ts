import { Observable } from 'rxjs';

import { KeymapAction, Keymap, isMac } from '../../viewer/_api';
import { Renderer, TBSelection } from '../../core/_api';

export interface Tool {
  elementRef: HTMLElement;
  onApply: Observable<any>;
  keymapAction?: KeymapAction | KeymapAction[];

  updateStatus?(selectionMatchDelta: any): void;
}

export interface ContextMenuConfig {
  classes?: string[];
  label?: string;
  displayNeedMatch?: boolean;
  action?: (renderer: Renderer, selection: TBSelection, tool: Tool) => void;
}

export function createKeymapHTML(config: Keymap) {
  const arr: string[] = [];
  if (config.ctrlKey) {
    arr.push(isMac ? 'tbus-icon-command' : 'Ctrl');
  }
  if (config.shiftKey) {
    arr.push(isMac ? 'tbus-icon-shift' : 'Shift');
  }
  if (config.altKey) {
    arr.push(isMac ? 'tbus-icon-opt' : 'Alt');
  }
  const keys = Array.isArray(config.key) ?
    config.key.map(i => i.toUpperCase()).join('/') :
    config.key.toUpperCase();

  if (isMac) {
    return arr.map(s => {
      return `<span class="${s}"></span>`;
    }).join('') + keys

  }
  arr.push(keys);
  return arr.join('<span class="tbus-toolbar-keymap-join">+</span>');
}