import { Observable } from 'rxjs';

import { Commander, ReplaceModel } from './commander';
import { MatchState } from '../matcher/matcher';
import { Fragment } from '../parser/fragment';
import { TBSelection } from '../selection/selection';
import { Handler } from '../toolbar/handlers/help';
import { AttrState } from '../toolbar/formats/forms/help';

export class TableCommander implements Commander {
  constructor(attrs: AttrState[] | Observable<AttrState[]>) {
  }

  command(selection: TBSelection, context: Fragment, handler: Handler, overlap: boolean): void {
  }

  render(state: MatchState, rawElement?: HTMLElement): ReplaceModel {
    return;
  }
}