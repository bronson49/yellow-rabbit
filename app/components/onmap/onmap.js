const onmapFunc = function () {
    let slider = $('.onmap-slider-body').slick({
        prevArrow: $('.onmap-prev'),
        nextArrow: $('.onmap-next'),
        dots: true ,
    });



    function loadScripts( src, callback ) {
        let script = document.createElement("SCRIPT"),
            head = document.getElementsByTagName( "body" )[ 0 ],
            error = false;

        script.type = "text/javascript";

        script.onload = script.onreadystatechange = function( e ){

            if ( ( !this.readyState || this.readyState == "loaded" || this.readyState == "complete" ) ) {
                if ( !error ) {
                    removeListeners();
                    callback( true );
                } else {
                    callback( false );
                }
            }
        };

        script.onerror = function() {
            error = true;
            removeListeners();
            callback( false );
        }

        function errorHandle( msg, url, line ) {

            if ( url == src ) {
                error = true;
                removeListeners();
                callback( false );
            }
            return false;
        }

        function removeListeners() {
            script.onreadystatechange = script.onload = script.onerror = null;

            if ( window.removeEventListener ) {
                window.removeEventListener('error', errorHandle, false );
            } else {
                window.detachEvent("onerror", errorHandle );
            }
        }

        if ( window.addEventListener ) {
            window.addEventListener('error', errorHandle, false );
        } else {
            window.attachEvent("onerror", errorHandle );
        }

        script.src = src;
        head.appendChild( script );
    }

    loadScripts('https://maps.googleapis.com/maps/api/js?key=AIzaSyDFc9QE_9gTdKJ-ay3GxjK9-zvRXPNZBXc&language=ru&region=RU', function( status ){
        if ( status ) {
            loadScripts('https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js', function( status ) {
                if (status) {
                    initMap();
                }
            });
        }

    });

    const initMap = function () {
        let styles = [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]

        let directionsService = new google.maps.DirectionsService();
        let dirDisp = new google.maps.DirectionsRenderer({
            suppressInfoWindows: false,
            suppressMarkers: true,
        });
        let travelMode = 'DRIVING';
        let transitOptions = ['RAIL', 'SUBWAY', 'BUS', 'TRAM']
        let centerMap = {lat: 50.4330878, lng:30.5920362}
        let currPoi;
        let companyPoi = {lat: 50.444844, lng: 30.6340953}
        let locations = [
            {coord: {lat: 50.4094165, lng: 30.6051421}, icon: 'assets/images/metro_poznyaki.png'},
            {coord: {lat: 50.4598726, lng: 30.6281441}, icon: 'assets/images/metro_chernigov.png'},
            {coord: {lat: 50.4269691, lng: 30.5378012}, icon: 'assets/images/metro_goloseev.png'},


        ];
        let map = new google.maps.Map(document.getElementById('map'), {
            center: centerMap,
            zoom: 13,
            styles: styles,
            minZoom: 13,
            maxZoom: 15,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl:false,
        });
        let marker = new google.maps.Marker({
            position: companyPoi,
            map: map,
            icon: 'assets/images/company.png'
        });

        let markers = locations.map(function (location, i) {
            let mark = new google.maps.Marker({
                position: location.coord,
                icon: location.icon
            });
            mark.addListener('click', function () {
                currPoi = {lat: mark.getPosition().lat(), lng: mark.getPosition().lng()}
                getDirection(currPoi)
            });
            return mark;
        });
        let markerCluster = new MarkerClusterer(map, markers);

        slider.on('beforeChange',  function (event, slick, currentSlide, nextSlide) {

            if(nextSlide  != 0 && nextSlide  != 4) {
                getDirection(locations[~~nextSlide - 1].coord);
            }else {
                getDirection(companyPoi);
               // dirDisp.setMap(null);
            }
        });

        let i = {
            path: "M 0,-4 0,1",
            strokeOpacity: 1,
            strokeColor: "#000",
            scale: 2
        };
        function getDirection(startPoi) {
            dirDisp.setMap(null);

            dirDisp = new google.maps.DirectionsRenderer({
                suppressInfoWindows: false,
                suppressMarkers: true,
                polylineOptions: {
                    icons: [{
                        icon: i,
                        offset: "0",
                        repeat: "25px"
                    }],
                    strokeOpacity: 0,

                }
            });

            dirDisp.setMap(map);

            let wayOpt = {
                origin: startPoi,
                destination: companyPoi,
                travelMode: google.maps.TravelMode[travelMode],
                // transitOptions: {
                //     routingPreference: 'FEWER_TRANSFERS'
                // },
                drivingOptions: {
                    departureTime: new Date(Date.now()),  // for the time N milliseconds from now.
                    trafficModel: 'optimistic'
                },
                unitSystem: google.maps.UnitSystem.IMPERIAL
            }

            directionsService.route(wayOpt, function (result, status) {
                if (status == 'OK') {
                    dirDisp.setDirections(result);
                    (result);
                }
            });
        }

        function showSteps(directionResult) {
            // console.log(directionResult)
        }

    }

};
export {onmapFunc}