// // process.stdout.write('\x07'); // makes an alarm sound

let args = process.argv.slice(2) // array
function simpleTimer() {

  for (let i = 0; i < args.length; i++) {
     setTimeout(() => {
       process.stdout.write('\x07')
      },parseInt(args[i]) * 1000) ;
    }


// console.log(args);

}

simpleTimer();


//----------------------------------------------------------------

// let arg = process.argv.slice(2);

// arg.forEach((beep, index) => {
//   let interval = 0;
//   if (beep > 0) {
//     setTimeout(() => {
//       process.stdout.write('🚨🚨🚨');
//       if (index === arg.length) {
//         process.stdout.write('\n');
//       }
//     },beep * 500);
//   }
// });