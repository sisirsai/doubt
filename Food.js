class FOOD {


constructor(){

var foodStock;
var lastFed;

this.image = loadImage("Images/Milk.png");

}

display()
{

var x = 80 , y = 100 ;


imageMode(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock != 0)
{

for(var i = 0; i <this.foodStock ; i++){
    if(i%10 == 0)
{
    x = 80;
    y += 50;
}
image(this.image,x,y,50,50);
x += 30;
}



}

console.log(this.foodStock);


}

getFoodStock(){
    
    var FoodCountRef = database.ref('Food');
    FoodCountRef.on("value",function(data){
        foodS = data.val();
    })
    
    
    }
    
    updateFoodStock(count)
    {
        database.ref('/').update({
            foodS : count
        })
    }


}