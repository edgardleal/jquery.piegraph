jquery.piegraph
===============

jQuery plugin to render a Pie Graph with CSS

Exemple:
-------

    
> &lt;html&gt; <br />
>   &lt;head&gt;    <br />
>  &lt;link rel=&quot;stylesheet&quot; href=&quot;http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css&quot; /&gt; <br />
> &lt;script src=&quot;http://code.jquery.com/jquery-1.9.1.js&quot;&gt;&lt;/script&gt; <br />
> &lt;script src=&quot;http://code.jquery.com/ui/1.10.2/jquery-ui.js&quot;&gt;&lt;/script&gt; <br />
> &lt;script src=&quot;https://github.com/edgardleal/jquery.piegraph/raw/master/jquery.piegraph.js&quot;&gt;&lt;/script&gt; <br />
>      <br />
>   &lt;/head&gt; <br />
>   &lt;body&gt; <br />
>     &lt;div id=&quot;head&quot;&gt; <br />
>       Teste com gr&aacute;fico <br />
>     &lt;/div&gt; <br />
>    <br />
>     &lt;div id=&quot;chart&quot;&gt; <br />
>     &lt;/div&gt; <br />
>  <br />
>   &lt;script&gt; <br />
>      $(&quot;#chart&quot;).chart({data : new Array(90,90, 45, 10,5,25,15,30), <br />
>                     labels : new Array(&quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot;, &quot;F&quot;, &quot;G&quot;, &quot;H&quot;), <br />
>                     width : 400}); <br />
>    <br />
>   &lt;/script&gt; <br />
>  <br />
>   &lt;/body&gt; <br />
> &lt;/html&gt; <br />
>  <br />




Test the plugin:
[javascript.info](http://javascript.info/play/HxHQz "try it")

