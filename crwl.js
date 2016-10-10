// Crwl.js
//=============== v0.1

//disconti,ued

var request = require("request");
var http = require('http');
var https = require('https');
var cheerio = require('cheerio');


var url = "https://www.deepdotweb.com/marketplace-directory/categories/markets/";
// 
//console.log( url.match(/[a-z2-7]{16}.onion/))


request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var url, name, rating;

            $('').filter(function(index) {
                
                
                var data = $(this);
                 url = $.toString();
                 
                 console.log(url)
                 console.log(error)
                  console.log("sqd")
            });
console.log(error)
            // $('.header').filter(function(){
            //     var data = $(this);
            //     title = data.children().first().text();
            
            //     // We will repeat the same process as above.  This time we notice that the release is located within the last element.
            //     // Writing this code will move us to the exact location of the release year.

            //     release = data.children().last().children().text();

            //     json.title = title;

            //     // Once again, once we have the data extract it we'll save it to our json object

            //     json.release = release;
            // })
        }
    })


////////////////////////////////////////////////////////////////////////////////


// name class:
// sabai-entity-permalink sabai-entity-id-3403 sabai-entity-type-content sabai-entity-bundle-name-directory-listing sabai-entity-bundle-type-directory-listing
//
// url class:
// // <div class="sabai-directory-field sabai-field-type-string sabai-field-name-field-forum sabai-clearfix">
//             <div class="sabai-field-label">Marketplace Forum Url:</div>
//             <div class="sabai-field-value">http://darkheroesfmmp6n.onion</div>
//         </div>




//https://www.deepdotweb.com/marketplace-directory/categories/markets/
//[a-z2-7]{16}.onion

/*
<div class="sabai-col-xs-9 sabai-directory-main">
    <div class="sabai-directory-title">
        <a href="https://www.deepdotweb.com/marketplace-directory/listing/darknet-heroes-league" title="Darknet Heroes League" class=" sabai-entity-permalink sabai-entity-id-3403 sabai-entity-type-content sabai-entity-bundle-name-directory-listing sabai-entity-bundle-type-directory-listing">Darknet Heroes League</a>        </div>
    <div class="sabai-directory-rating">
        <span class="sabai-rating sabai-rating-30" title="2.82 out of 5 stars"></span><span class="sabai-voting-rating-average" itemprop="ratingValue">2.82</span> (<span class="sabai-voting-rating-count"><a href="https://www.deepdotweb.com/marketplace-directory/listing/darknet-heroes-league/reviews"><span itemprop="reviewCount">22</span>        reviews</a>
        </span>) </div>
    <div class="sabai-directory-category">
        <a href="https://www.deepdotweb.com/marketplace-directory/categories/markets" class=" sabai-entity-permalink sabai-entity-id-48 sabai-entity-type-taxonomy sabai-entity-bundle-name-directory-listing-category sabai-entity-bundle-type-directory-category"><i class="fa fa-folder-open"></i> Markets</a>&nbsp;&nbsp;
        <a href="https://www.deepdotweb.com/marketplace-directory/categories/marketplaces" class=" sabai-entity-permalink sabai-entity-id-1 sabai-entity-type-taxonomy sabai-entity-bundle-name-directory-listing-category sabai-entity-bundle-type-directory-category"><i class="fa fa-folder-open"></i> Escrow Markets</a>
    </div>
    <div>
        <div class="sabai-directory-location">
        </div>
        <div class="sabai-directory-contact">
        </div>
        <div class="sabai-directory-social">
        </div>
    </div>
    <div class="sabai-directory-custom-fields">
        <div class="sabai-directory-field sabai-field-type-string sabai-field-name-field-market sabai-clearfix">
            <div class="sabai-field-label">Marketplace url:</div>
            <div class="sabai-field-value">http://darkheroesq46awl.onion</div>
        </div>
        <div class="sabai-directory-field sabai-field-type-string sabai-field-name-field-forum sabai-clearfix">
            <div class="sabai-field-label">Marketplace Forum Url:</div>
            <div class="sabai-field-value">http://darkheroesfmmp6n.onion</div>
        </div>
    </div>
    <div class="sabai-directory-body">
        <div style="margin-top:1%;margin-bottom: -3%;" class="sabai-field-label">Notes:</div>
        <p>Escrow market – Collection of old time vendors who were invited to sell on this market.</p>
    </div>
</div>
*/


//var regex = new RegExp("[a-z2-7]{16}.onion", 'g');