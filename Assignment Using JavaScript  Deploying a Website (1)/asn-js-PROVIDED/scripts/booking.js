/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 0;
var numberOfDays = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var dayButton = document.getElementsByClassName("flex day-selector");
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var full = document.getElementById("full");
var half = document.getElementById("half");


function changeColor()
{
	if (!this.classList.contains("clicked"))
	{
	        this.classList.add("clicked");
			costPerDay++;
	}
	else
	{
		this.classList.remove("clicked");
	}
	recalculate();

}

	monday.addEventListener("click", changeColor);

	tuesday.addEventListener("click", changeColor);

	wednesday.addEventListener("click", changeColor);

	thursday.addEventListener("click", changeColor);

	friday.addEventListener("click", changeColor);




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


var clearButton = document.getElementById("clear-button");
var allButtons = document.getElementsByClassName("day-selector");
var totalCost = document.getElementById("calculated-cost");

function clear()
{
	monday.classList.remove("clicked");
	
	tuesday.classList.remove("clicked");	
	
	wednesday.classList.remove("clicked");

	thursday.classList.remove("clicked");

	friday.classList.remove("clicked");

	totalCost.innerHTML = 0;
}

clearButton.addEventListener("click", clear);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var daily_rate = 0;


function halfDay()
{

	if (!half.classList.contains("clicked"))
	{
		half.classList.add("clicked");
		full.classList.remove("clicked");
		daily_rate = 20;
		
	} 
	else
	{
		half.classList.remove("clicked");
	}
	recalculate();
}

half.addEventListener("click", halfDay);




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

if (full.classList.contains("clicked"))
{
	full.classList.remove("clicked");
}


function fullDay()
{
	let fullDay = 0;
	if (!full.classList.contains("clicked"))
	{
		full.classList.add("clicked");
		half.classList.remove("clicked");
		daily_rate = 35;
		
	}
	else
	{
		full.classList.remove("clicked");
	}
	recalculate();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate()
{
	totalCost.innerHTML = costPerDay * daily_rate;
}

