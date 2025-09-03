// document.querySelectorAll('#slider-btns > a')
// console.log("I have a very funny teacher")
// console.log([1,2,3,4,5,][3])
// const integers= [80,90,100];
// for(const i of integers)console.log(i-5)
//     const animals =["Owl","hARpy","Sloth","pEnguin"];
// // console.log(animals.at(-1))
// // for(const a of animals){
// //     if(a.toLowerCase()===animals[1])continue;
// //     console.log(a.toLowerCase())
// // }

// function special(m,c){
//     console.log("I sing",m,"every",c,".")
// }
// special("songs","morning")
// function findsquare(n){
//     console.log(`The square of ${n} is ${n*n}.`)
// }
// findsquare(7);
   


























// const anchors = document.querySelectorAll('#slider-btns > a');
// for(const a of anchors){
//     a.addEventListener('click', () => {
//         // console.log(a.getAttribute('href'))
//         anchors.forEach((anc) => anc.classList.remove('on'))
//         a.classList.add('on');
//     })
// }
// const int=[2,4,6]
// for(const i of int)console.log(i*i,i*i*i)
// console.log(int.at(-3))
// int.push(8,10,12)
// console.log(int.at(-4))
// int.unshift(-2,-4);
// int.pop();
// int.shift();
// console.log(int.at(-4))
// console.log(int.includes(11))
// console.log(int.indexOf(10))
// int.push(100,200);
// console.log(int.length)
// document.querySelectorAll('.img').forEach(img=> {
//     img.addEventListener('click',(e) => {
//         document.querySelector('aside').classList.add('view');
//     })
// })
// document.querySelector('button.close').addEventListener('click', (e) => {
//     document.querySelector('aside').classList.remove('view')
// })
const confetti = document.querySelector('.confetti');
document.addEventListener('mousemove', (e) => {
        confetti.style.top=e.offsetY  + 'px';
        confetti.style.left=e.offsetX + 'px';
       
})