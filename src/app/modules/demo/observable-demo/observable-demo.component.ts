import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit, OnDestroy {

  demoObservable: Observable <any>;
  demoSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.demoObservable = of('hello', 'hola', '你好');
    this.demoObservable = interval(1000);
  }
  ngOnDestroy() {
    console.log('ngOnDestroy: unsubscrible demo observable');
    this.demoSubscription.unsubscribe();
  }
  onClick() {
    const observer = {
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('demo observable complete')
    };
    this.demoSubscription = this.demoObservable.subscribe(observer);
  }
  unsubscrible() {
    this.demoSubscription.unsubscribe();
  }
}
