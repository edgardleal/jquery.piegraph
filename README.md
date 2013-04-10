jquery.piegraph
===============

jQuery plugin to render a Pie Graph with CSS

Exemple:

<!DOCTYPE HTML>
<html>
  <head>   
 <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
  <link rel="stylesheet" href="style.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>   
<script src="https://github.com/edgardleal/jquery.piegraph/raw/master/jquery.piegraph.js"></script>    
  </head>
  <body>
    <div id="head">
      Teste com gráfico
    </div>
    <div id="chart" style="left : 10%;">
    </div>
  <script>
     $("#chart").chart({data : new Array(90,90, 45, 10,5,25,15,30),
                    labels : new Array("A", "B", "C", "D", "E", "F", "G", "H"),
                    width : 400});
  </script>

  </body>
</html>

Test the plugin:
http://javascript.info/play/X4DS9
