//**
//  create a category array - women, men, etc.
//  parse url
//  determine if product page or cart
//  listen for "add to cart"
//  if product page -> get product and add 1 point.
//  if cart page - > get score then add 3 points per cart item
//
//Category vs. Cart

  var url                 = window.location.href;
  var cartPageURL         = url.match(/^.+\/checkout\//i, "");
  var productPageURL      = url.match(/\/shop\//i);
// var newArrivalsPageURL = url;
  var womenCategory       = utag_data.product_category[0].includes('women');
  var menCategory         = utag_data.product_category[0].includes('men');
  var homeCategory        = utag_data.product_category[0].includes('home');
  var beautyCategory      = utag_data.product_category[0].includes('beauty');
  var lifestyleCategroy   = utag_data.product_category[0].includes('lifestyle');

  const productViewWeight        = 1;
  const productAddedToCartWeight = 3;

// JSON object to hold the user's score values

var CSE_Challenge = {
    womens: 0,
    mens: 0,
    home: 0,
    lifestyle: 0,
    beauty: 0,
};


var addToCartButton = document.getElementsByClassName(".dom-add-to-cart");


  //Get User's affinity categories from local storage
  function getUserAffinity() {
    chrome.storage.get(['CSE_Challenge'], function(result) {
     return console.log('Value currently is ' + result.CSE_Challenge);
    });
  }

  //Save User's affinity to local storage
  function setUserAffinity() {
    chrome.storage.local.set({'CSE_Challenge': value}, function() {
     return console.log('Value is set to ' + value);
    });
  }

function incrementProductCategoryScore() {
    //determine which product to increment
    Object.keys(CSE_Challenge).forEach(function(key,index) {
        if(utag_data.product_category[0].includes(key)){
            CSE_Challenge[key] =+1
        }
    });
    chrome.storage.local.set('CSE_Challenge',CSE_Challenge);
    return console.log('localstorage /n' + JSON.stringify(CSE_Challenge));
}


  //Write User affinity score to local storage
  function writeUserAffinity() {
    /*
    *  Read from storage
    *  Determine page url logic
    *  update based on page options
    * */

    //Get current value of user affinity
    this.CSE_Challenge = getUserAffinity();

    //determine what type of page the user is viewing
    // #1 product page
          // add score to product
          //- listen for add to cart click event

    //Check if user is viewing product page
    if(url.match(productPageURL)){

      //determine category & add score
      incrementProductCategoryScore();
    }

    else if(url.match(cartPageURL)){

    }





    // #2 cart

    // #3 new arrivals
        //reorder products




  }
