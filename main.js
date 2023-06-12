var library = [ 
	{ 
	author: 'Bill Gates', 
	title: 'The Road Ahead', 
	readingStatus: true 
	},
	 {
		 author: 'Steve Jobs',
	 title: 'Walter Isaacson', 
	 readingStatus: true 
	 },
	 { 
	 author: 'Suzanne Collins',
	 title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false 
	 }
 ];

library.forEach(function(e){
	console.log(e)
	if(e.readingStatus==true){
		document.write(` Already read ${e.author} by ${e.title}. `)
		document.write("<br>")
	}
	else{
		document.write(` You still need to read ${e.title} by ${e.author}. `)
	}
});








// Output:

// Already read 'Bill Gates' by The Road Ahead. Already read 'Steve Jobs' by Walter Isaacson. You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collin




