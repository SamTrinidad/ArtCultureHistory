//PROFILES!!
var pcreated = false;
var group = {   
    Azim : {
        name: "Azim BekkodJaev",
        desc: ""
    },
    Chloe : {
        name: "Chloe Sanderson",
        desc : ""
    },
    Dana : {
        name: "Dana Lance",
        desc: ""
    },
    Sam : {
       name : "Sam Trinidad",
       desc: "" 
    },
    Teara : {
        name: "Teara Duch",
        desc: ""
    }
}

function createProfiles(group){
    pcreated = true;
    var list = ""
    for(person in group){
        list+= "<span id=\"" +person +"\">" + group[person].name;
        list+= "</span>"
    }
    var put = document.createElement('div');
    put.innerHTML = list;
    
    $('#img2').append(put);
    $('#img2 div').hide().fadeIn(1000);

    
}

//Graphs

var population = {
    labels: [
        "First Nations",
        "Métis",
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

function createGraph(){
    gcreated = true;
    var ctx = document.getElementById("myChart");
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

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    if(wScroll<1200){
        $('#logo').css({
            'transform' : 'translate(0px, '+ wScroll/3 +'%)'
        });

        $('#pRoot').css({
            'transform' : 'translate(0px, '+ wScroll/60 +'%)'
        });
        $('#pTemple').css({
            'transform' : 'translate(0px, '+ wScroll/20 +'%)'
        });
        $('#pHill').css({
            'transform' : 'translate(0px, '+ wScroll/70 +'%)'
        });
        $('#pForest').css({
            'transform' : 'translate(0px, '+ wScroll/80 +'%)'
        });

        $('#nav').css({
            'transform': 'translate(0px, 0px)'
        });

    }else if(wScroll<2150){
         $('#nav').css({
            'transform': 'translate(-300px, 0px)'
        });

    }else if(wScroll<2840){
        $('#nav').css({
            'transform': 'translate(-600px, 0px)'
        });

        if(pcreated===false) createProfiles(group);

    }else if(wScroll>=2840){

        $('#nav').css({
            'transform': 'translate(-900px, 0px)'
        });
        if(gcreated===false){
            createGraph();
        }
    };

});

