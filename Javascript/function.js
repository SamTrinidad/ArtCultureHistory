
(function(){
    
//PROFILES!!
var group = {   
    Azim : {
        pname: "Azim BekkodJaev",
        desc: ""
    },
    Chloe : {
        pname: "Chloe Sanderson",
        desc : ""
    },
    Dana : {
        pname: "Dana Lance",
        desc: ""
    },
    Sam : {
       pname : "Sam Trinidad",
       desc: "" 
    },
    Teara : {
        pname: "Teara Duch",
        desc: ""
    },
    created: false,
    
    createProfiles: function(){
        this.created = true;
        var list = ""
        for(var person in this){
            if(this[person].pname !== undefined || null || ""){
                list+= "<span id=\"" + person +"\">" + this[person].pname;
                list+= "</span>";
            }else{
                continue;
            }
        }
        var put = document.createElement('div');
        put.className = "gName";
        put.innerHTML = list;

        $('#img2').append(put);
        $('#img2 div').hide().fadeIn(1000);
    }
}


//Graphs
var ageGraph = {
            labels: ["First Nation", "Metis", "Inuit"],
            datasets: [{
                label: '0 - 4',
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                data: [
                    90995,34860,7195
                ]
            }, {
                label: '5 - 9',
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                data: [
                    83490,32845,6700
                ]
            }, {
                label: '10 - 14',
                backgroundColor: 'rgba(255, 206, 86, 0.8)',
                data: [
                    84310,36710,6270
                ]
            }, {
                label: '15 - 24',
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                data: [
                    156865,80035,11950
                ]
            }, {
                label: '25 - 64',
                backgroundColor: 'rgba(255, 159, 64, 0.8)',
                data: [
                    389215,237705,24905
                ]
            }, {
                label: '65+',
                backgroundColor: 'rgba(153, 102, 255, 0.8)',
                data: [
                    46690,29635,2425
                ]
            }]
};
    
var population = {
    labels: [
        "First Nations",
        "Métis ",
        "Inuit",
        "Multiple Identities",
        "Other Aboriginal Identities"
    ],
    datasets: [
        {
            data: [851560, 451795, 59445, 11415, 26475],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ]
        }]
}; 
    


var gcreated = false;
var acreated = false;

function createageGraph(){
    acreated = true;
    var ctx = document.getElementById('ageGraph');
    var barChart = new Chart(ctx,{
        type: 'bar',
        data: ageGraph,
        defaults:{
            global:{
                defaultFontColors: '#000000'
            }
        },
        
        options: {

                display:true,
                text:"Chart.js Bar Chart - Stacked",
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: false,
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                },             
                legend: {
                        display:true,
                        labels: {
                            fontColor: '#000000'
                        }
                } 
            }       
    });
}
    
function createpopGraph(){

    gcreated = true;
    var ctx = document.getElementById('popGraph');
    var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: population,
    options: {
            responsive: false,
            legend:{
                labels:{
                    fontColor: '#000000'
                }
            }
        }
    });
}


//Parallax On main Screen

//Title Image Parallax
var Title = {
    logo: $('#logo'),
    root: $('#pRoot'),
    temple: $('#pTemple'),
    hill: $('#pHill'),
    forest: $('#pForest'),
    tran: $('#tran'),
    transform: function(wScroll){
        this.logo.css({
            'transform' : 'translate(0px, '+ wScroll/3 +'%)'
        });
        this.root.css({
            'transform' : 'translate(0px, '+ wScroll/60 +'%)'
        });
        this.tran.css({
            'transform' : 'translate(0px, '+ wScroll/60 +'%)'
        });
        this.temple.css({
            'transform' : 'translate(0px, '+ wScroll/20 +'%)'
        });
        this.hill.css({
            'transform' : 'translate(0px, '+ wScroll/70 +'%)'
        });
        this.forest.css({
            'transform' : 'translate(0px, '+ wScroll/80 +'%)'
        });
    }
}


//---------------window Scrolling functions-----------------


//top Navigation transform
var navigation = {
    nav: $('#nav'),
    state: 0,
    transform: function(){
        switch (this.state){
            case 0:
                this.nav.css({
                    'transform': 'translate(0px, 0px)'
                });
                break;
            case 1:
                this.nav.css({
                    'transform': 'translate(-300px, 0px)'
                });
                break;
            case 2:
                this.nav.css({
                    'transform': 'translate(-620px, 0px)'
                });
                break;
            case 3:
                this.nav.css({
                    'transform': 'translate(-950px, 0px)'
                });
                break;
            case 4:
            this.nav.css({
                'transform': 'translate(-1250px, 0px)'
            });
                break;
            case 5:
            this.nav.css({
                'transform': 'translate(-1560px, 0px)'
            });
            break;
            default:
                break;
        }
    }
}

//positions of the window screen.

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    var ch1 = $('#ch1').offset().top - 50;
    var ch2 = $('#ch2').offset().top - 50;
    var ch3 = $('#ch3').offset().top - 50;
    var ch4 = $('#ch4').offset().top - 50;
    var ch5 = $('#ch5').offset().top - 50;

    if(wScroll<ch1){

        Title.transform(wScroll);
        navigation.state = 0;
        navigation.transform();

    }else if(wScroll<ch2){
        navigation.state = 1;
        navigation.transform();
        if(group.created===false) group.createProfiles();

    }else if(wScroll<ch3){
        navigation.state = 2;
        navigation.transform();

    }else if(wScroll<ch4){
        navigation.state = 3;
        navigation.transform();

    }else if(wScroll<ch5){
        navigation.state = 4;
        navigation.transform();

     }else if(wScroll >= ch5){
        navigation.state = 5;
        navigation.transform();
    }

});

    
$(window).ready(function(){
    //Population graph display
    $('#showPopGraph').on("click",function(){
        $('#popGraphContainer').css('display','block');
        if(gcreated === false){
            createpopGraph();
        }
    });
    $('#showAgeGraph').on("click",function(){
        $('#ageGraphContainer').css('display','block');
        if(acreated === false){
            createageGraph();
        }
    });
    
    //image slides
    $('.displayImage').on("click",function(){
        this.parentNode.lastElementChild.style.display = "block";
        this.parentNode.lastElementChild.firstElementChild.id = "selected";
    });
    
    $('.right').on("click",function(){
        var img = this.classList[1];
        var imgList = document.getElementsByClassName(img+"Img");
        var cur = document.getElementById('selected');
        var len = imgList.length;
        var i = 0;
        for(i = 0;i<len;i++){
 
            if(i === len-1){

                imgList[0].id ="selected";
                imgList[i].id = "";
                break;
            }
            if(cur===(imgList[i])){
                imgList[i+1].id = "selected";
                imgList[i].id = "";

                break;
            }
        }
    });
    
    $('.left').on("click",function(){
        var img = this.classList[1];
        var imgList = document.getElementsByClassName(img+"Img");
        var cur = document.getElementById('selected');
        var len = imgList.length;
        var i = 0 ;
        for(i = len-1;i>=0;i--){
            if(i == 0){

                imgList[len-1].id ="selected";
                imgList[0].id = "";
                break;
            }
            if(cur==(imgList[i])){
                imgList[i-1].id = "selected";
                imgList[i].id = "";

                break;
            }
        }
    });
    
    
    //closebutton for displays
    $('.close').on("click",function(){
        $('.close').parent().css('display','none');
        var sel = document.getElementById('selected');
        sel.id ="";
    });
});

}());