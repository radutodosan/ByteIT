import {AfterViewInit, Component} from '@angular/core';
import * as ace from "ace-builds";
import {HttpClient} from "@angular/common/http";
import * as $ from 'jquery';
import {AlertType} from "../enums/alert-type";
import {AlertService} from "../services/alert.service";


@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})
export class CompilerComponent implements  AfterViewInit{
  //@ts-ignore
  // @ViewChild("editor") private editor: ElementRef<HTMLElement>;
  // aceEditor:any;
  editor:any;
  ngAfterViewInit(): void {
    // ace.config.set("fontSize", "14px");
    // this.aceEditor = ace.edit(this.editor.nativeElement);
    // this.aceEditor.session.setValue("<h1>Ace Editor works great in Angular!</h1>");

      this.editor = ace.edit("editor");

  }


  constructor(
    private http: HttpClient,
    private alertService: AlertService,
  ) {}

  showAlert(type:AlertType, text:String){
    this.alertService.setAlert({
      type: type,
      text : text,
    });
  }

  executeCode() {
    const url = "http://localhost/backend/compiler.php";  // Replace 'your_api_url' with the actual API endpoint


    const data = {
      language: "py",
      code: this.editor.getSession().getValue()
    };

    console.log(data);

    this.http.post(url, data)
      .subscribe(
        (response: any) => {
          // Handle the success response here
          $(".output").text(response.output)
          console.log(response);
        },
        (error: any) => {
          // Handle the error response here
          console.error('Error:', error);
        }
      );


  }
}

