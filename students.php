<?php

include 'header.php';

$names = ["Sarah B.", "Evan C.", "John G.", "Alissa J.", "Cam D.", "Alex F.", "George P.", "Dina T.", "John C.", "Georgia S.", "Constance M.", "Timmy T."];
$colors = ["red","blue","purple","green"];

?>

<div class = "container">
	<div class="row">
		<h1 class="center">Student List</h1>
	</div>

	<?php
		$colorAddition=0;
		foreach ($names as $index => $name){
			if($index%4 == 0){
				echo("<div class=\"row\">");
			}
			echo("<div class=\"col-md-3\">");
				echo("<div class='person center pieChart__".$colors[($index%4+$colorAddition)%4]."'>");
					echo("<a href='piechart.php?name=".$name."'>");
					echo("<img src=\"images/person.png\" alt=\"person\" class=\"personIcon icon\">");
					echo("</a>");
				echo("</div>");
				echo("<h2 class=\"center\">".$name."</h2>");
			echo("</div>");
			if(($index+1)%4==0){
				echo("</div>"); //end of row
				$colorAddition=$colorAddition+1;
			}

		}

	?>

</div>

<?php include 'footer.php'; ?>