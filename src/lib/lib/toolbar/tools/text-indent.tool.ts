import { HandlerType, SelectConfig } from '../help';
import { FormatMatcher } from '../matcher/format.matcher';
import { textIndentFormatter } from '../../formatter/block-style.formatter';
import { BlockStyleCommander } from '../commands/block-style.commander';

export const textIndentTool: SelectConfig = {
  type: HandlerType.Select,
  tooltip: '首行缩进',
  classes: ['tbus-icon-text-indent'],
  mini: true,
  options: [{
    label: '0x',
    value: '0',
    classes: ['tbus-text-indent-0'],
    default: true
  }, {
    label: '1x',
    value: '1em',
    classes: ['tbus-text-indent-1'],
    default: true
  }, {
    label: '2x',
    classes: ['tbus-text-indent-2'],
    value: '2em',
  }, {
    label: '4x',
    classes: ['tbus-text-indent-4'],
    value: '4em'
  }],
  match: new FormatMatcher(textIndentFormatter),
  highlight(options, p) {
    console.log(p);
    return options[0]
  },
  execCommand: new BlockStyleCommander('textIndent', textIndentFormatter)
};