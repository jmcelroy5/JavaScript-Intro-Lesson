var cat = {
        tiredness: 50,
        hunger: 50,
        loneliness: 50,
        happiness: 50,
        obedience: 50,
        
        play: function(){
            wantsToPlay = Math.random();
            if (wantsToPlay > 0.5){
                console.log("Woohoo!");
                this.tiredness += 5;
                this.happiness += 5;
                this.loneliness -= 5;
                this.hunger += 5;
            }
            else{
                console.log("Cat ignores you.");
            }
        },
        sleep:function(time){
            if (!time)
            {
                time = 1;
            }
            this.tiredness = this.tiredness - time*5;
                
            if (this.tiredness < 0){
                console.log("Cat doesn't want to sleep anymore!");
                this.tiredness = 0;
            }
            else{
                console.log("Zz zzz zzz");
            }
        },
        catnip:function(amount){
            if (!amount)
            {
                amount = 1;
            }
            this.happiness = this.happiness + amount*5;
            if (this.happiness > 100){
                this.happiness = 100;
            }
            console.log("Meow!");
        },
        pet:function(time){
            if (!time){
                time = 1;
            }
            this.happiness += time*5;
            this.loneliness -= time*5;
            console.log("Purrrr");
        },
        spraybottle:function(){
            obedience += 5;
            console.log("Cat runs away.");
        },
        ignore: function(){
            this.happiness -= 5;
            this.loneliness += 5;
            this.obedience -= 5;
            console.log("Meeeeoowwww.... meeeeeoowww....");
        },
        feed: function(amount){
            if (!amount)
            {
                amount = 1;
            }
            this.hunger = this.hunger - amount*5;
            
            if (this.hunger < 0){
                console.log("Cat is full!");
                this.hunger = 0;
            }
            else{
                console.log("Om nom nom");
            }
        },
        status: function(){
            console.log("tiredness: " + this.tiredness + "\n" +
            "hunger: " + this.hunger + "\n" +
            "loneliness: " + this.loneliness + "\n" +
            "happiness: " + this.happiness + "\n" +
            "obedience: " + this.obedience
            );
        }
};

cat.status();