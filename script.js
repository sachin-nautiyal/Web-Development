const customName = document.getElementById('name');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomvalueFromArray(array)
{
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin"," Big Daddy"," Father Christmas"];
const insertY = ["the soup kitchen"," Disneyland ","the White House"];
const insertZ = ["spontaneously combusted"," melted into a puddle on the sidewalk ","turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    storyText = storyText.replace("Bob",name);
  }
  const weight = Math.round(300 * 0.453592);
  const temperature =  Math.round((94-32)*(5/9));
  if(document.getElementById("Uk").checked) {  
    storyText = storyText.replace("300 pounds",`${weight} kilogram`);
    storyText = storyText.replace("94 fahrenheit",`${temperature} Celsius`);
  }
  else
  {
    console.log("hey");
    storyText = storyText.replace(`${weight} kilogram`,"300 pounds");
    storyText = storyText.replace(`${temperature} Celsius`,"94 Fahrenheit");
  }
let xItem = randomvalueFromArray(insertX);
let yItem = randomvalueFromArray(insertY);
let zItem = randomvalueFromArray(insertZ);
const newStory = generate_newStory(storyText, xItem, yItem, zItem);

story.textContent =newStory;
story.style.visibility = 'visible';
}

function generate_newStory(story,xItem,yItem,zItem,name,weight,temperature,isUK)
{
    story = story.replaceAll(":insertx:",xItem);
    story = story.replace(":inserty:",yItem);
    story = story.replace(":insertz:",zItem);
    return story;

}

