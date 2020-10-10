var cart = 0;
function addItems (id, name, description ,price, moreInfo ){
    let html = '';
    html += '<div class="item" data-id="'+ id +'">';
    html +=  '<div class="name">' + name +' </div>';
    html += '<img src="assets/pexels-photo-1640777.jpeg" alt="">';
    html += '<div class="description">' + description + '</div>'

    html += '<div class="price">' + price +'</div>';
    html += '<button class="item-add">Add to Cart</button>';
    html += '<button class="item-remove">Remove</button>';
    html +='</br>';
    html += '<a href="" class="more-info-link">More Info</a>'
    html +='<div class="more-info"> ' + moreInfo +'</div>';
    html +='</div>';

    /*$('#container').append(html);*/
    $('#container').prepend(html);


}




//passing object into jquery. This set the document you want to run to ready mode.When it is ready it runs what is in the bracket
//the document means whatever we want can be tuned into a JQuery Object
//$(document).ready(function(){ //call back function

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


        //PARENT
        //assuming you are targeting an element inside a PARENT element and using its ID to target the parent and effect change on all element under it
       /* console.log($('#snow').parent().addClass('highlight'));*/
       /* $('#snow').parent().addClass('highlight');*/

        //You can use parent to go up,children to go down
       // $('#snow').parent().find('.title').addClass('highlight');

        //console.log($('#snow').parents()); //this help to inspect the elements which are parents to know wherever your elements are located

        //This helps you to find the closes parent with satisfy a particular selector you want to target
        //console.log($('#snow').closest('.temperature'));
        //console.log($('#snow').closest('#container'));

     /*   $('.box').on('click', function () {

            //console.log('hello')
            //$('.box').addClass('highlight');

            //we can improve the code above commented .box . We can replace it with $(this) which literally means it holds in reference within this $('.box').on('click', function ()
            //$(this).addClass('highlight'); //This will add the class if we have it but to remove-and-add we call it toggle
            $(this).toggleClass('highlight');
        })*/

        //adding an ID of an element '.box-button' ..we call it event-delegation
       /* $('.box').on('click',  '.box-button',function () {

            
            $(this).parent().toggleClass('highlight');
        })*/

      /*  $('#select-menu').on('change', function (){

            //console.log('HeLLO');
            //console.log($('#select-menu option:selected'));//Use this to print the selected filter object in console

            //console.log($('#select-menu option:selected').val()); //the val() will print the value of content selected
          //  console.log($('#select-menu option:selected').text());//this will print the name of the option

           let name =$('#select-menu option:selected').text();
            let distance =$('#select-menu option:selected').val();
            let price =$('#select-menu option:selected').data('price');

            console.log(price);

            $('#feedback-message').text('You are signing up for a '+ name + ' , which cost ' + price + ' , to a distance of ' + distance + ' km ' );

        })*/



      /*  $('#select-menu').on('change', function (){

            //console.log('HeLLO');
            //console.log($('#select-menu option:selected'));//Use this to print the selected filter object in console

            //console.log($('#select-menu option:selected').val()); //the val() will print the value of content selected
            //  console.log($('#select-menu option:selected').text());//this will print the name of the option

            let name =$('#select-menu option:selected').text();
            let distance =$('#select-menu option:selected').val();
            let price =$('#select-menu option:selected').data('price');

            console.log(price);

            if (distance) {
                $('#feedback-message').text('You are signing up for a ' + name + ' , which cost ' + price + ' , to a distance of ' + distance + ' km ');

            }else{
               /!* $('#feedback-message').text('');*!/
                $('#feedback-message').empty();
            }
        })*/

      /*  $('#input-name').on('keyup',function (){

            let name = $(this).val();
           // console.log('Press!!')
            $('#feedback-message').text('Pleased to meet you,' + name)
        })

        $('a').on('click',function (event){
            event.preventDefault();
            $('#feedback-message').text('That\'s fine,' + name)

        })*/

        /******************************Above Code is For practice***************************************/
     /*Listening to the click effect of button*/
        /*First paramenter in the .on method is CLICK and second parameter is a call back function*/
    /* $('#button-create-item').on('click', function (

     ){
        /!*When we click we need to get the name of the new item,if anything is typed in the field *!/
         let name = $('#input-create-item').val();
         //console.log(name);

         //After saving in name (let name) ,we need to clear the content afterward
         //In Jquery we have what returns a value (.value()) and what write (.value(''))
         $('#input-create-item').val('');

        /!* let html = ' ';
         html += '<div class="item">';
           html +=  '<div class="name">' + name +' </div>';
             html += '<img src="assets/pexels-photo-1640777.jpeg" alt="">';
                 html +=`<div class="description">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Esse inventore nostrum officiis quidem quis. Ad corporis,
                     dolore dolores eius,
                 </div>`

                 html += '<div class="price">GHC 499</div>';
                 html += '<button class="item-add">Add to Cart</button>';
                 html += '<button class="item-remove">Remove</button>';
                 html +='</br>';
                    html += '<a href="" class="more-info-link">More info</a>'
                     html +='<div class="more-info">eveniet ex fugit laboriosam maxime molestiae nemo quasi, rem sint ut.</div>';
        html +='</div>';

        /!*$('#container').append(html);*!/
         $('#container').prepend(html);*!/
     });*/

     //Removing an item from a list. we will first search for the container, search for the item remove class,
     //

        //REMOVING ITEM THIS WAY WILL ONLY WORK ON EXISTING ITEM BUT WONT WORK ON PRECEEDING ITEMS..SO TO MAKE IT DYNAMIC DO AS BELOW THIS
        /*$('#container .item-remove').on('click',function () {

           //console.log('Legon'); //if it print to console it means it works

            $(this).parent().remove();//this is used to remove item.

            //to empty content within a div we use empty();
           // $(this).parent().remove(); //example but not used in project
        })*/

        /*Add animation video 21. */
        $('#container').on('click','.more-info-link',function (event) {

            event.preventDefault();

            /*$(this).parent().find('.more-info').show();*/
           // $(this).parent().find('.more-info').toggle(1000);
            //$(this).parent().find('.more-info').toggle('fast');
           // $(this).parent().find('.more-info').toggle('slow');
           // $(this).parent().find('.more-info').toggle(1000);
           // $(this).parent().find('.more-info').slideToggle('slow');
            $(this).parent().find('.more-info').slideToggle(1000);

            $(this)
                .animate({"opacity":0.5,"margin-left": 10}, 'fast')
                .animate({"opacity":1.0,"margin-left": 0}, 'fast')
        });


        $('#container').on('click','.item-remove',function () {

            //console.log('Legon'); //if it print to console it means it works

            $(this).parent().remove();//this is used to remove item.

            //to empty content within a div we use empty();
            // $(this).parent().remove(); //example but not used in project
        });

        /*To be able to do ajax we need to install NODEJS using your terminal
        * npm install -g node-http-server#
        *
        * We have a function and inside it we hhave what we want to receive(data/item.json) and we have callable function that returns
        *If we first refresh the page we will have an error
        * */
        /*$.ajax('data/item.json') *///What is done currently will mean everything will be cached within the local server.//We downloading items of the webstore and it's important it's updated all the time..but this JSON
        $.ajax('data/item.json',{
             dataType: 'json',
             contentType: 'json',
             cache: false
        })//PASSING OBJECT AS PROPERTY OF SECOND PARAMETER
            //console.log(response);

            .done(function (response) { //called whenever this ajax operation finishes executing and it receives the function as a parameter
         /*     console.log(response);*/
                /*console.log('Ghana is great');*/
                let items = response.items;
                /*console.log(items);*/
                //Iterating over every element to build new element
                items.forEach(function (item) {
                  // console.log(item);
                   addItems(item.id,item.name,item.description,item.price,item.moreInfo);
                });

            })

            .fail(function (request, errorType,errorMessage)
            {
                 console.log(errorMessage)

              }) //the fail function will receives more function as possible because it will give more infor on what happened

            .always(function () {

            });


        $('#container').on('click','.item-add',function(){

            let id = $(this).parent().data('id')
            //console.log(id);
            $.ajax('data/addToCart.json', {
                type: 'post',
                data: { id: id},//creating an object which has a parameter called id AND HAVING ITS Value from .data('id') passed to it
                dataType: 'json',
                contentType: 'application/json',

            })

                .done(function (response) {
                    //console.log(response)

                    if (response.message === 'success'){

                        let price = response.price;
                        console.log(price);

                        cart += price;

                        $('#cart-container').text(' GHC ' + cart)

                    }

                })
    });


        $('#newsletter-checkbox').on('change',function () {

            if ($(this).is(':checked')){
               // console.log('Yes');
                $('#newsletter-frequency').fadeIn();
              /*  $('#newsletter-frequency').show();*/
            }else{
                /* console.log('No')*/

               /* $('#newsletter-frequency').hide();*/
                $('#newsletter-frequency').fadeOut();
            }

        })

        $('#newsletter-checkbox').trigger('change');


    })

//});