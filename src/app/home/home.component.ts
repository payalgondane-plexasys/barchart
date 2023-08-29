import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from "../services/api.service";
import { ToastrService } from 'ngx-toastr';
import * as d3 from 'd3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  formSet!: FormGroup;
  chartData: any[] = [];
  submitted = false;
  constructor(private fb: FormBuilder,  private api: ApiService,private toastr: ToastrService) { }

 ngOnInit(): void {
  
  
    this.fetchChartData();
  }
 

  fetchChartData(): void {
    this.api.GET().subscribe(val => {
      this.chartData = val; 
      console.log("service data", this.chartData);
      
    });
  }



  deleteRow(id: number): void {
    this.api.deleteRecord(id).subscribe(() => {
      this.chartData = this.chartData.filter(item => item.id !== id);
      this.toastr.success("Delete Successfully!", "Barchart");
      this.fetchChartData();
      window.location.reload();
    });
  }
}
