// function pillars(numPill, dist, width) {
//     let i = dist * 100;
//     let y = width;
//     if (numPill === 0){
//       return 0;
//     } else {
//       return (numPill - 1) * i + (numPill - 2) * y;
//     }
//   }
  
//   const result = pillars(5, 20, 20);
//   console.log(result);


function switchItUp(number) {
    switch (true) {
        case number === 0:
            return "Zero";
        case number === 1:
            return "One";
        case number === 2:
            return "Two";
        case number === 3:
            return "Three";
        case number === 4:
            return "Four";
        case number === 5:
            return "Five";
        case number === 6:
            return "Six";
        case number === 7:
            return "Seven";
        case number === 8:
            return "Eight";
        case number === 9:
            return "Nine";
        default:
            return undefined;
    }
}

console.log(switchItUp(4))