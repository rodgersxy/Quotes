import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:any): number {
    let today: Date = new Date(); // the current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value-todayWithNoTime)// return value in milliseconds
    const secondsInADay =86400; //60 seconds*60 minutes in an hour *24 hours


    var dateDifferenceSeconds=dateDifference*0.001; // convert into secods
    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >=1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
    
  }
}
