<?php
include('header.php');
?>
<div class="container">
<div class="row">
<h1 class="center">Points by State</h1>
<div class="center">
<div id="tooltip"></div><!-- div to hold tooltip. -->
<svg width="960" height="600" id="statesvg"></svg> <!-- svg to hold the map. -->
</div>
</div>
</div>

<script src="javascript/map.js"></script>

<?php
include('footer.php');
?>