function DeadKeys(keys, target, menu) {
    var poss = [], stepArr = [], firstLetter = "";
    keys = keys.split("");
    for(j=0;j<keys.length;j++){
        for(i=0;i<menu.length;i++){
            var cur = menu[i].split("");
            if(poss.length>0) firstLetter = poss[poss.length-1][0].split("")[0];
            if(keys[j] === cur[0] && keys[j] !== firstLetter){
                poss.push([]);
                poss[poss.length-1].push(cur.join(""));
            } else if (keys[j] === cur[0]) {
                poss[poss.length-1].push(cur.join(""));
            }
        }
    }
    for(k=0;k<poss.length;k++){
        var count = 1;
        for(m=0;m<poss[k].length;m++){
            var trying = poss[k][m].split("");
            for(z=0;z<trying.length;z++){
                if(trying[z] === target){
                    stepArr.push(count);
                }
            }
            count++;
        }
    }
    console.log(stepArr)
    return Math.min(...stepArr);
}
