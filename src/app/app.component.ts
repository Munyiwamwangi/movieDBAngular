import { Component } from '@angular/core';
import { GetApiService } from './get-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Call API in Angular...';
  constructor( private api:GetApiService) {}
  ngOnInit() {
    this.api.apiCall().subscribe((data)=> {
      // console.log("get api data -->", (data));

      // iterating through the nest of objects

      // let counter = 0;

      // produces objets 

                            // function shallowIterator(target: { [x: string]: any; }) {
                            //   for (const key in target) {
                            //     if (typeof target[key] === 'object') {
                            //       for (const nestedKey in target[key]) {
                            //         console.log(target[key][nestedKey]);
                            //       }
                            //     } else {
                            //       console.log(target[key]);
                            //     }
                            //   }
                            // }

                            // shallowIterator(data);

      function deepIterator(target: { [x: string]: any; }) {
        if (typeof target === 'object') {
          for (const key in target) {
            deepIterator(target[key]);
          }
        } else {
          console.log(target);
        }
      }
      deepIterator(data)

      // try ends here 
     
    })
  }
}
