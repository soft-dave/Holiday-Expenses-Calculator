import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayCalculatorComponent } from './holiday-calculator/holiday-calculator.component';

const routes: Routes = [
  {path:'', redirectTo:'holiday-calculator', pathMatch:'full'},
  {path:'holiday-calculator', component:HolidayCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
