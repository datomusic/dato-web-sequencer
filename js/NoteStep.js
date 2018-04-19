class NoteStep {
  constructor(initialValue) {
    this.value = initialValue;
    this.enabled = true;
    this.velocity = 100;
  }

  trigger() {
    if(this.enabled) {
      noteOn(this.value);
      setTimeout(() => noteOff(this.value), gateTime);
    }
  }
}