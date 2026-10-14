
// Import Routes from Angular Router.
// Routes is used to create the application's route list.
import { Routes } from '@angular/router';


// Import the components that we want to display
// when the user visits different URLs.
import { DirectiveExp } from './Components/directive-exp/directive-exp';
import { DataBinding } from './Components/data-binding/data-binding';
import { Variables } from './Components/variables/variables';
import { NotFound } from './Components/not-found/not-found';

// Define all application routes.
export const routes: Routes = [

  // =========================================
  // VARIABLES ROUTE
  // =========================================

  // When the URL is:
  // /variables
  //
  // Angular displays the Variables component.
  {
    path: 'variables',
    component: Variables
  },


  // =========================================
  // DATA BINDING ROUTE
  // =========================================

  // When the URL is:
  // /dataBinding
  //
  // Angular displays the DataBinding component.
  {
    path: 'dataBinding',
    component: DataBinding
  },


  // =========================================
  // DIRECTIVES ROUTE
  // =========================================

  // When the URL is:
  // /directives
  //
  // Angular displays the DirectiveExp component.
  {
    path: 'directives',
    component: DirectiveExp
  },


  // =========================================
  // DEFAULT ROUTE
  // =========================================

  // The empty path means the user has not
  // entered any route after the website URL.
  //
  // Example:
  // http://localhost:4200/
  //
  // redirectTo sends the user to /variables.
  //
  // pathMatch: 'full' means Angular should
  // redirect only when the complete URL is empty.
  {
    path: '',
    redirectTo: 'variables',
    pathMatch: 'full'
  },


  // =========================================
  // WILDCARD ROUTE
  // =========================================

  // ** means any route that does not exist.
  //
  // Example:
  // http://localhost:4200/hello
  // http://localhost:4200/test
  // http://localhost:4200/abc
  //
  // These routes do not exist, so Angular
  // redirects the user to /variables.
  //
  // IMPORTANT:
  // The wildcard route should normally be
  // placed at the END of the route list.
  {
    path: '**',
    component: NotFound
  }

];