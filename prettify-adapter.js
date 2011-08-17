// Author: Sai Charan K.
// Distributed without warranties or conditions of any kind, either
// express or implied except those under the CC BY-NC 3.0 license.
// You may obtain a copy of the license at:
//
// http://creativecommons.org/licenses/by-nc/3.0/

// Depends on jQuery (currently tested with version 1.6.2)
// 
// Aims to:
// 1. Transform <pre class="brush: cpp"> into <pre class="prettyprint lang-cpp">

$(document).ready(function() {
    var brush = /^brush:\s+(.*)/;

    // First, fix the PRE-brushes.
    $.each( $("pre").filter( function() {
                                 return $(this).attr('class').match( brush );
                             }),
            function( i, cls ){
                $(cls).attr( 'class', "prettyprint lang-"+ $(cls).attr('class').match( brush )[1] );
            });

    $.each( $("pre").filter( function() {
        return $(this).attr('class').match( /^prettyprint/ );
    }),
            function( i, cls ){
                    //alert( $(cls).attr('class').match( brush )[1] );
                $(cls).attr( 'class', "noprettyprint");
            });

    //Now prettyprint.
    prettyPrint();
});
