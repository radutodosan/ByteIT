import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as ace from "ace-builds";
import {HttpClient} from "@angular/common/http";
import * as $ from 'jquery';


@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})
export class CompilerComponent implements  AfterViewInit{
  //@ts-ignore
  @ViewChild("editor") private editor: ElementRef<HTMLElement>;
  aceEditor:any;
  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.session.setValue("<h1>Ace Editor works great in Angular!</h1>");
  }


  constructor(private http: HttpClient) {
    // Initialize other components, services, etc.
  }


  executeCode() {
    const apiUrl = 'http://localhost/backend/compiler.php';  // Replace 'your_api_url' with the actual API endpoint


    const requestBody = {
      language: $("#languages").val(),
      code: this.aceEditor.getSession().getValue()
    };


    this.http.post(apiUrl, requestBody)
      .subscribe(
        (response: any) => {
          // Handle the success response here
          $(".output").text(response);
        },
        (error: any) => {
          // Handle the error response here
          console.error('Error:', error);
        }
      );
  }
}

