//auth-token :  e03a908a9283d123d53e7f3324072fdcc4e9b5e0bb24409fc6

//for no internet connection
document.addEventListener("offline", onOffline, false);
function onOffline() {
	//alert('No network connection');
	Materialize.toast('<span style="white-space:nowrap;font-size:12px;">No network connection</span>', 4000);
}

/*document.addEventListener("online", onOnline, false);
function onOnline() {
    location.reload();
}*/


// for back button exit
var path = window.location.pathname;
var page = path.split("/").pop();
var exit_click = 0;
document.addEventListener("backbutton", function(e){
		if(page == "allnews.html"){
			if(exit_click === 0)
			{
				exit_click = 1;
				Materialize.toast('<span style="white-space:nowrap;font-size:12px;">வெளியேற பேக் பட்டனை மீண்டும் அழுத்தவும்</span>', 2000,'',function()
					{
						exit_click = 0;
					}
				)
			}
			else if (exit_click === 1)
			{
				navigator.app.exitApp();
			}
		}
		else
		{
			//navigator.app.backHistory();
		}
}, false);



var db;
var shortName = 'tamilzanda';
var version = '1.0';
var displayName = 'Tamilzanda';
var maxSize = 100000;
var gender ="";

//db = window.openDatabase(shortName, version, displayName,maxSize);

$.noConflict();
(function( $ ) {
    
    
  $(function() {
	/*$('header').css({
		//position : 'relative',
		borderTop:'20px solid rgba(0,0,0,0.5)',
		height:$('header').height()+20
		
	});
	*/
	
	$('body').on('click','.backIco',function(){
		navigator.app.backHistory();
	});
	
	
 
	/*$('body').on("click",'#trend',function(){
		//alert("ftf");
		$("#tab-2").trigger('click');
		 window.location.href="allnews.html";
		// var $owl = $("#tabMenu"); 
		//$owl.trigger('to.owl.carousel', [2,0,true]);
		
	});*/
    
    var full_name=window.localStorage.getItem("full_name");
	$('#full_name').html(full_name);			
    $('.user_name_cont').text(full_name);
    
    
    $('.app').css('height',$(window).height());
    setTimeout(function(){
        $('#content').fadeIn(500,function(){
            $('.snap-drawers').show();
        })
    },1000);
    
    $('.insidePostCard').css('minHeight',$(window).height()-($('header').height()+$('footer').height()));
    
    //$('.commentInputOnlyCont').css('width',$(window).width()-40);
    
	$('.contentContainer').css('height',$(window).height());
    $('.mainSection').css({
		height:$(window).height()-($('header').height()+$('footer').height())
	});
    
    //setTimeout(function(){  }, 5000); 
    $('.homeTrigger').trigger('click');
    
    $('.headerClear').css('height',$('header').height());
    $('.footerClear').css('height',$('footer').height());
    
    
	/* help screen */


             $('.helpDiv').css({
					height:$(window).height(),
					width:$(window).width()
				});

				b = 0;
				$('body').on('click','.helpClose',function(){
					$(this).parent().removeClass(classData[b]);
					b = 0;
					$('.helpDiv').fadeOut(100);
					$('.helpImg').hide();
					$('.helpDiv').addClass('helpMenu');
					$('.helpImg').attr('src','img/'+imgData[b]+'.png');
					
				})
				$('body').on('click','.helpContLink',function(){
					$('.helpPrev').hide();
					$('.helpImg').fadeIn(300);
					$('.helpNext').show();
					$(this).parent().parent().parent().hide();
					$('.helpDiv').fadeIn(100);
					
				});

				
			  imgData = ['help_1', 'help_2', 'help_3','help_4','help_5','help_6','help_8','help_9','help_10','help_11','help_12','help_13','help_7'];
			  classData=['helpMenu','helpHome','helpWorld','helpSearch','helpNoti','helpSettings','helpIcon1','helpIcon2','helpIcon3','helpIcon4','helpIcon5','helpIcon_profile','helpPost'];
			 
			  $('body').on('click', '.helpNext', function() {
			  $('.helpPrev').show();
				if (b <= imgData.length - 1) {
					$(this).parent().removeClass(classData[b]);
					b++;
					$('.helpImg').hide();
					$(this).parent().addClass(classData[b])
					$('.helpImg').attr('src','img/'+imgData[b]+'.png');
					$('.helpImg').fadeIn(300);
					if (b == imgData.length-1) {
						b = imgData.length - 1;
						$('.helpNext').hide();
						}
				}
			  });

			  $('body').on('click', '.helpPrev', function() {
				if (b >= 1) {
				$(this).parent().removeClass(classData[b]);
				 b--;
				 $('.helpImg').hide();
				 if (b < 1) {
					b = 0;
					$('.helpPrev').hide();

				  }
				  $(this).parent().addClass(classData[b])
				  $('.helpImg').attr('src','img/'+imgData[b]+'.png')
				  $('.helpImg').fadeIn(300);
				  $('.helpNext').show();
				}
			  });
			  
			  
			  
			  /*get porfile image*/

/* for profile img*/

				var token=window.localStorage.getItem("auth_token");
				
				function setHeader(xhr) {
				  xhr.setRequestHeader('Auth-Token', token);
				}
				


		var user_id = window.localStorage.getItem("id");
		//var img_url = "http://dvw76oitljc1i.cloudfront.net/";
		
		$.ajax({
			type:"GET",
			crossDomain: true,
			url:"http://52.74.69.101:80/api/v1/users/"+user_id+".json",
			dataType    : 'json',
			encode          : true,
			success:function(data){
				//console.log(data);
				profile_img_url = data.profile_image_url;
				gender = data.gender;
				
				if(profile_img_url === null || profile_img_url === "null" || profile_img_url === "" || profile_img_url === "http://dvw76oitljc1i.cloudfront.net/"){
					/*if(gender == "male"){
						$('.bgBigProfileImage').attr('src',"img/male.png");
						$('.bgSmallProfileImage').attr('src',"img/male.png");
					}
					else if(gender == "female")
					{
						$('.bgBigProfileImage').attr('src',"img/female.png");
						$('.bgSmallProfileImage').attr('src',"img/female.png");
					}*/
					$('.bgBigProfileImage').attr('src',"img/profile_bg.jpg");
					$('.bgSmallProfileImage').attr('src',"img/profile_bg.jpg");
				}
				else {
					$('.bgBigProfileImage').attr('src',profile_img_url);
					$('.bgSmallProfileImage').attr('src',profile_img_url);
				}
			},
			error: function (result, status, err) {
				alert(result.responseJSON['errors']);
				//window.location.href = 'allnews.html';
			},
			beforeSend : setHeader
		});
			
	
	
	 $('body').on('click','.commentTrigger',function(){
   //$('.commentTrigger').click(function(){
    
        $(this).toggleClass('postCommentLink');
        $(this).toggleClass('colorGreen');
        $(this).children('.emoIco').toggleClass('bgGreen');
        $('.commentCont').slideToggle(200);
    }) 
	
	
	
	
    $('body').on("click",'.postCategoryHead',function(){
        $('.menuSubUl').slideToggle(200);
    })
    
    
    $(".subLink").click(function(){
		var X=$(this).attr('id');
		if(X==1){
			$(".subLinkCont").hide();
			$(this).attr('id', '0');	
		}else{
			$(".subLinkCont").show();
			$(this).attr('id', '1');
		}
	});
    
    
    
	//Mouseup textarea false
	$(".subLinkCont").mouseup(function(){
		return false
	});
	$(".subLink").mouseup(function(){
		return false
	});
	//Textarea without editing.
    
	$(document).mouseup(function(){
		$(".subLinkCont").hide();
		$(".subLink").attr('id', '');
	});
    
    /*$(document).on("touchend",function(){
        $(".subLinkCont").hide();
		$(".subLink").attr('id', '');
    });*/
    $('.mainSection').on("touchstart",function(){
        $(".subLinkCont").hide();
		$(".subLink").attr('id', '');
    });

    
    $('.modal-trigger').leanModal();
    
    /** Tab with Swipe Starts **/
    		
	$("#tabMenu").owlCarousel({
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,3],
		itemsTabletSmall: false,
		itemsMobile : [479,3],
        navigation : true,
        navigationText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
        addClassActive : true,
        rewindNav : false,
        beforeMove :function(){
            //if($('.owl-item.active').hasClass())
        },
        afterMove : function(){
            $('.tabLink').removeClass('active');
            //if('.owl-item.lastB4OwlTab')
            //$('.owl-item.active').first().children().children().addClass('active');
        }
    });
    /*
    $('.commentOnlyLink').click(function(){
        $(this).children('span').toggleClass('bgGreen');
        $('.commentInputOnlyCont').toggleClass('visible');
        $('.tamiltextbox').trigger('click');
    });*/
    
    var carousel = $(".postCarousel");
                    
    carousel.each(function() {

      var $this = $(this);
    
      $this.owlCarousel({
        pagination: false,
        loop: true,
        autoPlay : false,
        stopOnHover : true,
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [980,2],
        itemsTablet: [700,2],
        itemsTabletSmall: false,
        itemsMobile : [479,2],
      });
    
    });
    
    
    $('.owl-item:last-child').addClass('lastOwlTab');
    $('.owl-item:last-child').prev().addClass('lastB4OwlTab');
    
    
    $(".tabData:first-child").addClass('firstTab');
    $(".tabData:last-child").addClass('lastTab');
    
    $('#catToLike').owlCarousel({
        pagination: false,
        loop: true,
        autoPlay : false,
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [700,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
		navigation:true,
		//navigationText :["&#x025C2;","&#x025B8;"],
		navigationText :["<span class='leftArr carArr'><i class='fa fa-caret-left'></i></span>","<span class='rightArr carArr'><i class='fa fa-caret-right'></i></span>"],
		jsonPath : 'http://52.74.69.101:80/api/v1/categories.json?per_page=100&page=1',
		jsonSuccess : cattolikesuccessdata
    });
	
	
	function cattolikesuccessdata(response){
		var catToLikecontent = "";
		if(response.length > 0){
			var i = 1;
			$.each(response, function (jsonindex, jsonvalue) {
				if(i > 5){
					i = 1;
				}
				if(i == 1){
					catToLikecontent += '<div>'
						catToLikecontent += '<ul class="shareUl" style="padding-left:30px;">'
							catToLikecontent += '<li><button class="catButton borderedFlatBtn follow" data-id="'+jsonvalue.id+'">'+jsonvalue.name+'</button></li>'
				}else if(i == 5){
							catToLikecontent += '<li><button class="catButton borderedFlatBtn follow" data-id="'+jsonvalue.id+'">'+jsonvalue.name+'</button></li>'
						catToLikecontent += '</ul>'
					 catToLikecontent += '</div>'
				}else{
					catToLikecontent += '<li><button class="catButton borderedFlatBtn follow" data-id="'+jsonvalue.id+'">'+jsonvalue.name+'</button></li>'
				}
				
				i++;
			});   
		}
		$("#catToLike").html(catToLikecontent);
		
	}
	
	
	
	
	
	// All Post in Tamizhanda World Page
	$('#allnews').owlCarousel({
		pagination: false,
		loop: true,
		autoPlay : false,
		stopOnHover : true,
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,2],
		itemsTablet: [700,2],
		itemsTabletSmall: false,
		itemsMobile : [479,2],
		jsonPath : 'http://52.74.69.101:80/api/v1/posts.json?per_page=100&page=1&scope=all',
		jsonSuccess : allnewssuccessdata
	});
	
	function allnewssuccessdata(response){
		//	alert('hi');
		//console.log(response)
		//if (response.error==false) {
			var allnewscontent ="";
			if(response.length > 0){
				var jsondata = response;
				$.each(response, function (jsonindex, jsonvalue) {
					 console.log(jsonvalue);
					allnewscontent +='<div class="col s12">';
						allnewscontent +='<div class="card">'
							allnewscontent +='<div class="card-image">'
								allnewscontent += '<a href="fullcontent.html?id='+jsonvalue.id+'">';
									//// console.log(value.title_photo_url);
									/*if(jsonvalue.title_photo_url==="null"||jsonvalue.title_photo_url==''||jsonvalue.title_photo_url=='null'||jsonvalue.title_photo_url==null)
									{
										allnewscontent += '<img class="ht150px" src="img/defaultpostimg.png" alt="Image"/>';
									}
									else
									{
										allnewscontent += '<img class="ht150px" src="'+jsonvalue.title_photo_url+'" alt="'+jsonvalue.title_photo_url+'"/>';
										//divContent += '<img src="img/profile_bg.jpg" alt="'+value.title_photo_url+'"/>';
									}*/
									
									 if(jsonvalue.title_photo_url==="null"||jsonvalue.title_photo_url==''||jsonvalue.title_photo_url=='null'||jsonvalue.title_photo_url==null || jsonvalue.title_photo_url === "http://dvw76oitljc1i.cloudfront.net/")
												{
													if(jsonvalue.file_type=="audio"){
													  allnewscontent +=  '<img src="img/defaultaudioimg.png" alt="Image" class="ht150px""/>';
													 }else if(jsonvalue.file_type=="video"){
													  allnewscontent +=  '<img src="img/defaultvideoimg.png" alt="Image" class="ht150px""/>';
													 }else{
													  allnewscontent +=  '<img src="img/defaultpostimg.png" alt="Image" class="ht150px""/>';
													 }
												}
												else
												{
													allnewscontent +=  '<img src="'+jsonvalue.title_photo_url+'" alt="'+jsonvalue.title_photo_url+'"  class="ht150px""/>';
													//divContent += '<img src="img/profile_bg.jpg" alt="'+jsonvalue.title_photo_url+'" class="ht150px""/>';
													
												}
									
								allnewscontent += '</a>';
							allnewscontent +='</div>'
							allnewscontent +='<div class="card-action widthfull  colorDullCont twoLnCont">'
								allnewscontent +='<a href="fullcontent.html?id=" class="card-title"> '+jsonvalue.title+'</a>'
							 allnewscontent +='</div>'
						allnewscontent +='</div>'
					allnewscontent +='</div>';
					
			   });   
			}
			$("#allnews").html(allnewscontent);  
		//}
	}
	
	// Question & Answer Post List
	$('#qapost').owlCarousel({
		pagination: false,
		loop: true,
		autoPlay : false,
		stopOnHover : true,
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,2],
		itemsTablet: [700,2],
		itemsTabletSmall: false,
		itemsMobile : [479,2],
		jsonPath : 'http://52.74.69.101:80/api/v1/posts.json?per_page=50&page=1&scope=qa',
		jsonSuccess : allqasuccessdata
	});
	
	function allqasuccessdata(response){
		//	alert('hi');
		//console.log(response)
		//if (response.error==false) {
			var allnewscontent ="";
			if(response.length > 0){
				var jsondata = response;
				$.each(response, function (jsonindex, jsonvalue) {
					 console.log(jsonvalue);
					allnewscontent +='<div class="col s12">';
						allnewscontent +='<div class="card">'
							allnewscontent +='<div class="card-image">'
								allnewscontent += '<a href="fullcontent.html?id='+jsonvalue.id+'">';
									//// console.log(value.title_photo_url);
									if(jsonvalue.title_photo_url==="null"||jsonvalue.title_photo_url==''||jsonvalue.title_photo_url=='null'||jsonvalue.title_photo_url==null)
									{
										allnewscontent += '<img class="ht150px" src="img/defaultpostimg.png" alt="Image"/>';
									}
									else
									{
										allnewscontent += '<img class="ht150px" src="'+jsonvalue.title_photo_url+'" alt="'+jsonvalue.title_photo_url+'"/>';
										//divContent += '<img src="img/profile_bg.jpg" alt="'+value.title_photo_url+'"/>';
									}
								allnewscontent += '</a>';
							allnewscontent +='</div>'
							allnewscontent +='<div class="card-action widthfull  colorDullCont twoLnCont">'
								allnewscontent +='<a href="fullcontent.html?id=" class="card-title"> '+jsonvalue.title+'</a>'
							 allnewscontent +='</div>'
						allnewscontent +='</div>'
					allnewscontent +='</div>';
			   });   
			}
			$("#qapost").html(allnewscontent);  
		//}
	}
	
	
    
    $('#tabMenu a').click(function(){
		$('.tabLink').removeClass("active");
		$(this).addClass('active');
	});
	
	$("body").on("click","[id^='tab-']", function(event){
		var id = this.id;
		var sid = new Array();
		sid = (id.split("-"));
		fac_id = sid[sid.length-1];
		$('.tabData').hide();
		$('#tabCont-'+fac_id).fadeIn(100);
	});
    /*
	$('.commentInputBox').click(function(){
		//location.href="createpost.html";
        $('.footerClear').toggleClass('posAbs');
        //$('footer').toggleClass('posRel');
        
	});*/
    
    $("input[type='button'].commentInputBox").click(function(){
		location.href="createpost.html";
    });
    
    
    /*
    $(".tabData").swipe({
        
		//Generic swipe handler for all directions
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		   
		   //// console.log('swiped '+ direction);
           if(direction=='left')
           {
                //if($(this).hasClass('firstTab')||$(this).hasClass('firstTab'))
                if($(this).hasClass('lastTab')==true)
                {
                    $(this).show();
                } else {
                    $(this).hide();
                    $('.tabLink').removeClass('active');
                    //$(this).next('.tabData').addClass('posRel');
                    $(this).next('.tabData').fadeIn(400);
                    //// console.log('Id:'+$(this).attr('id'));
                    var id = $(this).attr('id');
    				var sid = new Array();
    				sid = (id.split("-"));
    				fac_id = sid[sid.length-1];
                    tabActId=parseInt(fac_id)+1;
                    $('.owl-next').trigger('click');
                    $('#tab-'+tabActId).addClass('active');
                }
           }
           if(direction=='right')
           {
                if($(this).hasClass('firstTab'))
                {
                    $(this).show();
                } else {
                    $(this).hide();
                    $('.tabLink').removeClass('active');
                    //$(this).prev('.tabData').addClass('posRel');
                    $(this).prev('.tabData').fadeIn(400);
                    var id = $(this).attr('id');
    				var sid = new Array();
    				sid = (id.split("-"));
    				fac_id = sid[sid.length-1];
                    tabActId=parseInt(fac_id)-1;
                    $('.owl-prev').trigger('click');
                    $('#tab-'+tabActId).addClass('active');
                    
                }
           }
			//$(this).text("You swiped " + direction );	
		},
		//Default is 75px, set to 0 for demo so any distance triggers swipe
	   threshold:0
	});
    */
    
    /** Tab with swipe Ends **/
	/** Snaper **/
    var snapper = new Snap({
		element: document.getElementById('content'),
		dragger: null,
		touchToDrag: false
	});
   

	var addEvent = function addEvent(element, eventName, func) {
		if(element.addEventListener) {
			return element.addEventListener(eventName, func, false);
			
		} else if (element.attachEvent) {
			return element.attachEvent("on" + eventName, func);
		}
	};
	
	addEvent(document.getElementById('open-left'), 'click', function(){
		snapper.open('left');
	});
	
	/* Get reference to toggle button, the html element with ID "open-left" */
	var myToggleButton = document.getElementById('open-left')

	/* Add event listener to our toggle button */
	myToggleButton.addEventListener('click', function() {

		if (snapper.state().state == "left") {
			snapper.close();
		} else {
			snapper.open('left');
		}

	});

	$('.sideNavOpened').click(function(){
		$('#content').css({
			transform: 'translate3d(0px, 0px, 0px) !important'
		})
	});
	
	var token=window.localStorage.getItem("auth_token");
				var userId=window.localStorage.getItem("user_id");
				
				function setHeader(xhr) {
				  xhr.setRequestHeader('Auth-Token', token);
				}

			  

			  function getNotificationCount(){
				 var token=window.localStorage.getItem("auth_token");
				 var trendingformData = {
				 'per_page' : "100",
				 'page' : "1"     
				 };
					 
				 
				 $.ajax({
				  type: "GET",
				  crossDomain: true,
				  url: "http://52.74.69.101:80/api/v1/notifications/unread.json",
				  data:trendingformData,
				  dataType    : 'json',
				  encode          : true,
				  success : function(data){     
				   var counter = 0;
				  $.each(data, function (index, value) {
					counter++;
					}); 
					console.log("noti_count>>>>>"+counter);
					if(counter != 0){
						$('.notifCont').show();
						$('#notifCount').html(counter);
					}
					else if(counter == 0)
					{
						$('.notifCont').remove();
					}	
					
				  },
				  error: function (result, status, err) {
				   alert(result.responseJSON['errors']);
				   //window.location.href = 'allnews.html';
				  },
				  beforeSend : setHeader
					
				 });
				}
				
				getNotificationCount();
	
	/* Prevent Safari opening links when viewing as a Mobile App */
	/*
	(function (a, b, c) {
		if(c in b && b[c]) {
			var d, e = a.location,
				f = /^(a|html)$/i;
			a.addEventListener("click", function (a) {
				d = a.target;
				while(!f.test(d.nodeName)) d = d.parentNode;
				"href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
			}, !1)
		}
	})(document, window.navigator, "standalone");
    */
  });
})(jQuery);


	



