var punts=0;
function a_repetir()
    {
    punts=punts+1;
    postMessage(punts);
    self.setTimeout(a_repetir,200);
    }
a_repetir();
