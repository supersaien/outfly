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

