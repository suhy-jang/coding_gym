export class Clock {
  hour: number;
  minute: number;

  constructor(hour: number, minute?: number) {
    this.hour = hour;
    this.minute = minute || 0;
    this.correction();
  }

  private correction() {
    while (this.minute < 0) {
      this.hour--;
      this.minute += 60;
    }
    while (this.minute >= 60) {
      this.hour++;
      this.minute -= 60;
    }
    while (this.hour < 0) {
      this.hour += 24;
    }
    while (this.hour >= 24) {
      this.hour = this.hour % 24;
    }
  }

  public toString(): string {
    this.correction();
    const hour = '' + this.hour;
    const minute = '' + this.minute;
    const twoDigit = (n: string): string => (n.length > 1 ? n : '0' + n);
    return `${twoDigit(hour)}:${twoDigit(minute)}`;
  }

  public plus(minutes: number): Clock {
    this.minute = this.minute + minutes;
    this.correction();
    return this;
  }

  public minus(minutes: number): Clock {
    this.minute = this.minute - minutes;
    this.correction();
    return this;
  }

  public equals(other: Clock): boolean {
    return this.hour === other.hour && this.minute === other.minute;
  }
}
