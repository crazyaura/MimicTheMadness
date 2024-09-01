const mimicActions = [
    "Pretend to be a robot running out of battery.",
    "Act like a chicken laying an egg.",
    "Dance like you have ants in your pants.",
    "Impersonate a superhero with an invisible superpower.",
    "Pretend you're stuck in quicksand.",
    "Mimic someone waking up on the wrong side of the bed.",
    "Act like you're a cat trying to catch a laser pointer.",
    "Pretend you're walking on hot coals.",
    "Mimic a famous actor giving an acceptance speech.",
    "Act like you're in a silent movie."
];

document.getElementById('mimicButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * mimicActions.length);
    const action = mimicActions[randomIndex];
    document.getElementById('mimicCard').textContent = action;
});
