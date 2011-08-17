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
    var brush = /^brush:[\s]+(.*)/;
    var lang = [];
    // First, fix the PRE-brushes.
    $.each( $("pre").filter( function() {
        return lang.push( $(this).attr('class').match( brush ) );;
    }),
            function( i, cls ){
                $(cls).attr( 'class', "prettyprint lang-"+lang.pop()[1] );
            });

    //Now prettyprint.
    prettyPrint();
});
