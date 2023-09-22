import { Component, Input, TemplateRef } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'count-down-timer',
  template: `
    <div class="timer">
      <ng-container
        *ngTemplateOutlet="
          countDownTimerTemplate || defaultTemplate;
          context: payLoad">
      </ng-container>
      <ng-template #defaultTemplate>
        <span id="days">
          {{ daysToDday }} <a class="h6">Day(s)</a> {{ this.hoursToDday < 10 ? '0' + this.hoursToDday : this.hoursToDday }}:
          {{ this.minutesToDday < 10 ? '0' + this.minutesToDday : this.minutesToDday }}:
          {{ this.secondsToDday < 10 ? '0' + this.secondsToDday : this.secondsToDday }}
        </span>
      </ng-template>
    </div>
  `,
  styles: [],
  standalone: true,
  imports: [NgTemplateOutlet],
})
export class CountDownTimerComponent {
  @Input() countDownTimerTemplate: TemplateRef<any>;
  private subscription: Subscription;
  payLoad: {};

  @Input() dDay: Date = new Date();
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: number;
  public secondsToDday: number;
  public minutesToDday: number;
  public hoursToDday: number;
  public daysToDday: number;

  private getTimeDifference() {
    if (this.dDay !== undefined) {
      this.timeDifference = this.dDay.getTime() - new Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
    }
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToDday = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToDday = Math.floor(
      (timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToDday = Math.floor(
      timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
  }

  ngOnInit() {
    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
      
      this.payLoad = {
        $implicit: "default",
        daysToDDay: this.daysToDday,
        hoursToDDay: this.hoursToDday,
        minutesToDDay: this.minutesToDday,
        secondsToDDay: this.secondsToDday
      }
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
