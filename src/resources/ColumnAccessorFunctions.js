export function convertTrait(inTrait) { 
    let outTrait;
    switch (inTrait) { 
        case 0: 
            outTrait = 'Normal';break;
        case 1:
            outTrait = 'Star';break;
        case 2: 
            outTrait = 'SuperStar';break;
        case 3:
            outTrait = 'X-Factor';break;
        default: 
            outTrait = 'null';
    }
    return outTrait;
}

export function convertHeight(inHeight) { 
    let feet = Math.trunc(inHeight / 12); 
    if (inHeight % 12 !== 0){ 
        return `${feet}'${inHeight % 12}"`; 
    }else { 
        return `${feet}'`;
    }
}