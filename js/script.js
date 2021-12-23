/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//jquery code here


	if ($(window).width() > 700) {

		$('.section').click(function(){
		console.log("CLICK!")

			$(this).animate({
				"color":"blue"
			})

			$(".section").not(this).animate({
				"color":"red"
			})

			var link = $(this).attr('iframe-link')
			console.log(link)

			$('.big-iframe').attr("src", link).css({
				'padding-top':'0px'
			})

		});

		$(".progress").click(function(){

			$(".textbox").html('<h3>How is the coronavirus vaccine rollout going in California? Use this interactive tracker to see how many people have been vaccinated, where you stand in line and how California compares to other states.</h3>')

		});

		$(".compare").click(function(){

			$(".textbox").html('<h3>Zoom in on the map and click on different states to see how distribution is going around the United States. The chart also gives you a sense of how the states stack up. California, the largest U.S. state, has been allocated the most vaccine doses.</h3><div class="button-container"><div class="buttons compare-map"><h4>SHOW MAP</h4></div> <div class="buttons compare-chart"><h4>SHOW CHART</h4></div></div>')

		});

			$(document).on('click','.compare-map',function(){

			  $('.iframes').html('<iframe class="big-iframe" scrolling="no" src="https://dig.abclocal.go.com/ccg/interactives/us-vaccine-tracker/us_vaccine_map.html"></iframe>')

			});

			$(document).on('click','.compare-chart',function(){

			  $('.iframes').html('<iframe class="big-iframe" scrolling="no" src="https://dig.abclocal.go.com/ccg/interactives/us-vaccine-tracker/us_vaccine_table_big.html"></iframe>')

			});

			


		$(".county").click(function(){

			$(".textbox").html('<h3>How well is your county doing? Select your county to see the percentage of people fully vaccinated and how many doses have been administered.</h3><div class="button-container"><div class="buttons county-map"><h4>SHOW MAP</h4></div> <div class="buttons county-daily-doses"><h4>SHOW DAILY DOSES</h4></div></div>')
		});



			$(document).on('click','.county-map',function(){

			  $('.iframes').html('<iframe class="big-iframe" scrolling="no" src="https://abcotvdata.github.io/CA-Vaccines/ca_vaccine_map.html"></iframe>')

			});

			$(document).on('click','.county-daily-doses',function(){

			  $('.iframes').html('<iframe class="big-iframe" scrolling="no" src="https://abcotvdata.github.io/CA-Vaccines/ca_daily_doses/index.html"></iframe>')

			});



		$(".covid-by-vaccine").click(function(){

			$(".textbox").html('<h3>How much more likely are you to get COVID-19, be hospitalized or die if you are not vaccinated? These graphs may give you an idea.</h3><div class="button-container not-side-by-side"><div class="buttons cases-vax"><h4>CASES</h4></div> <div class="buttons hosp-vax"><h4>HOSPITALIZATIONS</h4></div><div class="buttons deaths-vax"><h4>DEATHS</h4></div></div>')

		});


			$(document).on('click','.cases-vax',function(){

			  $('.iframes').html('<iframe class="big-iframe" scrolling="no" src="https://abcotvdata.github.io/CA-Vaccines/covid-19-cases-by-vaccination-status.html"></iframe>')

			});

			$(document).on('click','.hosp-vax',function(){

			  $('.iframes').html('<iframe class="big-iframe" scrolling="no" src="https://abcotvdata.github.io/CA-Vaccines/covid-19-hosp-by-vaccination-status.html"></iframe>')

			});

			$(document).on('click','.deaths-vax',function(){

			  $('.iframes').html('<iframe class="big-iframe" scrolling="no" src="https://abcotvdata.github.io/CA-Vaccines/covid-19-deaths-by-vaccination-status.html"></iframe>')

			});
	   
	}

	else {

		$(".progress").click(function(){

			$(".section").animate({
				"color":"red"
			})

			$(this).animate({
				"color":"blue"
			})

			$(".textbox").html('<h3>How is the coronavirus vaccine rollout going in California? Use this interactive tracker to see how many people have been vaccinated, where you stand in line and how California compares to other states.</h3>')

			$('.iframes').html('<iframe class="big-iframe" height="790px" scrolling="no" src="https://dig.abclocal.go.com/kabc/ca-vaccine-tracker/index.html"></iframe>')

		});

		$(".compare").click(function(){

			$(".section").animate({
				"color":"red"
			})
			
			$(this).animate({
				"color":"blue"
			})

			$(".textbox").html('<h3>Zoom in on the map and click on different states to see how distribution is going around the United States. The chart also gives you a sense of how the states stack up. California, the largest U.S. state, has been allocated the most vaccine doses.</h3>')

			$('.iframes').html('<iframe class="big-iframe" height="450px" scrolling="no" src="https://dig.abclocal.go.com/ccg/interactives/us-vaccine-tracker/us_vaccine_map.html"></iframe><iframe class="big-iframe" height="450px" scrolling="no" src="https://dig.abclocal.go.com/ccg/interactives/us-vaccine-tracker/us_vaccine_table_big.html"></iframe>').find('iframe').css({"height": "720px", "margin-top":"10px"})

		});

			


		$(".county").click(function(){

			$(".section").animate({
				"color":"red"
			})
			
			$(this).animate({
				"color":"blue"
			})

			$(".textbox").html('<h3>How well is your county doing? Select your county to see the percentage of people fully vaccinated and how many doses have been administered.</h3>')

			$('.iframes').html('<iframe class="big-iframe" scrolling="no" src="https://abcotvdata.github.io/CA-Vaccines/ca_vaccine_map.html"></iframe><iframe class="big-iframe" scrolling="no" src="https://abcotvdata.github.io/CA-Vaccines/ca_daily_doses/index.html"></iframe>')
		});





		$(".covid-by-vaccine").click(function(){

			$(".section").animate({
				"color":"red"
			})
			
			$(this).animate({
				"color":"blue"
			})

			$(".textbox").html('<h3>How much more likely are you to get COVID-19, be hospitalized or die if you are not vaccinated? These graphs may give you an idea.</h3>')

			$('.iframes').html('<iframe class="big-iframe" scrolling="no" src="https://abcotvdata.github.io/CA-Vaccines/covid-19-cases-by-vaccination-status.html"></iframe><iframe class="big-iframe" scrolling="no" src="https://abcotvdata.github.io/CA-Vaccines/covid-19-hosp-by-vaccination-status.html"></iframe><iframe class="big-iframe" scrolling="no" src="https://abcotvdata.github.io/CA-Vaccines/covid-19-deaths-by-vaccination-status.html"></iframe>')

		});


	   
	}


	


}); //end document.ready block
