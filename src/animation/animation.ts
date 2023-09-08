import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter,:leave', [animate(2000)]),
  // transition('void=>*,*=>void', [animate(2000)]),
]);
export let slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('300ms ease-out', style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(-100%)' })),
  ]),
]);
