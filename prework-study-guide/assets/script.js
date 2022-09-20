var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() { 
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("LET'S STUDY HTML!");
    } else if (randomTopic === 'CSS') { 
        console.log("LET'S STUDY CSS!");
    } else if (randomTopic === 'Git') {
        console.log("LET'S STUDY GIT!");
    } else if (randomTopic === "JavaScript") {
        console.log("LET'S STUDY JAVASCRIPT!")
    } else {
        console.log('please try again :^/')
    }
}

console.log('here are the topics we learned through prework:');

listTopics();

console.log('which topic should we study first?');

selectTopic();