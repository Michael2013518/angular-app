import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, interval, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
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
    /*
    const someNumbers = interval(1000);
    const transformValue = pipe(
      filter((value: number) => value % 2 !== 0),
      map(value => `# ${ value }`)
    );
    this.demoObservable = transformValue(someNumbers);
    */
   this.demoObservable = interval(1000).pipe(
    filter((value: number) => value % 2 !== 0),
    map(value => `# ${ value }`)
  );
  }
  ngOnDestroy() {
    if (this.demoSubscription) {
      console.log('ngOnDestroy: unsubscrible demo observable');
      this.demoSubscription.unsubscribe();
    }
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
    if (this.demoSubscription) {
      this.demoSubscription.unsubscribe();
    } else {
      console.log('no subscription');
    }
  }
}
