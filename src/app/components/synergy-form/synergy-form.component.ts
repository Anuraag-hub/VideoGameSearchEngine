import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../../models'

@Component({
  selector: 'app-synergy-form',
  templateUrl: './synergy-form.component.html',
  styleUrls: ['./synergy-form.component.scss']
})
export class SynergyFormComponent implements OnInit {

  doc: Doctor;
  form: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, { validators: [Validators.required]}),
      specialities: new FormControl(null, { validators: [Validators.required]})
    })
  }

  onSavePost() {
    if(this.form.invalid){
        return;
    }
    this.addPost(this.form.value.name,this.form.value.specialities)
    this.form.reset();
}

  addPost(name: string, specialities: string) {
    const postData = new FormData();
    postData.append("name", name);
    postData.append("specialities", specialities);
    this.http.post<{ message: string, post: Doctor }>("https://dev-api.youthresourceapp.com/addDoctorSpecialities ", postData)
        .subscribe(res => {
            console.log("done",res);
        });
}

}
