/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
let nonFaceCard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
let faceCard = ["J", "Q", "K"]
let aceCard = ["1", "11"] /*needs A1=1 & A2=11?

/*hand is an array*/

function handValue (hand) {
  for(let i = 0; i<hand.length; i++){
    if (hand[i] === nonFaceCard[i]){
      return Number(hand[i])
      let nFCval = Number(hand[i])
    } else if (hand[i]) === faceCard[i]){
      return faceCard[i]
      let fCval =
    }
  }


  return;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
