<?php

include 'header.php';

$names = ["PS 189", "St. Mary's", "PS 130", "PS 43", "Ridgemoore High", "William Mckinley", "PS 29", "Degrassi", "Ramaz Middle School", "Oak Grove", "Central School"];
$colors = ["red","blue","purple","green"];
?>

<div class = "container">
	<div class="row">
		<h1 class="center">School List</h1>
		<a href = "map.php"><h4 class="center">Points by State</h4></a>
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
					echo("<img src=\"images/schoolWhite.png\" alt=\"person\" class=\"personIcon icon\">");
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