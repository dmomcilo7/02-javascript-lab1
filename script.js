const firstName = "Dusan";
const age = 32;
const birthday = "May 09";
const pineapplePizza = false;
const lifeEvents = [
  "I was born in Zagreb, Croatia",
  "I went to Oakland University",
  "I got married in 2018",
  "I am having a baby girl",
];
let counter = 0;
const hours = 50;
const wage = 10;

if (pineapplePizza === true) {
  console.log(
    `My name is ${firstName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${firstName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

while (true) {
  const randomNum = Math.floor(Math.random() * 10 + 1);
  if (randomNum !== 5) {
    counter = counter + 1;
    console.log(`${randomNum} !==5`);
  } else {
    counter = counter + 1;
    console.log(
      `5===5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

if (hours <= 40) {
  const pay = hours * wage;
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your paycheck comes out to $${pay}. It will take ${weeks} weeks to make $1,000,000`
  );
} else {
  const pay = wage * 40 + (hours - 40) * (wage * 1);
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your paycheck comes out to $${pay}. It will take ${weeks} weeks to make $1,000,000`
  );
}
