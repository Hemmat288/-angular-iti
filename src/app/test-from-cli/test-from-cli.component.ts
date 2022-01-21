import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-test-from-cli',
  templateUrl: './test-from-cli.component.html',
  styleUrls: ['./test-from-cli.component.css']
})
export class TestFromCliComponent implements AfterViewInit {
  personName = 'john Doe';
  title = 'test from cli';
  imgScr = 'assets/img/pin.png';
  class = 'new_class';
  number = 3;
  showpassword = false;
    // @ViewChild('inputEl') testvar !: ElementRef;
  //  ngAfterViewInit(): void {
  //   console.log((this.testvarArray.nativeElement as HTMLInputElement).value)
  // }

  @ViewChildren('inputEl') testvarArray !: QueryList<ElementRef>;
    ngAfterViewInit(): void {
      console.log(this.testvarArray)
      
      this.testvarArray.forEach((el) => {
        const elem = el.nativeElement as HTMLInputElement;
        console.log((elem).value);
        elem.classList.add('inp')
      })
  }

  constructor() { 
    setInterval((): void => { this.personName = this.personName + '1' ,this.title = this.title + 't' }
,1000)
  }
  testButton(x:HTMLInputElement) {
console.log(x)
  }


}
