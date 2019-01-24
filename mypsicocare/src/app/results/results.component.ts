import { Component, OnInit } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3';
import * as jquery from 'jquery';
//import * as jQuery from 'jquery';

import * as $ from "jquery";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor() { 

    let arrayrespuestas=JSON.parse(window.localStorage.getItem("enviorespuestas"));


      let R1=arrayrespuestas._respuesta1;
      let R2=arrayrespuestas._respuesta2;
      let R3=arrayrespuestas._respuesta3;
      let R4=arrayrespuestas._respuesta4;
      let R5=arrayrespuestas._respuesta5;


let Anxiety =(R1+R2+R3+R4+R5)*4;
let Stress =(R1+R2+R3+R4+R5)*2;
let Socialanxiety = (R1+R5)*4;
let Depression = (R1+R2+R3+R4+R5)*4;

console.log(Anxiety);
  


  window.localStorage.setItem("Anxiety",JSON.stringify(Anxiety));
	window.localStorage.setItem("Depression",JSON.stringify(Depression));
	window.localStorage.setItem("Socialanxiety",JSON.stringify(Socialanxiety));
	window.localStorage.setItem("Stress",JSON.stringify(Stress));

  

}

  ngOnInit() {



  //document.getElementById("progressbaranxiety").value= window.localStorage.getItem("anxiety");
 // document.getElementById("progressbardepression").value= window.localStorage.getItem("depression");
  //document.getElementById("progressbarstress").value= window.localStorage.getItem("stress");
  //document.getElementById("progressbarsocialanxiety").value= window.localStorage.getItem("socialanxiety");

  let array=["progressbardepression","progressbarsocialanxiety","progressbarstress","progressbaranxiety"];
  let arraystorage=["Depression","Socialanxiety","Stress","Anxiety"];

  for (let index = 0; index < array.length; index++) {

    let inputElement: HTMLInputElement = document.getElementById(array[index]) as HTMLInputElement
    inputElement.value=window.localStorage.getItem(arraystorage[index]);
    console.log(inputElement.value);

    
  }
  
 

  $(function(){
  

      let anxiety= parseInt(window.localStorage.getItem("Anxiety"))/10 ;

      let depression= parseInt(window.localStorage.getItem("Depression"))/10 ;
      let stress= parseInt(window.localStorage.getItem("Stress"))/10 ;
      let socialanxiety= parseInt(window.localStorage.getItem("Socialanxiety"))/10 ;

     
      (<any>$("#chart")).radarChart({
        size: [800, 400],
        step: 1,
        title: "",
        values: {
          "Anxiety": anxiety,
          "Depression": depression,
          "Social anxiety": socialanxiety,
          "Stress": stress,
       
        },
        showAxisLabels: true
      });
    });
    
    (function($) {
      
      var Radar = (function() {
        
        function Radar(ele, settings) {
          this.ele = ele;
          this.settings = $.extend({
            showAxisLabels: false,
            title: "Untitled",
            step: 1,
            size: [300,300],
            values: {},
            color: [0,128,255]
          },settings);
          this.width = settings.size[0];
          this.height = settings.size[1];
          $(ele).css({
            'position': 'relative',
            'width': this.width,
            'height': this.height
          });
          this.canvases = {};
          this.draw();
        }
        
        Radar.prototype.newCanvas = function(name, delay) {
          var delay = delay || 0;
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          $(canvas).css({
            'position': 'absolute'
          });
          this.canvases[name] = canvas;
          this.ele.appendChild(canvas);
          this.cxt = canvas.getContext('2d');
          if (delay != 0) {
            $(canvas).css('opacity',0).delay(delay).animate({opacity: 1}, 500);
          }
        }
        
        Radar.prototype.draw = function() {
          this.newCanvas('axis', 100);
          var min = 0;
          var max = 10;
          
          $.each(this.settings.values, function(i,val){
            if (val < min)
              min = val;
            if (val > max)
              max = val;
          });
          
          min = Math.floor(min);//Estos parametros te cambian el numero de circulos//
          max = Math.ceil(max);
    
          var spacing = 20;
          
          for(var i = min; i <= max; i += this.settings.step) {
            this.cxt.beginPath();
            this.cxt.arc(this.width/2,
                         this.height/2,
                         this.settings.step * spacing * i,
                         0, 2 * Math.PI, false);
            this.cxt.strokeStyle = "#666";
            this.cxt.fillStyle = "#444";
            this.cxt.stroke();
            if (this.settings.showAxisLabels)
              this.cxt.fillText(i,this.width/2 + this.settings.step * spacing * i+4, this.height/2-2);
          }
          
          var size = 0;
          for(var key in this.settings.values)
            size += 1;
          
          for(var i = 0; i < size; i += 1) {
            this.cxt.beginPath();
            this.cxt.moveTo(this.width / 2, this.height /2);
            var x = this.width / 2 + Math.cos((Math.PI * 2) * (i / size)) * spacing * max;
            var y = this.height /2 + Math.sin((Math.PI * 2) * (i / size)) * spacing * max;
            this.cxt.lineTo(x, y);
            this.cxt.stroke();
          }
          
          this.newCanvas('part',200);
          
          this.cxt.beginPath();
          var first = true;
          var i = 0;
          var that = this;
          var end = {x: null, y: null};
          $.each(this.settings.values, function(key,val){
            var x = that.width / 2 + Math.cos((Math.PI * 2) * (i / size)) * spacing * val;
            var y = that.height / 2 + Math.sin((Math.PI * 2) * (i / size)) * spacing * val;
            if (first) {
              that.cxt.moveTo(x, y);
              end.x = x;
              end.y = y;
              first = false;
            }
            that.cxt.lineTo(x, y);
            i += 1;
          });
          
          this.cxt.lineTo(end.x, end.y);
          var grad = this.cxt.createLinearGradient(0, 0, 0, this.height);
          grad.addColorStop(0,"rgba("+this.settings.color[0]+","+this.settings.color[1]+","+this.settings.color[2]+",0)");
          grad.addColorStop(1,"rgba("+this.settings.color[0]+","+this.settings.color[1]+","+this.settings.color[2]+",1)");
          this.cxt.fillStyle = grad;
          this.cxt.shadowBlur = 2;
          this.cxt.shadowColor = "rgba(0, 0, 0, .2)";
          this.cxt.stroke();
          this.cxt.fill();
          
          this.newCanvas('labels',1000);
          
          i = 0;
          $.each(this.settings.values, function(key,val){
            that.newCanvas('label-'+i, i * 250);
            that.cxt.fillStyle = "rgba(0,0,0,.8)";
            that.cxt.strokeStyle = "rgba(0,0,0,.5)";
            that.cxt.font = "bold 12px Verdana";
            var dist = Math.min(spacing * val, size * spacing);
            var x = that.width / 2 + Math.cos((Math.PI * 2) * (i / size)) * spacing * val;
            var y = that.height / 2 + Math.sin((Math.PI * 2) * (i / size)) * spacing * val;
    
            var textX = that.width / 2 + Math.cos((Math.PI * 2) * (i / size)) * spacing * val;
            var textY = that.height / 2 + Math.sin((Math.PI * 2) * (i / size)) * spacing * val * 1.5;
            
            if (textX < that.width/2) {
              textX -= 75
              that.cxt.textAlign="end";
              that.cxt.beginPath();
              var width = that.cxt.measureText(key).width;
              that.cxt.moveTo(textX - width - 5, textY + 4);
              that.cxt.lineTo(textX + 15, textY + 4);
              that.cxt.lineTo(x - 2, y);
              that.cxt.lineWidth = 2;
              that.cxt.stroke();
            } else {
              textX += 75
              that.cxt.textAlign="start";
              that.cxt.beginPath();
              var width = that.cxt.measureText(key).width;
              that.cxt.moveTo(x + 2,y);
              that.cxt.lineTo(textX - 15, textY + 4);
              that.cxt.lineTo(textX + width + 5, textY + 4);
              that.cxt.lineWidth = 2;
              that.cxt.stroke();
            }
            that.cxt.fillText(key, textX, textY);
            //For arrows that aren't done.
            i += 1;
          });
          
          
          this.newCanvas('title',1000);
          this.cxt.font = "bold 24px Verdana";
          this.cxt.fillText(this.settings.title, 10, 30); 
        }
        
        return Radar;
        
      })();
      

      let final:any =$.fn as any
      
      final.radarChart = function(settings){
        this.each(function(i,ele){
          var radar = new Radar(ele, settings);
        });
      }
      
    })(jquery);
  }

}
