var posicio_altura_carretera=167;
var amplada_cotxe=28;
var contador=0;
var aleatori_posicio_horitzontal;
var aleatori_trajectoria;
var temps_entre_cotxe_i_cotxe;
var aleatori_color;
var aleatori;
function aleatori()
    {
    aleatori_color=Math.floor(Math.random()*(16-1))+1;
    aleatori_posicio_horitzontal=Math.floor(Math.random()*(208-118))+118; // 236 - 118 - amplada cotxe
    aleatori_trajectoria=Math.random()*(1.2-0);
    temps_entre_cotxe_i_cotxe=Math.floor(Math.random()*(4000-1500))+1800;
    }
function cotxe_transit()
    {   
    if (posicio_altura_carretera<318)
        {       
        postMessage({colortransit: aleatori_color, ampladatransit: amplada_cotxe, horiztransit: aleatori_posicio_horitzontal, verttransit: posicio_altura_carretera, visible:"visible", numtransit: contador});
        posicio_altura_carretera+=1;
        amplada_cotxe=amplada_cotxe+((80-28)/(318-167)*1);
        aleatori_posicio_horitzontal=aleatori_posicio_horitzontal+aleatori_trajectoria-0.8;
        self.setTimeout(cotxe_transit,8);
        }
    else
        {
        postMessage({colortransit: aleatori_color, ampladatransit: amplada_cotxe, horiztransit: aleatori_posicio_horitzontal, verttransit: posicio_altura_carretera, visible:"hidden", numtransit: contador});
        posicio_altura_carretera=167;
        amplada_cotxe=28;
        }
    }
function global_transit()
    {
    contador++;
    aleatori();
    cotxe_transit();
    self.setTimeout(global_transit,temps_entre_cotxe_i_cotxe);
    }
global_transit();
