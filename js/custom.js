function printDiv(divName){
    console.log(divName);
    var printContents = document.getElementById(divName).innerHTML;
    console.log(printContents);
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;

}

// var bar = new ProgressBar.Line(container, {
//     strokeWidth: 4,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#FFEA82',
//     trailColor: '#eee',
//     trailWidth: 1,
//     svgStyle: {width: '100%', height: '100%'},
//     from: {color: '#FFEA82'},
//     to: {color: '#ED6A5A'},
//     step: (state, bar) => {
//       bar.path.setAttribute('stroke', state.color);
//     }
//   });
  
//   bar.animate(1.0);  // Number from 0.0 to 1.0