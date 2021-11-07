import { makeObservable, observable } from 'mobx';
import * as Policies from 'src/app/AppStore/policies';
import { GroupsStore } from 'src/groups/GroupsStore';
import { ClefStore } from 'src/keyboard/ClefStore';
import { PreselectionStore } from 'src/keyboard/PreselectionStore';
import { VoicingStore } from 'src/voicings/VoicingStore';

export class AppStore {
  clefStore = new ClefStore();
  groupsStore: GroupsStore;
  preselectionStore = new PreselectionStore();
  scaleFactor = 1;
  voicingStore = new VoicingStore();

  setWindowWidth(width: number) {
    this.scaleFactor = width >= 1420 ? 1 : width / 1420;
  }

  constructor() {
    this.setWindowWidth(window.innerWidth);

    makeObservable(this, {
      clefStore: observable,
      groupsStore: observable,
      preselectionStore: observable,
      scaleFactor: observable,
      voicingStore: observable,
    });
    this.groupsStore = new GroupsStore();
    this.applyPolicies();
  }

  applyPolicies() {
    Policies.voicingStoreUsesSelectedClef()(this);
  }
}
