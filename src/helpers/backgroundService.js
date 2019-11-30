module.exports = ()=>{
	let count = 0
	window.BackgroundService.start(
      t(),
    function() { console.log('err') }
)
	function t(){
	   let count = 0;
      setInterval(()=>{
	      console.log(`test ${count++}`)
      },1500);
	}
}