# NearbyShops
Web Coding challenge by United Remote.

For the front end we will be using Angular as a framework and JavaScript/TypeScript as the main programming language.
Meanig all of what's coming forward has been experienced with using JavaScript.

We will be using the Here Places API to get the list of nearby shops. A Shop object has a title, a name and an id. So that when a place gets liked by the user we can recognzise and not show it in the list of proposed shops.

--------------------------------------------------------------------------------------
Outdated:

In order to complete the challenge we will need to get nearby shops from somewhere. We certainly won't enter them manually in our server so we will obviously get them from a free api. I chose to use the foursquare places api to get nearby shops (https://developer.foursquare.com/docs/api/venues/explore)

For some reason the api doesn't do well when I request nearby shops by my geolocation (by geolocation I mean latitude and longitude). But it does quite well when it's given the name of the city.

To solve this problem we will be calling another api wich will do reverse geolocation. We will be using the Here API (https://developer.here.com/documentation/geocoder/topics/resources.html).

Once we're sure these ingredients are ready, the rest won't be much of a trouble to accomplish.

For the backend I still haven't made my choice yet, but I am leaning towards Flask (Python3) or Rails (Ruby 2.5)


