//passing object into jquery. This set the document you want to run to ready mode.When it is ready it runs what is in the bracket
//the document means whatever we want can be tuned into a JQuery Object
$(document).ready(function(){

   //Instead passing object here we passing string just like how we pass id and classes for CSS.
    //We will type something here which will be searched and found
    //This means we writing a text into our html body tag. Though it won't be seen direct
    //in the browser but when you inspect browser it will be noticed.
    //if we execute this it
   // $('body').text('<strong>Hello World</strong>>');
   //Advantage of JQUERY: You can't only turn object into jquery object ...you can also search for them

    //We can print the content of document $(document) which will give you all object under it in Browser check...by writing;
   // console.log(document); //This will give you the document object
    //console.log($(document)); //this will give you jquery object that's like the .ready etc
   // console.log('We are ready');

    //JUST LIKE PASSING Jquery object here, one can also pass string which will serve as a selector. That work like class and Id in CSS for search.
   // $('body').text('Hello World');//This is a call to write a text into your body
    //$('body').text('<strong>Hello World</strong>');//Using text function will write whatever you write into the string as it is without formatting..so to let it print it as HTML Text use (.html) function,as seen below
    $('body').html('<strong>Hello World...!! </strong>');


});