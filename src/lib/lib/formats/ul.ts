import { ButtonHandlerOption, HandlerType } from '../toolbar/help';
import { ListFormatter } from '../toolbar/fomatter/list-formatter';

export const ulHandler: ButtonHandlerOption = {
  type: HandlerType.Button,
  classes: ['tanbo-editor-icon-list'],
  tooltip: '无序列表',
  match: {
    tags: ['UL']
  },
  execCommand: new ListFormatter('ul')
};