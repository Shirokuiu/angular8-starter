import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { Test1Component } from './components';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  providers: [],
  declarations: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
