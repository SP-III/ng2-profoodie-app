import { Component } from '@angular/core';

@Component({
    selector: 'app',
    //template: '<h1>Title</h1>' ,
    templateUrl: './partials/templates/homeTemplates/searchFormTemplate.html'
    
})

export class AppHomeComponent{
    foodArray : any[];
    name:string;
    clickFoodItem(e){
        console.log(e.target);
        this.name = e.target.parentElement.getElementsByClassName("foodRecepieName")[0].innerHTML;
    }
    constructor(){
        this.name = 'a food dish you like';
        this.foodArray = [
            {
                foodRecepieId : 1,
                foodName : 'McDonalds Chicken McGrill Burger',
                restaurent : 'McDonalds',
                city : 'Chinchwad',
                authenticity : 'German',
                taste : 'Spicy',
                typeOfMeal : 'StreetFood',
                price : '50',
            },{
                foodRecepieId : 2,
                foodName : 'KFC Chicken Zinger Burger',
                restaurent : 'KFC',
                city : 'Pimpri',
                authenticity : 'German',
                taste : 'Spicy',
                typeOfMeal : 'StreetFood',
                price : '120',
            }
            
        ];
    }

    
};