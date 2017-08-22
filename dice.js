let dice = function() {
    let result = Math.floor(Math.random() * 6 + 1);
    let elem = document.getElementById('resultbox');
    elem.className = 'yeah';
    elem.innerHTML = result;
    setTimeout(function() { elem.className = 'wow'; }, 100);
}

exports.dice = dice;