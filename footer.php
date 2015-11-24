		<?php
			$url = $_SERVER["REQUEST_URI"];
			$lastSlash = strrpos($url, "/", -1);
			$endOfUrl = substr($url, $lastSlash+1);
			if($endOfUrl=="index.php"){
				echo("<nav class='navbar navbar-default navbar-fixed-bottom'>");

				echo("</nav>");
			}
			
		?>


		
	</body>
</html>