import { Component } from '@angular/core';

@Component({
  // Components can import other Angular components, directives, or pipes here.
  imports: [],

  // This is the custom HTML tag used to display this component.
  selector: 'app-variables',

  // CSS file used to style this component.
  styleUrl: './variables.css',

  // HTML file used as the template for this component.
  templateUrl: './variables.html',
})
export class Variables {
  // ==============================
  // BASIC VARIABLES
  // ==============================

  // string variable - stores text.
  studentName: string = 'John Doe';

  // number variable - stores numbers.
  rollNumber: number = 12345;

  // boolean variable - stores true or false.
  isStudent: boolean = true;

  // Date variable - stores the current date and time.
  currentDate: Date = new Date();

  // ==============================
  // TYPE INFERENCE
  // ==============================

  // TypeScript automatically understands this as a string.
  // We do not need to write : string here.
  teacherName = 'Jane Smith';

  // ==============================
  // ARRAYS
  // ==============================

  // Array of strings.
  cityList: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  // Array of numbers.
  rollNoList: number[] = [101, 102, 103, 104, 105];

  // ==============================
  // OBJECT
  // ==============================

  // This variable contains multiple values inside one object.
  constudent = {
    studentName: 'Alice',
    rollNumber: 67890,
    isStudent: true,
    currentDate: new Date(),
  };

  // ==============================
  // ARRAY OF OBJECTS
  // ==============================

  // This is an array containing multiple student objects.
  studentList = [
    {
      studentName: 'Bob',
      rollNumber: 11111,
      isStudent: true,
      currentDate: new Date(),
    },

    {
      studentName: 'Charlie',
      rollNumber: 22222,
      isStudent: false,
      currentDate: new Date(),
    },

    {
      studentName: 'David',
      rollNumber: 33333,
      isStudent: true,
      currentDate: new Date(),
    },
  ];

  // ==============================
  // ANY TYPE
  // ==============================

  // 'any' allows the variable to contain any type of value.
  // It can be a string, number, boolean, object, etc.
  // It should be avoided when possible because TypeScript
  // cannot properly check the variable type.
  anyValue: any = 'Hello';

  // ==============================
  // UNION TYPE
  // ==============================

  // This variable can contain either a string OR a number.
  studentId: string | number = 1001;

  // ==============================
  // OPTIONAL VARIABLE
  // ==============================

  // The ? means this variable is optional.
  // It can contain a string or it can be undefined.
  email?: string;

  // ==============================
  // READONLY VARIABLE
  // ==============================

  // readonly means the value cannot be changed after initialization.
  readonly collegeName: string = 'Sri Lanka Technology Campus';

  // ==============================
  // CONSTRUCTOR
  // ==============================

  constructor() {
    // This message is printed when the component is created.
    console.log('Variables component initialized');

    // Display the student object in the browser console.
    console.log(this.constudent);

    // Display the student list in the browser console.
    console.log(this.studentList);

    // Display the student name.
    console.log(this.studentName);

    // Change the value of studentName.
    this.studentName = 'Tharuka Name';

    // Display the updated student name.
    console.log('Updated studentName:', this.studentName);
  }

  // ==============================
  // METHOD / FUNCTION
  // ==============================

  // This method changes the student name.
  changeStudentName(): void {
    this.studentName = 'Tharuka';

    console.log('Student name changed:', this.studentName);
  }

  // This method displays student information.
  showStudentDetails(): void {
    console.log('Student Name:', this.studentName);
    console.log('Roll Number:', this.rollNumber);
    console.log('Is Student:', this.isStudent);
    console.log('Current Date:', this.currentDate);
  }
}
