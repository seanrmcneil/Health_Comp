;( function() {
// data for the pie chart
  var data = {
    pieChart  : [
      {
        color       : 'red',
        description : 'Basketball',
        title       : 'Basketball',
        value       : 0.12
      },
      {
        color       : 'blue',
        description : 'Frisbee',
        title       : 'Frisbee',
        value       : 0.18
      },
      {
        color       : 'green',
        description : 'Soccer',
        title       : 'Soccer',
        value       : 0.38
      },
      {
        color       : 'purple',
        description : 'Jump Rope',
        title       : 'Jump Rope',
        value       : 0.32
      }
    ]
  };
  
  var DURATION = 1500;
  var DELAY    = 500;

  /**
   * draw the fancy pie chart
   *
   * @param {String} elementId elementId
   * @param {Array}  data      data
   */
  function drawPieChart( elementId, data ) {
    // TODO code duplication check how you can avoid that
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
          anchor,
          infoContainer,
          position;

        infoContainer = detailedInfo.append( 'g' )
                                    .attr( 'width', infoWidth )
                                    .attr(
                                      'transform',
                                      'translate(' + (120) + ',' + ( bBox.height + bBox.y  + 60) + ')'
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
  
  // yeah, let's kick things off!!!
  ಠ_ಠ();
  
})();