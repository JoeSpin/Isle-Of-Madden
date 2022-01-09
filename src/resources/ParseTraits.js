import { findAllByDisplayValue } from "@testing-library/dom";

export function parseCoverBall(trait) { 
    if (trait === 1) { 
        return "Never cover ball";
    }else if (trait === 2) { 
        return "Cover Ball on Big Hits"; 
    }else if (trait === 3) { 
        return "Cover Ball on Medium Hits";
    }else if (trait === 4) { 
        return "Cover Ball on All Hits";
    }
}


export function parseForcePass(trait){ 
    if (trait === 0){ 
        return "Conservative Force Pass";
    }else if (trait === 1) { 
        return "Ideal Force Pass";
    }else if (trait === 2) { 
        return "Aggressive Force Pass";
    }
}

export function parsePenalty(trait) { 
    if (trait === 0){ 
        return "Undisciplined Penalty";
    }else if (trait === 1) { 
        return "Balanced Penalty";
    }else if (trait === 2){  
        return "Discplined Penalty";
    }
}

export function parsePlayBall(trait) { 
    if (trait ===  0){ 
        return "Conservative Play Ball";
    }else if (trait === 1){ 
        return "Balanced Play Ball";
    }else if (trait === 2) { 
        return "Aggressive Play Ball";
    }
}

export function parseSensePressure(trait) { 
    if (trait === 0) { 
        return "Paranoid Sense of Pressure";
    }else if (trait === 1){  
        return "Trigger Happy Sense of Pressure";
    }else if (trait === 2) { 
        return "Ideal Sense of Pressure";
    }else if (trait === 3) { 
        return "Average Sense of Pressure";
    }else if (trait === 4) { 
        return "Oblivious Sense of Pressure";
    }
}
