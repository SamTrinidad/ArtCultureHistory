
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

function createeageGraph(){
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
    forest: $('pForest'),
    transform: function(wScroll){
        this.logo.css({
            'transform' : 'translate(0px, '+ wScroll/3 +'%)'
        });
        this.root.css({
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
                    'transform': 'translate(-600px, 0px)'
                });
                break;
            case 3:
                this.nav.css({
                    'transform': 'translate(-900px, 0px)'
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

    if(wScroll<1200){

        Title.transform(wScroll);
        navigation.state = 0;
        navigation.transform();

    }else if(wScroll<2145){
        navigation.state = 1;
        navigation.transform();

    }else if(wScroll<2840){
        navigation.state = 2;
        navigation.transform();

        if(group.created===false) group.createProfiles();

    }else if(wScroll<3800){
        navigation.state = 3;
        navigation.transform();
        if(gcreated===false){
            createpopGraph();
        }
    }else if(wScroll >= 3800){
        if(acreated===false){
            createeageGraph();
        }
    }

});

}());