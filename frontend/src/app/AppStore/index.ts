import { observable, makeObservable } from 'mobx';
import { GroupsStore } from 'src/groups/GroupsStore';
import { PreselectionStore } from 'src/keyboard/PreselectionStore';
import { VoicingStore } from 'src/voicings/VoicingStore';
import { ClefStore } from 'src/keyboard/ClefStore';
import * as Policies from 'src/app/AppStore/policies';

export class AppStore {
  @observable groupsStore: GroupsStore;
  voicingStore = new VoicingStore();
  clefStore = new ClefStore();
  preselectionStore = new PreselectionStore();

  constructor() {
    makeObservable(this, {
      voicingStore: observable,
      clefStore: observable,
      preselectionStore: observable,
    });
    this.groupsStore = new GroupsStore();
    this.applyPolicies();
  }

  applyPolicies() {
    Policies.voicingStoreUsesSelectedClef()(this);
  }
}
