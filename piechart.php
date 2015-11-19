<?php

include 'header.php';
$name = $_GET["name"];

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
  </ul>
</div> 

</div>
</div>
    <script src='http://d3js.org/d3.v3.min.js'></script>

    <script src="javascript/piechart.js"></script>

<?php include 'footer.php'; ?>
