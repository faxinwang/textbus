import { FormatMatcher } from './format.matcher';
import { TBSelection, Renderer, FormatAbstractData } from '../../core/_api';
import { SelectionMatchDelta } from './matcher';
import { HighlightState } from '../help';
import { dirFormatter } from '../../formatter/dir.formatter';

export class DirMatcher extends FormatMatcher {
  constructor(private dir: 'ltr' | 'rtl') {
    super(dirFormatter);
  }

  queryState(selection: TBSelection, renderer: Renderer): SelectionMatchDelta {
    if (selection.rangeCount === 0) {
      return {
        srcStates: [],
        matchData: null,
        state: HighlightState.Normal
      }
    }
    const result = super.queryState(selection, renderer);
    if (result.state === HighlightState.Highlight) {
      const matchData = result.matchData as FormatAbstractData;
      if (matchData.attrs.get('dir') !== this.dir) {
        result.state = HighlightState.Normal;
      }
    }
    return result;
  }
}
