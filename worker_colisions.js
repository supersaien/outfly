        /*    
        @licstart  The following is the entire license notice for the 
        JavaScript code in this page.

        Copyright (C) 2019  Bonjour

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
        */
var posicio_cotxe;
var posicio_transit_horiz;
var posicio_transit_vert;
self.onmessage = function(event) 
    {
    posicio_cotxe=event.data.cotxe;
    posicio_transit_horiz=event.data.horiz;
    posicio_transit_vert=event.data.vert;
    if (posicio_transit_vert>310 && ((posicio_cotxe+80)>(posicio_transit_horiz) && (posicio_cotxe)<(posicio_transit_horiz+80)))
        {
        postMessage("gameover");
        }
    else 
        {
        postMessage("gamerunning");
        }
    }

