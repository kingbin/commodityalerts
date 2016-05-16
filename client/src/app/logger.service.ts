import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  logs:string[] = []; // capture logs for testing
  log(message: string){
    this.logs.push(message);
    console.log(message);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/