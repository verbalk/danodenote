              var myLatlng = new google.maps.LatLng(37.477184, 126.883684);
              var mapOptions={
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                draggable: false,
                scrollwheel: false,
                panControl: true
              };
              var map=new google.maps.Map(document.getElementById("contact_map"),mapOptions);
              var marker=new google.maps.Marker({
                position: myLatlng,
                map: map,
                title:"Insec Security Co., Ltd."
              });
              var contentString='<div id="content">'+
                '<h3>인섹시큐리티</h3>'+
                '</div>';
              var infowindow = new google.maps.InfoWindow({
                content: contentString
              });
              infowindow.open(map,marker);