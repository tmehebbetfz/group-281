const agents = ["shadow", "fox", "tiger", "eagle", "wolf"];

const cameraLog = ["fox", "blurry", "civilian", "tiger", "dr_evil", "eagle", "civilian"];

const foundAgents = []; 

if (cameraLog.includes("dr_evil")) {
    agents.forEach(agent => {
        if (cameraLog.includes(agent)) {
            foundAgents.push(agent);
        }
    });
    
    if (foundAgents.length > 0) {
        console.log("Alert! The following agents were found on camera: " + foundAgents.join(", "));
    }
}
else {
    console.log("All clear. No agents found on camera.");
}