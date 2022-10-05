let choices = document.querySelectorAll(".rpsButton")

//user choice

choices.forEach(choice => {
  choice.onclick = () => {
    let computerChoiceResult=computerChoice()
    eachChoiceMessage(userChoice(choice.value),computerChoiceResult)
    resultMessage(gameResult(userChoice(choice.value),computerChoiceResult))
    
  }
}
)


const userChoice = (userChoice) => {
  return userChoice
}

const computerChoice = () => {
  let randomResult=Math.floor(Math.random() * 3) + 1;
  switch(randomResult) {
    case 1:
      return "Rock"
      break;
    case 2:
      return "Paper"
      break;
    default:
      return "Scissors"
  }
}

const gameResult=(userChoice , computerChoice)=>{
  if (userChoice=="Rock"){
    switch(computerChoice) {
      case "Rock":
        return "Draw"
        break;
      case "Paper":
        return "Lose"
        break;
      default:
        return "Win"
    }
  }
  else if (userChoice=="Paper"){
    switch(computerChoice) {
      case "Rock":
        return "Win"
        break;
      case "Paper":
        return "Draw"
        break;
      default:
        return "Lose"
    }
  }
  else{
    switch(computerChoice) {
      case "Rock":
        return "Lose"
        break;
      case "Paper":
        return "Win"
        break;
      default:
        return "Draw"
    }
  }
}

const eachChoiceMessage =(user,computer)=>{
  let eachChoice = document.getElementById("eachChoice")
  eachChoice.innerText = `👱 ${user} vs 🤖 ${computer}`
}

const resultMessage = (message)=>{
 document.getElementById("result").innerText="You " + message
}

const endGame = ()=>{
  document.getElementById("result").innerText="Play again " 
  document.getElementById("eachChoice").innerText=" "
 }