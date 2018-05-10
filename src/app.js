import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('init');

const btn =  $('#btn');

const btnStream$ = Rx.Observable.fromEvent(btn,'click');

btnStream$.subscribe(function(e){
console.log('e');
},function(err){
	console.log(err);
},function(){
	console.log('completed!')
});
