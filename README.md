# @kirathe/count-down-timer

Simple, easy-to-use, countdown for angular

![Static Badge](https://img.shields.io/badge/build-passing-brightgreen)
![npm](https://img.shields.io/npm/v/%40kirathe%2Fcount-down-timer)
![npm collaborators](https://img.shields.io/npm/collaborators/%40kirathe%2Fcount-down-timer)
![GitHub Repo stars](https://img.shields.io/github/stars/JonnyKratz/count-down-timer)
![GitHub all releases](https://img.shields.io/github/downloads/Jonnykratz/count-down-timer/total)
![GitHub Sponsors](https://img.shields.io/github/sponsors/Jonnykratz)
![GitHub language count](https://img.shields.io/github/languages/count/Jonnykratz/count-down-timer)
![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/Jonnykratz/count-down-timer)
![GitHub followers](https://img.shields.io/github/followers/Jonnykratz)
![GitHub forks](https://img.shields.io/github/forks/JonnyKratz/count-down-timer)
![X (formerly Twitter) URL](https://img.shields.io/twitter/url?url=https%3A%2F%2Ftwitter.com%2Fkirathendegwa)
![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/kirathendegwa)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/JonnyKratz/count-down-timer/main)


## Usage

### 1. Install

```
npm install @kirathe/count-down-timer --save
```

import `CountDownTimerComponent`。

```typescript
import { CountDownTimerComponent } from '@kirathe/count-down-timer';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CountDownTimerComponent],
  template: `
      <count-down-timer [countDownTimerTemplate]="timerTemplate" [dDay]="date">
        <ng-template
            #timerTemplate
            let-days="daysToDDay"
            let-hours="hoursToDDay"
            let-minutes="minutesToDDay"
            let-seconds="secondsToDDay">
            <label class="text-danger">
			Count Down To The Next Release: {{ days }}
              <a class="h6">Day(s) {{ hours }}: {{ minutes }}: {{ seconds }}</a>
			</label>
        </ng-template>
    </count-down-timer>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent { date = new Date('2023-12-06 04:29:40'); }
```

### 2、Template

```html
    <count-down-timer [countDownTimerTemplate]="timerTemplate" [dDay]="date">
        <ng-template
            #timerTemplate
            let-days="daysToDDay"
            let-hours="hoursToDDay"
            let-minutes="minutesToDDay"
            let-seconds="secondsToDDay">
            <label class="text-danger">
			Count Down To The Next Release: {{ days }}
              <a class="h6">Day(s) {{ hours }}: {{ minutes }}: {{ seconds }}</a>
			</label>
        </ng-template>
    </count-down-timer>
```


## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/Jonnykratz/count-down-timer/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/Jonnykratz/count-down-timer/blob/main/LICENSE) file for the full text)
