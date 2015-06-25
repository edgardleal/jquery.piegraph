/*global jQuery */

/*
 *
 *
 *
 * @author Edgard Leal <edgardleal@gmail.com>
 */
'use strict';
(function ($) {
  $.widget("ui.chart", {
      options : {
         width : 400,
         height : 200,
         data : null,
         labels : null      
      },
      colors = ["red", "green", "yellow", "grey",
                "blue", "lime", "orange", "purple"],
      
      _create : function(){
        var pierIndex = 0;
        var labelIndex = 0;
        var colorIndex = 0;
        
        var width = this.options.width;
        var height = width / 2;
        function getPier(deg){
           var cssSize = "width:" + height+ "px;height:" + height + "px;";
           var halfSize = height * .5;
           var commonCss = "position:absolute;clip : rect(" +
           halfSize + "px," +
           height + "px," + height + "px,0px);";
           var html =
           $("<div style='-moz-transform: rotate(" +
           pierIndex + "deg);-webkit-transform: rotate(" +
           pierIndex + "deg);" + cssSize + commonCss +
           "'><a href='#' class='pier' style='-moz-transform:rotate(" +
           (deg - 180) + "deg);-webkit-transform:rotate(" +
           (deg - 180) + "deg);" + cssSize + commonCss + "border-radius:" +
           height + "px;box-shadow : inset 0 0 8px black;background:" +
           this.colors[(colorIndex++ % this.colors.length)] +
           "' title='" + deg + "'></a></div>");
           pierIndex += deg;
           return html;
        }              
        
        this.element.css('width', width + 'px')
        .css('height',height + 'px')
        .toggleClass('ui-state-default');
        var total = 0;
        if(this.options.labels == null)
          this.options.labels = new Array();
        for(var i = 0; i < this.options.data.length;i++){
          if(this.options.labels[i]==undefined)
            this.options.labels[i] = "";
          total += this.options.data[i];
        }
          
        this._createLabels();   
        for(var i = 0 ; i < this.options.data.length; i++)
          this.element.append(getPier((360/total) * this.options.data[i]));
      } ,
      
      _createLabels : function(){
          var left = this.options.width * 0.6;
          var rows  = "";
          for(var i = 0 ; i < this.options.data.length ; i++){
            rows += "<tr><td style='background-color: " +
            this.colors[i%this.colors.length] + "'></td><td>" +
            this.options.data[i] + "</td><td>"+
                this.options.labels[i] +
            "</td></tr>";
          }
            
          this.element.append("<table style='position:absolute;left: " +
          left + "px;'>" +
          
          rows +
          
          "</table>");
      }
  });
})(jQuery);
