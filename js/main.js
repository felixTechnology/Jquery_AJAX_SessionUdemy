//passing object into jquery. This set the document you want to run to ready mode.When it is ready it runs what is in the bracket
//the document means whatever we want can be tuned into a JQuery Object
$(document).ready(function(){ //call back function

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
  //$('body').html('<strong>Hello World...!! </strong>');

    //This is appending a class from CSS File which is not defined in html and appending it to an element tag with an ID (#fire)

    $(document).ready(function (){
        //$('#church').addClass('highlight');
        //$('.general').addClass('highlight');//targeting class called general
        //$('#container >>> .middle').addClass('higlight');//targeting class called .middle
                                                           //This won't allow the immediate children to be effected because there is particular selection element by class names
                                                            // >>> is used to select sub-children in levels
        //How to select part of a list with same ID name. You want to choose sub element and ignore parent element

        //It means find the div container and locate input tags and apply a css class to it.This will apply on all input but to select the ones you want,follow what is next to this command
        //$('#container input').addClass('highlight');
       // $('#container input:required').addClass('highlight');//we use colon and the identification 'required to select the ones needed

        //Assuming out of the fields which are required you want to select only one to have the CSS Color applied on it, you go by the below;
        //$('#container input[placeholder=E-mail]').addClass('highlight');
        //$('#container input[placeholder="Last Name"]').addClass('highlight'); //whenever your placeholder has more than one word you provide double quotes


        //Assuming you want to sellect FirstName and Last Name together you go by introducing the asterix with the common word Name
       // $('#container input[placeholder*=Name]').addClass('highlight');

      //Finding element using TRAVERSING/Finding Element
        //console.log($('#container').find('.hot'));//this will give you a log of all the items under a div with ID Container which has a sub-div with a class HOT

        //console.log($('#container').find('.hot').children('.non-solid')); //This is traversing container and specifically filtering for the children which is the nearest first div element closer to the container div
        /*console.log($('#container').find('.hot').children('.non-solid').addClass('highlight'));*/ //adding css colors to test our children div
       // console.log($('#container').find('.hot').children('.solid').addClass('highlight'));

       //Using NEXT
        //Assuming to want to give effect to selected items in a list items.This will select 1st item
       // console.log($('#container').find('.hot').children().first().addClass('highlight'));
        //console.log($('#container').find('.hot').children().last().addClass('highlight'));
       // console.log($('#container').find('.hot').children().first().next().addClass('highlight'));
        //console.log($('#container').find('.hot').children().last().prev().addClass('highlight'));


    })


});