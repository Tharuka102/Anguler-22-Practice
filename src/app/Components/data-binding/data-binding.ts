import { Component } from '@angular/core';

// FormsModule is required when using [(ngModel)].
import { FormsModule } from '@angular/forms';

@Component({
  // FormsModule allows us to use ngModel in the HTML.
  imports: [FormsModule],

  // Custom HTML tag for this component.
  selector: 'app-data-binding',

  // CSS file for this component.
  styleUrl: './data-binding.css',

  // HTML template for this component.
  templateUrl: './data-binding.html',
})
export class DataBinding {
  // =========================================
  // VARIABLES
  // =========================================

  // String variable.
  // It stores the product name.
  productName: string = 'Laptop';

  // Number variable.
  // It stores the product price.
  productPrice: number = 1000;

  // Number variable.
  // It controls the maximum number of characters
  // allowed in the input field.
  maxAlloowedChar: number = 5;

  // String variable.
  // This value controls the HTML input type.
  //
  // Example:
  // 'text'  -> text input
  // 'number' -> number input
  // 'email' -> email input
  myDynamicType: string = 'text';

  // =========================================
  // CLICK EVENT
  // =========================================

  // This method runs when the
  // "Show Welcome" button is clicked.
  showWelcometext(): void {
    // Print a message in the browser console.
    console.log('Welcome to the Data Binding Component');

    // Display a popup message.
    alert('Welcome to the Data Binding Component');
  }

  // =========================================
  // DROPDOWN CHANGE EVENT
  // =========================================

  // This method runs when the dropdown value changes.
  onDropdownChange(): void {
    // Display a message in the console.
    console.log('Dropdown value changed');

    // Display a popup message.
    alert('Dropdown value changed');
  }

  // =========================================
  // MOUSE ENTER EVENT
  // =========================================

  // This method runs when the mouse enters the div.
  onMouseenter(): void {
    console.log('Mouse entered the div');
  }

  // =========================================
  // MOUSE OVER EVENT
  // =========================================

  // This method runs when the mouse is over the div.
  onMouseOver(): void {
    console.log('Mouse is over the div');
  }

  // =========================================
  // MOUSE OUT EVENT
  // =========================================

  // This method runs when the mouse leaves the div.
  onMouseOut(): void {
    console.log('Mouse left the div');
  }

  // =========================================
  // CHANGE PRODUCT NAME
  // =========================================

  // This method can be used to change
  // the product name from TypeScript.
  changeProductName(): void {
    this.productName = 'Mobile Phone';

    console.log('Product name changed:', this.productName);
  }

  // =========================================
  // CHANGE PRODUCT PRICE
  // =========================================

  // This method changes the product price.
  changeProductPrice(): void {
    this.productPrice = 1500;

    console.log('Product price changed:', this.productPrice);
  }
}
