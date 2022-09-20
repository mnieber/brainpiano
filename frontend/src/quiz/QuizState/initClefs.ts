import { setCallbacks } from 'aspiration';
import { HighlightCbs } from 'skandha-facets/Highlight';
import * as FacetPolicies from 'skandha-facets/policies';
import { handleSelectItem, SelectionCbs } from 'skandha-facets/Selection';

export const initClefs = (ctr: any) => {
  setCallbacks(ctr.selection, {
    selectItem: {
      selectItem(this: SelectionCbs['selectItem']) {
        handleSelectItem(ctr.selection, this.selectionParams);
        FacetPolicies.highlightFollowsSelection(
          ctr.selection,
          this.selectionParams
        );
      },
    },
  } as SelectionCbs);
  setCallbacks(ctr.highlight, {} as HighlightCbs);
};
