import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  form: FormGroup; 
  bmi: number;
  height: number;
  weight: number;
  bmiItemArray =[];
 // bmiItemAdd = {height:0,weight:0,bmi:0};
  @Output() delete = new EventEmitter();

  onDelete(){
    console.log('deleted');
    this.delete.emit();
    console.log("emitted")
    //this.bmiItemArray =[];
  }
  ngOnInit() {
    this.form = new FormGroup({
      weight: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')
        ])),
      height: new FormControl('',Validators.required)
    });
  }
  onSubmit(bmiItem){
    console.log(bmiItem,"here");
    this.calculate(bmiItem);
    this.height = bmiItem.height;
    this.weight = bmiItem.weight;

    this.bmiItemArray.push({height:this.height,weight:this.weight,bmi:this.bmi})
    console.log(this.bmiItemArray);

  }
  calculate(data){
    console.log("calculating bmi")
    this.bmi = data.weight/(data.height * data.height)

  }

  onBmiItemDelete(event){
    //console.log(bmiItem, array);
    console.log("delete event", event)
    //this.bmiItemArray =[];
   
   }
}
