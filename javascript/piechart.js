;( function() {
// data for the pie chart
  values1 = Math.floor((Math.random() * 50) + 1);
  values2 = Math.floor((Math.random() * 50) + 1);
  values3 = 50 - values1
  values4 = 50 - values2

  console.log("val1 is: "+values1);
  console.log("val2 is: "+values2);
  console.log("val3 is: "+values3);
  console.log("val4 is: "+values4);

  var data = {
    pieChart  : [
      {
        color       : 'red',
        description : 'Basketball',
        title       : 'Basketball',
        placement   : 20,
        value       : values1/100
      },
      {
        color       : 'blue',
        description : 'Frisbee',
        title       : 'Frisbee',
        placement   : 100,
        value       : values2/100
      },
      {
        color       : 'green',
        description : 'Soccer',
        title       : 'Soccer',
        placement   : 180,
        value       : values3/100
      },
      {
        color       : 'purple',
        description : 'Jump Rope',
        title       : 'Jump Rope',
        placement   : 260,
        value       : values4/100
      }
    ]
  };
  
  var DURATION = 1500;
  var DELAY    = 500;


  function drawPieChart( elementId, data ) {

    var containerEl = document.getElementById( elementId ),
        width       = containerEl.clientWidth,
        height      = width * 0.4,
        radius      = Math.min( width, height ) / 2,
        container   = d3.select( containerEl ),
        svg         = container.select( 'svg' )
                              .attr( 'width', width )
                              .attr( 'height', height );
    // puts pie chart in the center of the page
    var pie = svg.append( 'g' )
                .attr(
                  'transform',
                  'translate(' + width / 1.4 + ',' + height / 2 + ')'
                );
    
    var detailedInfo = svg.append( 'g' )
                          .attr( 'class', 'pieChart--detailedInformation' );

    var twoPi   = 2 * Math.PI;
    var pieData = d3.layout.pie()
                    .value( function( d ) { return d.value; } );

    var arc = d3.svg.arc()
                    .outerRadius( radius - 20)
                    .innerRadius( 0 );
    
    var pieChartPieces = pie.datum( data )
                            .selectAll( 'path' )
                            .data( pieData )
                            .enter()
                            .append( 'path' )
                            .attr( 'class', function( d ) {
                              return 'pieChart__' + d.data.color;
                            } )
                            .attr( 'filter', 'url(#pieChartInsetShadow)' )
                            .attr( 'd', arc )
                            .each( function() {
                              this._current = { startAngle: 0, endAngle: 0 }; 
                            } )
                            .transition()
                            .duration( DURATION )
                            .attrTween( 'd', function( d ) {
                              var interpolate = d3.interpolate( this._current, d );
                              this._current = interpolate( 0 );
                              return function( t ) {
                                return arc( interpolate( t ) );
                              };
                            } )
                            .each( 'end', function handleAnimationEnd( d ) {
                              drawDetailedInformation( d.data, this ); 
                            } );

    drawChartCenter(); 
    
    function drawChartCenter() {
      var centerContainer = pie.append( 'g' )
                                .attr( 'class', 'pieChart--center' );
      
      centerContainer.append( 'circle' )
                      .attr( 'class', 'pieChart--center--outerCircle' )
                      .attr( 'r', 0 )
                      .attr( 'filter', 'url(#pieChartDropShadow)' )
                      .transition()
                      .duration( DURATION )
                      .delay( DELAY )
                      .attr( 'r', radius - 50 );
      
      centerContainer.append( 'circle' )
                      .attr( 'id', 'pieChart-clippy' )
                      .attr( 'class', 'pieChart--center--innerCircle' )
                      .attr( 'r', 0 )
                      .transition()
                      .delay( DELAY )
                      .duration( DURATION )
                      .attr( 'r', radius - 55 )
                      .attr( 'fill', '#fff' );
    }
    
    function drawDetailedInformation ( data, element ) {
      var bBox      = element.getBBox(),
          infoWidth = width ,
          placement = data.placement,
          infoContainer,


        infoContainer = detailedInfo.append( 'g' )
                                    .attr( 'width', infoWidth )
                                    .attr(
                                      'transform',
                                      'translate(' + (120) + ',' + (placement + 10) + ')'
                                    );



      infoContainer.data( [ data.value * 100 ])
                    .append( 'text' )
                    .text ( '0 %' )
                    .attr( 'class', 'pieChart--detail--percentage ' )
                    .attr( 'x', 50 )
                    .attr( 'y', 50 )
                    .transition()
                    .duration( DURATION )
                    .tween( 'text', function( d ) {
                      var i = d3.interpolateRound(
                        +this.textContent.replace( /\s%/ig, '' ),
                        d
                      )

                      return function( t ) {
                        this.textContent = i( t ) + ' %  '+data.description;
                      };
                    }

                    )
                    infoContainer.data( [ data.description ] )
                    .append("foreignObject")
                    .append( 'xhtml:body' )
                    .attr(
                      'class',
                      'key_color pieChart__'+data.color
                    )
                    .append('color')
                    .attr(
                      'class',
                      'pieChart--detail--textContainer' 
                    );
    }
  }

  function ಠ_ಠ() {
    drawPieChart(     'pieChart',     data.pieChart );
  }
  ಠ_ಠ();

})();