import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('init');

const btn =  $('#btn');

const btnStream$ = Rx.Observable.fromEvent(btn,'click');

btnStream$.subscribe(function(e){
console.log(e);
},function(err){
	console.log(err);
},function(){
	console.log('completed!')
});
/*
const inputStream$ = Rx.Observable.fromEvent(input,'keyup');

inputStream$.subscribe(function(e){
console.log(e.currentTarget.value);
},function(err){
	console.log(err);
},function(){
	console.log('completed!')
});

const moveStream$ = Rx.Observable.fromEvent(document,'mousemove');

moveStream$.subscribe(function(e){
console.log(e.target.value);
//output.append('X: '  +  e.clientX  + ' Y : '  +e.clientY );
},function(err){
	console.log(err);
},function(){
	console.log('completed!')
});

const numbers = [33, 44, 55, 66, 77];
const numbers$ = Rx.Observable.from(numbers);
numbers$.subscribe(v=>{console.log(v)},
 err=>{console.log(err)},
 complete=>{console.log('completed')});

const  posts = [{title: 'Post One', body:'This is the body'},
{title: 'Post two', body:'This is the body'},
{title: 'Post three', body:'This is the body'}];

const posts$ = Rx.Observable.from(posts);

posts$.subscribe(post=>{
	console.log(post);
$('#posts').append(`<li>${post.title}</li>`);
},
 err=>{
 	console.log(err)},
 complete=>{
 	console.log('completed')});

const set  = new Set(['hi', 44, {title:'i am weird'}]);
//console.log(set);
const set$ = Rx.Observable.from(set);

set$.subscribe(obj=>{
	console.log(obj);
$('#set').append(`<li>${obj.title || obj}</li>`);
},
 err=>{
 	console.log(err);},
 complete=>{
 	console.log('completed');});

const map  = new Map([[1,2],[3,4],[5,6]]);
console.log(map);
const map$ = Rx.Observable.from(map);

map$.subscribe(obj=>{
	console.log(obj);
//$('#set').append(`<li>${obj.title || obj}</li>`);
},
 err=>{
 	console.log(err);},
 complete=>{
 	console.log('completed');
 });
 */
//OBSERVABLE  FROM SCRATCH
/*
 const source$ = new Rx.Observable(observer=>{
 	console.log('creating Observable');
 	observer.next('howdy world');
 	observer.next('howdy space');

 	observer.error(new Error('oops'));

 	setTimeout(()=>{
 		observer.next('yet another value');
 		observer.complete();
 	},3000);
 });

 source$
.catch(err=>Rx.Observable.of(err))
 .subscribe(x=>{
 	console.log(x);
 },
 err=>{
 	console.log(err);
 },
 complete=>{
 	console.log('completed');
 });

 */

 //OBSERVABLE FROM PROMISES

 const myPromise = new Promise((resolve, reject)=>{

 	console.log('creating promise');
 	setTimeout(()=>{
 		
 		resolve('hey from promise');
 		throw new Error('bleh');

 	},3000);
 });

/*
 myPromise
 .then(x=> 
 	console.log(x)
 )
 .catch(err=>
 	console.log(err)
 	);	
 	*/

 const source$ = Rx.Observable.fromPromise(myPromise);	

 source$.subscribe(x=>console.log(x));