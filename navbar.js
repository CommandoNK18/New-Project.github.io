function gfgMenu() { 
    const GFG = document.querySelector('.links'); 
    if (GFG.classList.contains('d-none')) { 
        GFG.classList.remove('d-none'); 
    } 
    else { 
        GFG.classList.add('d-none'); 
    } 
} 
