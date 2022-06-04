const shuffled = wordlist.sort(() => 0.5 - Math.random())
document.getElementById('name').innerHTML = shuffled[0]