import { animate, state, style, transition, trigger } from "@angular/animations";

export const appearDissapearWithZoom = (duration: number = 1) => trigger('appearDisappearFromCenter', [
  state('void', style({ opacity:0})),
  transition(':enter', [
    style({
      opacity: 1,
      transform: 'scale(0)',
    }),
    animate(`${duration}s`, style({
      opacity: 1,
      transform: 'scale(1)'
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'scale(1)',
    }),
    animate(`${duration}s`, style({
      opacity: 0,
      transform: 'scale(0)'
    }))
  ])
]);
