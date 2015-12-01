<?php

include 'header.php';
$name = $_GET["name"];
$type = $_GET["type"];
$points = rand (20 , 90);
$points2 = rand($points, $points+100);

?>
<div class="container">
  <div class="row">
    <h1 class="center"><?php echo($name); ?></h1>
  </div>
  <div class="row">
    <div class="col-md-12">
      <ul>
        <li class="chart">
          <div id="pieChart">
            <svg id="pieChartSVG">
              <defs>
                <filter id='pieChartInsetShadow'>
                  <feOffset dx='0' dy='0'/>
                  <feGaussianBlur stdDeviation='3' result='offset-blur' />
                  <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse' />
                  <feFlood flood-color='black' flood-opacity='1' result='color' />
                  <feComposite operator='in' in='color' in2='inverse' result='shadow' />
                  <feComposite operator='over' in='shadow' in2='SourceGraphic' />
                </filter>
                <filter id="pieChartDropShadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                  <feOffset in="blur" dx="0" dy="3" result="offsetBlur" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>
        </li>
        <li> 
          <h2 class="center"><?php echo($points2); ?> points</h2>
          <div class="progress center">
            <div class="progress-bar" role="progressbar" aria-valuenow="100"
            aria-valuemin="0" aria-valuemax="100" style="width:<?php echo($points); ?>%">
            <?php echo($points); ?>%
          </div>
        </div>
      </li>
    </ul>
  </div> 
  <?php
    if($type=="school" && $name!="PS 184"){
      echo("<div class='row'>");
      echo("<div class='col-md-12 center'>");
      echo("<img src='images/contactButton.png' alt='contactButton' id='contactButton'>");
      echo("</div>");
      echo("</div>");
      echo("<div id='emailForm'>");
      echo("<div class='container'>");
        echo("<form role='form'>");
          echo("<div class='form-group col-lg-6'>");
            echo("<label for='email'>Name:</label>");
            echo("<input type='text' class='form-control' id='name' placeholder='Enter your name'>");
          echo("</div>");
          echo("<div class='form-group col-lg-6'>");
            echo("<label for='pwd'>Email:</label>");
            echo("<input type='email' class='form-control' id='email' placeholder='Enter Your Email'>");
          echo("</div>");
          echo("<div class='form-group col-lg-12'>");
            echo("<label for='comment'>Message:</label>");
            echo("<textarea class='form-control' rows='5' id='comment'></textarea>");
          echo("</div>");
          echo("<button type='submit' class='btn btn-default submitButton'>Submit</button>");
        echo("</form>");
      echo("</div>");
    echo("</div>");
    }

  ?>


</div>
</div>

<script src="javascript/piechart.js"></script>

<?php include 'footer.php'; ?>
