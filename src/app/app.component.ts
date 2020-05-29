/*import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
(window as any).html2canvas = html2canvas;
import htmlToImage from 'html-to-image';
import { faRoad,faMobile,faEnvelope, faBook, faGamepad, faMusic} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('content') content: ElementRef;
  public downloadPDF(){
    let doc = new jsPDF();
    let specialElementHandlers={
      '#editor':function(element,renderer){
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.addHTML(content.innerHTML,0,0,{
    'width':100,
    'elementHandlers': specialElementHandlers
    },
    function (bla) { doc.save('saveInCallback.pdf'); },
    0);
  }
  name = 'jsPDF Example';

  faRoad = faRoad;
  faMobile = faMobile;
  faEnvelope = faEnvelope;
  faBook = faBook;
  faGamepad = faGamepad;
  faMusic = faMusic;
 
 
 

  constructor(private elementRef: ElementRef) {
    //super()
  }

  htmlToPdf() {
    let doc = new jsPDF('p', 'px', 'a4');
  
   doc.setTextColor(255, 0, 0)
   doc.text(20, 40, 'This is red.')
    let options = {
    pagesplit: true
    };
    
   doc.fromHTML(this.elementRef.nativeElement, 0, 0, options, ()=>{
      doc.save('Test.pdf');
   });
    //doc.save('Test.pdf');

}}*/

import { Component } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'pdf-image';
  downloadPDF(){
    const option = {
      filename:'cv.pdf',
      image:{type:'jpeg'},
      html2canvas:{},
      jsPDF:{orientation:'portrait'}
    };
    const content: Element = document.getElementById('CVcontent');
    html2pdf().from(content).set(option).save();
  }
}
