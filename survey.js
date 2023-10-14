const { stringify } = require('querystring');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question("What's your name? ", (name) => {
  profile.name = name;
  rl.question("Whats an activity you like doing? ", (hobby) => {
    profile.hobby = hobby;
    rl.question("What do you listen to while doing that? ", (music) => {
      profile.music = music;
      rl.question("Which meal time is your favorite? ", (meal) => {
        profile.meal = meal;
        rl.question("What's your favorite thing to eat for that meal? ", (food) => {
          profile.food = food;
          rl.question("Which is your favorite sport? ", (sport) => {
            profile.sport = sport;
            rl.question("What is your superpower? ", (superpower) => {
              profile.sport = sport;

              console.log(`Thanks for updating your profile! Here it is: ${JSON.stringify(profile, null, 4)} `);
              rl.close();
            });
          });
        });
      });
    });
  });
});
        
            
          
      
  
