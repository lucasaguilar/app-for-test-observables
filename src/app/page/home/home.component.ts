import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  myIntervalObservable = interval(1000);
  myInterval: number = 1000;
  myMessage: string = 'hello!!!...';
  arrayMessage: string[] = [];

  subscription: Subscription;

  constructor() {
    this.subscription = this.myIntervalObservable.subscribe((n: number) =>
      this.arrayMessage.push(this.myMessage + n)
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setNewInterval() {
    this.subscription.unsubscribe();
    this.myIntervalObservable = interval(this.myInterval);
    this.myMessage = 'hello!!!...';
    this.arrayMessage = [];

    this.subscription = this.myIntervalObservable.subscribe((n: number) =>
      this.arrayMessage.push(this.myMessage + n)
    );
  }

  stop() {
    this.subscription.unsubscribe();
    this.myIntervalObservable = interval(this.myInterval);
    this.myMessage = 'hello!!!...';
    this.arrayMessage = [];
  }
}
