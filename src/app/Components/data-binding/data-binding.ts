import { Component } from '@angular/core';

// FormsModule is required for [(ngModel)].
import { FormsModule } from '@angular/forms';


@Component({

  // Allows us to use ngModel in the HTML.
  imports: [FormsModule],

  // Custom HTML tag for this component.
  selector: 'app-data-binding',

  // CSS file used by this component.
  styleUrl: './data-binding.css',

  // HTML template used by this component.
  templateUrl: './data-binding.html',

})
export class DataBinding {


  // =========================================
  // VARIABLES
  // =========================================

  // String variable.
  // Stores the product name.
  productName: string = 'Laptop';


  // Number variable.
  // Stores the product price.
  productPrice: number = 1000;


  // Number variable.
  // Controls the maximum number of
  // characters allowed in the input.
  maxAlloowedChar: number = 5;


  // String variable.
  // Controls the HTML input type.
  //
  // text   -> text input
  // number -> number input
  // email  -> email input
  myDynamicType: string = 'text';



  // =========================================
  // CLICK EVENT
  // =========================================

  // Runs when the Show Welcome
  // button is clicked.
  showWelcometext(): void {

    // Display message in the browser console.
    console.log(
      'Welcome to the Data Binding Component'
    );

    // Display popup message.
    alert(
      'Welcome to the Data Binding Component'
    );

  }



  // =========================================
  // DROPDOWN CHANGE EVENT
  // =========================================

  // Runs when the dropdown value changes.
  onDropdownChange(): void {

    console.log(
      'Dropdown value changed'
    );

    alert(
      'Dropdown value changed'
    );

  }



  // =========================================
  // MOUSE ENTER EVENT
  // =========================================

  // Runs when the mouse enters the div.
  onMouseenter(): void {

    console.log(
      'Mouse entered the div'
    );

  }



  // =========================================
  // MOUSE OVER EVENT
  // =========================================

  // Runs when the mouse moves over the div.
  onMouseOver(): void {

    console.log(
      'Mouse is over the div'
    );

  }



  // =========================================
  // MOUSE OUT EVENT
  // =========================================

  // Runs when the mouse leaves the div.
  onMouseOut(): void {

    console.log(
      'Mouse left the div'
    );

  }



  // =========================================
  // CHANGE PRODUCT NAME
  // =========================================

  // Changes the product name
  // from TypeScript.
  changeProductName(): void {

    this.productName = 'Mobile Phone';

    console.log(
      'Product name changed:',
      this.productName
    );

  }



  // =========================================
  // CHANGE PRODUCT PRICE
  // =========================================

  // Changes the product price
  // from TypeScript.
  changeProductPrice(): void {

    this.productPrice = 1500;

    console.log(
      'Product price changed:',
      this.productPrice
    );

  }

}
