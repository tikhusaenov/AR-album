var images = [
    [
        { title:"1_1_title", img: "1_1.jpg"},
        { title:"1_2title", img: "1_2.jpg"},
        { title:"1_3надпись", img: "1_3.jpg"}
    ],
    [
        { title:"2_1_title", img: "2_1.jpg"},
        { title:"2_2title", img: "2_2.jpg"},
        { title:"2_3надпись", img: "2_3.jpg"}
    ]
]

var currentMarkerId = -1;
var currentImgIndex = 0;

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    document.getElementById("nextBtn").onclick = function ()
    {
        console.log("next");
        if(currentMarkerId != -1){
            document.getElementById(currentMarkerId+"_img")
                .setAttribute('src',images[currentMarkerId -1][currentImgIndex +1].img);

            document.getElementById(currentMarkerId+"_title")
                .setAttribute('text',{value: images[currentMarkerId -1][currentImgIndex +1].title , width: '10.5',color: 'red', align: 'center'})

            currentImgIndex ++;

        }
    }

    document.getElementById("prevBtn").onclick = function ()
    {
        console.log("prev");
        if(currentMarkerId != -1){
            document.getElementById(currentMarkerId+"_img")
                .setAttribute('src',images[currentMarkerId -1][currentImgIndex -1].img)

            document.getElementById(currentMarkerId+"_title")
                .setAttribute('text',{value: images[currentMarkerId -1][currentImgIndex -1].title , width: '10.5',color: 'red', align: 'center'})
            currentImgIndex --;
        }
    }
});



AFRAME.registerComponent('markers_start',{
    init:function(){
        console.log('Add markers to the scene!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

        var sceneEl = document.querySelector('a-scene');


        for(let i = 1;i<=2; i++)
        {
            var markerEl = document.createElement('a-marker');
            markerEl.setAttribute('type','barcode');
            markerEl.setAttribute('id',i);
            markerEl.setAttribute('value',i);
            markerEl.setAttribute('registerevents','');


            var imgEl = document.createElement('a-image')
            imgEl.setAttribute('id',i+"_img");
            console.log(images[i-1]);
            imgEl.setAttribute('src',images[i-1][0].img);
            imgEl.object3D.rotation.set(-90, 0, 0);

            var textEl = document.createElement('a-entity');

            //<a-image src="test.jpg"></a-image>

            textEl.setAttribute('id',i + "_title");
            textEl.setAttribute('text',{color: 'red', align: 'center', value:images[i-1][0].title, width: '10.5'});
            textEl.object3D.position.set(0, 0.7, 0);
            textEl.object3D.rotation.set(-90, 0, 0);


            markerEl.appendChild(imgEl);
            markerEl.appendChild(textEl);

            sceneEl.appendChild(markerEl);

        }

    }
});




AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el;

        marker.addEventListener("markerFound", ()=> {
            currentMarkerId =this.el.id;
            console.log(this.el)
            var markerId = marker.id;
            console.log('Marker Found: ', markerId);
        });

        marker.addEventListener("markerLost",() =>{
            currentMarkerId = -1;
            console.log(this.el)
            var markerId = marker.id;
            console.log('Marker Lost: ', markerId);
        });
    },
});


