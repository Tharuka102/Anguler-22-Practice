import { Component } from '@angular/core';

// FormsModule is required for [(ngModel)].
import { FormsModule } from '@angular/forms';


@Component({

  // FormsModule allows us to use ngModel
  // in the HTML template.
  imports: [FormsModule],

  // Custom HTML selector for this component.
  selector: 'app-control-flow',

  // CSS file used by this component.
  styleUrl: './control-flow.css',

  // HTML template used by this component.
  templateUrl: './control-flow.html',

})
export class ControlFlow {


  // =========================================
  // @IF VARIABLE
  // =========================================

  // Controls whether Div 1 is visible.
  //
  // true  -> Div 1 is displayed.
  // false -> Div 1 is hidden.
  isDiv1Visible: boolean = true;


  // =========================================
  // OFFER VARIABLE
  // =========================================

  // Controls whether an offer is available.
  //
  // false -> No offer code.
  // true  -> Offer code input is displayed.
  isOffer: boolean = false;


  // =========================================
  // OFFER STATUS
  // =========================================

  // Stores the current offer status.
  //
  // NOTE:
  // This variable is not currently used
  // in your HTML code.
  offerStatus: string = 'new';


  // =========================================
  // ORDER STATUS
  // =========================================

  // Stores the current order status.

  // Possible values:
  // 'new' -> Order Placed
  // 'shi' -> Order In Shipping
  // 'del' -> Order Delivered
  orderStatus: string = 'del';


  // =========================================
  // CITY ARRAY
  // =========================================

  // Array containing city names.
  cityList: string[] = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix'
  ];


  // =========================================
  // STUDENT ARRAY
  // =========================================

  // Array containing student objects.
  //
  // Each object contains:
  // name
  // city
  // rollNo
  studentList = [

    {
      name: 'John',
      city: 'New York',
      rollNo: 12
    },

    {
      name: 'Alice',
      city: 'Los Angeles',
      rollNo: 34
    },

    {
      name: 'Bob',
      city: 'Chicago',
      rollNo: 56
    },

    {
      name: 'Eve',
      city: 'Houston',
      rollNo: 78
    },

    {
      name: 'Charlie',
      city: 'Phoenix',
      rollNo: 90
    }

  ];


  // =========================================
  // TOGGLE METHOD
  // =========================================

  // This method changes the value of
  // isDiv1Visible.

  // true  -> false
  // false -> true
  toggleDiv1(): void {

    this.isDiv1Visible = !this.isDiv1Visible;

  }

}
