class NoteSequencer {
  constructor(length) {
    this.length = length;
    this.noteStep = [];

    for(var i = 0; i < this.length; i++) {
      this.noteStep[i] = new NoteStep(0);
    }

    this.currentStep = 0;
    this.lastStep = length - 1;
    this.divider = PPQN/2;
    this.clock = 0;
  } 

  advance() {
    this.currentStep++;
    if(this.currentStep >= this.length) {
      this.currentStep = 0;
    }
    this.noteStep[this.currentStep].trigger();
  }

  getNextStep() {
    var nextIndex = this.currentStep + 1;
    if(nextIndex >= this.length) {
      return this.noteStep[0];
    }
    return this.noteStep[nextIndex];
  }

  tick() {
    this.clock++;
    if(this.clock % this.divider == 0) {
      this.advance();
    }
  }
}