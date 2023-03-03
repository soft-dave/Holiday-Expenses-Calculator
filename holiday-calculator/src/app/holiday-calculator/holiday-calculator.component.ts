import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-holiday-calculator',
  templateUrl: './holiday-calculator.component.html',
  styleUrls: ['./holiday-calculator.component.css']
})
export class HolidayCalculatorComponent {
  expenseForm!: FormGroup;
  public calculateData:any

  constructor(
    private fb : FormBuilder,
    private calculateService:CalculateService
  ){}

  ngOnInit(){
    this.expenseForm = this.fb.group({
      expenses: this.fb.array([
        this.fb.group({
          name: [ ,Validators.required],
          amount: [, Validators.required]
        })
      ])
    });
  }

  get itemsFromArray() {
    return this.expenseForm.get('expenses') as FormArray; 
  }

  submit(){
    this.calculateData = undefined
    this.calculateService.calculateData(this.expenseForm.value).subscribe({
      next:(res:any)=>{
        this.calculateData = res.data
      },
      error:(e)=>{
        console.log(e)
      },
      complete:()=>{
        console.log('completed')
      }
    })
  }

  removeItem(i:any){
    this.itemsFromArray.controls.splice(i, 1);
    this.expenseForm.value.expenses.splice(i, 1)
  }

  addItem() {

    const newItem = this.fb.group({
      name: [ ,Validators.required],
      amount: [ ,Validators.required],
    });

    (<FormArray>this.itemsFromArray).push(newItem);
  }
}
