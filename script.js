
   fetch('jokes.json')
  .then(response => response.json())
  .then(data => {
        
        const button = document.getElementById('jokeBtn');
        button.addEventListener('click', () => {
        // generate a random number between 0 and the length of the jokes array
        const i = Math.floor(Math.random() * data.length);
        // select the joke at the random index
        const randomJoke = data[i];
        // display the joke on the page
        document.getElementById("joke").innerText = `${randomJoke.setup} ${randomJoke.punchline}`;
        console.log(`${randomJoke.setup} ${randomJoke.punchline}`);
        });

  });
