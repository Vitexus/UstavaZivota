var nav = document.createElement('div');
        $(nav).addClass('navbar navbar-default navbar-fixed-top');

var containerFluid = document.createElement('div');
        $(containerFluid).addClass('container-fluid');

var navbarHeader = document.createElement('div');
        $(navbarHeader).addClass('navbar-header');

var navbarToggle = $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#afaq-navbar-collapse-1">');

$(navbarToggle).prepend( $('<span class="sr-only">Toggle navigation</span>') );
$(navbarToggle).prepend( $('<span class="icon-bar"></span>') );
$(navbarToggle).prepend( $('<span class="icon-bar"></span>') );
$(navbarToggle).prepend( $('<span class="icon-bar"></span>') );

$(navbarHeader).prepend('<a class="navbar-brand" href="index.html"><img style="max-width:100px; margin-top: -17px; height: 50px;" src="img/timothy-leary.png"></a>');



var navbarCollapse = $('<div class="collapse navbar-collapse" id="afaq-navbar-collapse-1">');
var navbarNavRight = $('<ul class="nav navbar-nav navbar-right">');

$(navbarNavRight).prepend( $('<li><a href="#" id="nav-up">   <span class="glyphicon glyphicon-arrow-up"   aria-hidden="true"></span></a></li>')  );
$(navbarNavRight).prepend( $('<li><a href="#" id="nav-down"><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></a></li>')  );


$(navbarNavRight).prepend( $('<li><a href="#"  id="nav-next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a></li>')  );


$(navbarNavRight).prepend( $('<li><a id="nav-exit" href="#"><span class="glyphicon glyphicon-off" aria-hidden="true"></span></a></li>')  );
$(navbarNavRight).prepend( $('<li><a target="_blank" href="https://github.com/Vitexus/UstavaZivota">GitHub</a></li>')  );


var navbarNavLeft = $('<ul class="nav navbar-nav ">');
$(navbarNavLeft).prepend( $('<li><a href="#" id="nav-prev" ><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></a></li>')  );



$(navbarHeader).prepend( navbarToggle );
$(containerFluid).append( navbarHeader );
$(navbarCollapse).prepend( navbarNavRight );
$(navbarCollapse).append( navbarNavLeft );
$(containerFluid).append( navbarCollapse );
$(nav).prepend( containerFluid );

document.body.appendChild(nav); 

$('body').prepend('<div style="height: 40px;"></div>'); //4menu

$("#nav-prev").click( function(){ history.go(-1); }  );
$("#nav-next").click( function(){ history.go(+1); }  );
$("#nav-exit").click( function(){ window.close(); }  );

$("#nav-up").click( function(){ $("html, body").animate({ scrollTop: 0 }, "slow"); }  );
$("#nav-down").click( function(){  $("html, body").animate({ scrollTop: $(document).height() }, "slow"); }  );


$(navbarHeader).append( '<span id="pageTitle">' +  $("title").html() + '</span>' ); //Show Page title
