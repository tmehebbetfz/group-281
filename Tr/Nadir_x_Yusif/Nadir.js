const agents = ["shadow","fox","tiger","eagle","wolf"]
const cameraLog = ["fox","blurry","civilian","tiger","dr_evil","eagle","civilian"]
let foundAgents = []

for(let i of cameraLog){
  if(i == "blurry"){
    continue
  }else if(i == "dr_evil"){
    console.log("ТРЕВОГА Обнаружен опасный преступник"+ i)
  }else if(agents.includes(i)){
    foundAgents.push(i)
  }
}
console.log("Найдены агенты:",foundAgents)