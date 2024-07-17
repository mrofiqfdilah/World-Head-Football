function canvas() {
    // Deklarasi variabel dan mendapatkan elemen-elemen DOM
    var username = document.getElementById("username").value;
    var form = document.getElementById("form");
    var buttonuser = document.getElementById("username-button");
    var buttonhistory = document.getElementById("history-button");
    var containerform = document.getElementById("container");
    var level = document.getElementById("level").value;
    var benderasendiri = document.getElementById("benderasendiri").value;
    var benderamusuh = document.getElementById("benderamusuh").value;
    var ball = document.getElementById("ball-color").value;
    var boardscore = document.getElementById("scoreboard");

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var backgroundImage = new Image();
    backgroundImage.src = "./Asset/background2.jpg"; 
    backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    }

    canvas.width = 1000;
    canvas.height = 600;

    buttonuser.textContent = username;

    if (!username) {
        alert('Masukkan username terlebih dahulu.');
        return;
    }

    let timerInterval;
    let countdownInterval;
    let gameTime;

     // Variables for animations
     var increaseImage = new Image();
     increaseImage.src = 'Asset/Increase Ball.png';
     var increaseX = Math.random() * canvas.width; // Random x position
     var increaseY = -100; // Start above the canvas
     var increaseSpeed = 2; // Fall speed
 
     var decreaseImage = new Image();
     decreaseImage.src = 'Asset/Decrease Ball.png';
     var decreaseX = Math.random() * canvas.width; // Random x position
     var decreaseY = -100; // Start above the canvas
     var decreaseSpeed = 2; // Fall speed
 
     var diamondImage = new Image();
     diamondImage.src = 'Asset/Diamond Ice.png';
     var diamondX = Math.random() * canvas.width; // Random x position
     var diamondY = -100; // Start above the canvas
     var diamondSpeed = 2; // Fall speed

    if (level === 'easy') {
        gameTime = 30;
    } else if (level === 'medium') {
        gameTime = 20;
    } else if (level === 'hard') {
        gameTime = 15;
    }

    var benderaplayer1 = new Image();
    benderaplayer1.src = `./Flag/${benderasendiri}.png`;
    benderaplayer1.classList.add("bendera-player1");
    document.body.appendChild(benderaplayer1);

    var benderaplayer2 = new Image();
    benderaplayer2.src = `./Flag/${benderamusuh}.png`;
    benderaplayer2.classList.add("bendera-player2");
    document.body.appendChild(benderaplayer2);

    var gawangplayer1 = new Image();
    gawangplayer1.src = `Asset/Goal - side.png`;
    var gawangplayer1x = 50;
    var gawangplayer1y = 260;

    var gawangplayer2 = new Image();
    gawangplayer2.src = `Asset/Goal - side.png`;
    gawangplayer2.classList.add("heal");
    var gawangplayer2x = 800;
    var gawangplayer2y = 260;

    
    
    const countdownElement = document.getElementById('countdown');
    countdownElement.style.display = 'block';

    let countdown = 3;

    countdownInterval = setInterval(() => {
        countdownElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            countdownElement.style.display = 'none';

            const timerElement = document.getElementById('timer');
            timerElement.style.display = 'block';

            timerInterval = setInterval(() => {
                gameTime--;
                timerElement.textContent = `${gameTime}`;

                if (gameTime <= 0) {
                    clearInterval(timerInterval);
                    window.location.href = "index.html";
                }
            }, 1000);
        }
    }, 1000);

    var countryToNumber = {
        'Brazil': '1',
        'England': '2',
        'Spain': '3',
        'Japan': '4',
        'Netherlands': '5',
        'Portugal': '6',
        'Germany': '7',
        'Italy': '8'
    };

    var player1Number = countryToNumber[benderasendiri];
    var player2Number = countryToNumber[benderamusuh];

    var player1IdleImages = [];
    for (var i = 0; i <= 17; i++) {
        var img = new Image();
        img.src = `Characters/Character 0${player1Number} - ${benderasendiri}/Idle/Idle_${i.toString().padStart(3, '0')}.png`;
        player1IdleImages.push(img);
    }

    var player1KickImages = [];
    for (var i = 0; i <= 8; i++) {
        var img = new Image();
        img.src = `Characters/Character 0${player1Number} - ${benderasendiri}/Kick/Kick_${i.toString().padStart(3, '0')}.png`;
        player1KickImages.push(img);
    }

    var player1MoveForwardImages = [];
    for (var i = 0; i <= 5; i++) {
        var img = new Image();
        img.src = `Characters/Character 0${player1Number} - ${benderasendiri}/Move Forward/Move Forward_${i.toString().padStart(3, '0')}.png`;
        player1MoveForwardImages.push(img);
    }

    var player1MoveBackwardImages = [];
    for (var i = 0; i <= 5; i++) {
        var img = new Image();
        img.src = `Characters/Character 0${player1Number} - ${benderasendiri}/Move Backward/Move Backward_${i.toString().padStart(3, '0')}.png`;
        player1MoveBackwardImages.push(img);
    }

    var player2IdleImages = [];
    for (var i = 0; i <= 17; i++) {
        var img = new Image();
        img.src = `Characters/Character 0${player2Number} - ${benderamusuh}/Idle/Idle_${i.toString().padStart(3, '0')}.png`;
        player2IdleImages.push(img);
    }

    var player2KickImages = [];
    for (var i = 0; i <= 8; i++) {
        var img = new Image();
        img.src = `Characters/Character 0${player2Number} - ${benderamusuh}/Kick/Kick_${i.toString().padStart(3, '0')}.png`;
        player2KickImages.push(img);
    }

    var player2MoveForwardImages = [];
    for (var i = 0; i <= 5; i++) {
        var img = new Image();
        img.src = `Characters/Character 0${player2Number} - ${benderamusuh}/Move Forward/Move Forward_${i.toString().padStart(3, '0')}.png`;
        player2MoveForwardImages.push(img);
    }

    var player2MoveBackwardImages = [];
    for (var i = 0; i <= 5; i++) {
        var img = new Image();
        img.src = `Characters/Character 0${player2Number} - ${benderamusuh}/Move Backward/Move Backward_${i.toString().padStart(3, '0')}.png`;
        player2MoveBackwardImages.push(img);
    }

    var player2x = 570;
    var player2y = 360;
    var player2IdleIndex = 0;
    var player2KickIndex = 0;
    var player2MoveForwardIndex = 0;
    var player2MoveBackwardIndex = 0;
    var isKickingPlayer2 = false;
    var isMovingForwardPlayer2 = false;
    var isMovingBackwardPlayer2 = false;

    var player1x = 270;
    var player1y = 360;
    var player1IdleIndex = 0;
    var player1KickIndex = 0;
    var player1MoveForwardIndex = 0;
    var player1MoveBackwardIndex = 0;
    var isKicking = false;
    var isMovingForward = false;
    var isMovingBackward = false;

    var bola = new Image();
    bola.src = `Asset/${ball}.png`;
    var bolax = 475;
    var bolay = 430;

    var player1Score = 0;
    var player2Score = 0;

    function updateScoreboard() {
        document.getElementById('player1-score').textContent = `${player1Score}`;
        document.getElementById('player2-score').textContent = `${player2Score}`;
    }

    var ballKickFrame = 0; // Untuk mengontrol frame animasi bola ketika ditendang
var bouncingFrames = 20; // Jumlah frame untuk efek bouncing pada awal permainan
var isBallRolling = false;
var ballRollFrame = 0;
var ballRollSpeedX = 5; // Kecepatan horizontal bola bergelinding
var ballRollSpeedY = 2; // Kecepatan vertikal bola bergelinding


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

         // Draw falling items
         ctx.drawImage(increaseImage, increaseX, increaseY, 50, 50);
         ctx.drawImage(decreaseImage, decreaseX, decreaseY, 50, 50);
         ctx.drawImage(diamondImage, diamondX, diamondY, 50, 50);
 
         // Update positions for next frame
         increaseY += increaseSpeed;
         decreaseY += decreaseSpeed;
         diamondY += diamondSpeed;
 
         // Reset items when they fall off screen
         if (increaseY > canvas.height) {
             increaseX = Math.random() * canvas.width;
             increaseY = -100;
         }
         if (decreaseY > canvas.height) {
             decreaseX = Math.random() * canvas.width;
             decreaseY = -100;
         }
         if (diamondY > canvas.height) {
             diamondX = Math.random() * canvas.width;
             diamondY = -100;
         }
 
     
       // Draw the flags in the "COUNTRY FLAG" section
var flagWidth = 100; // Adjust flag width as needed
var flagHeight = 68; // Adjust flag height as needed
var sectionStartX = 0;
var sectionEndX = canvas.width;
var sectionY = 373; // Y-coordinate for the flag section

// Draw flags alternately
for (var x = sectionStartX; x < sectionEndX; x += flagWidth) {
    if ((x / flagWidth) % 2 === 0) {
        ctx.drawImage(benderaplayer1, x, sectionY, flagWidth, flagHeight);
    } else {
        ctx.drawImage(benderaplayer2, x, sectionY, flagWidth, flagHeight);
    }
}


    // Draw gawangplayer1
    ctx.drawImage(gawangplayer1, gawangplayer1x, gawangplayer1y, 120, 250);

    ctx.save();
    ctx.translate(gawangplayer2x + 60, gawangplayer2y + 125); // Adjust for the center of the image (half of width and height)
    ctx.scale(-1, 1); // Flip horizontally
    ctx.drawImage(gawangplayer2, -60, -125, 120, 250); // Draw the image offset by half of width and height
    ctx.restore();
    
    // Draw player1
    if (isKicking) {
        ctx.drawImage(player1KickImages[player1KickIndex], player1x, player1y, 155, 155); 
    } else if (isMovingForward) {
        ctx.drawImage(player1MoveForwardImages[player1MoveForwardIndex], player1x, player1y, 155, 155); 
    } else if (isMovingBackward) {
        ctx.drawImage(player1MoveBackwardImages[player1MoveBackwardIndex], player1x, player1y, 155, 155); 
    } else {
        ctx.drawImage(player1IdleImages[player1IdleIndex], player1x, player1y, 155, 155); 
    }


    ctx.save();
    ctx.translate(player2x + 77.5, player2y + 77.5); // Adjust for the center of the image
    ctx.scale(-1, 1); // Flip horizontally
    
    if (isKickingPlayer2) {
        ctx.drawImage(player2KickImages[player2KickIndex], -77.5, -77.5, 155, 155); // Draw player2 kicked
    } else if (isMovingForwardPlayer2) {
        ctx.drawImage(player2MoveForwardImages[player2MoveForwardIndex], -77.5, -77.5, 155, 155); // Draw player2 moving forward
    } else if (isMovingBackwardPlayer2) {
        ctx.drawImage(player2MoveBackwardImages[player2MoveBackwardIndex], -77.5, -77.5, 155, 155); // Draw player2 moving backward
    } else {
        ctx.drawImage(player2IdleImages[player2IdleIndex], -77.5, -77.5, 155, 155); // Draw player2 idle
    }
    ctx.restore();

    // Animate the ball rolling before stopping at the target position
    if (ballRollFrame > 0) {
        bolax += ballRollSpeedX * Math.sign(ballTargetX - bolax);
        bolay += ballRollSpeedY * Math.sign(ballTargetY - bolay);
        ballRollFrame--;

        if (ballRollFrame === 0) {
            bolax = ballTargetX; // Set final position
            bolay = ballTargetY; // Set final position
        }
    }

    // Draw the ball
    ctx.drawImage(bola, bolax, bolay, 60, 60);

    // Check for goals
    if (bolax < gawangplayer1x + 130 && bolay > gawangplayer1y && bolay < gawangplayer1y + 250) {
        // Player 2 scores
        player2Score++;
        updateScoreboard();
        // Reset positions
        player1x = 270;
        player1y = 360;
        bolax = 475;
        bolay = 430;
        player2x = 570;
        player2y = 360;
    } else if (bolax > gawangplayer2x && bolay > gawangplayer2y && bolay < gawangplayer2y + 250) {
        // Player 1 scores
        player1Score++;
        updateScoreboard();
        // Reset positions
        player1x = 270;
        player1y = 360;
        bolax = 475;
        bolay = 430;
        player2x = 570;
        player2y = 360;
    }

    if (bolax + ballWidth > increaseX && bolax < increaseX + 50 && bolay + ballHeight > increaseY && bolay < increaseY + 50) {
        // Increase the size of the ball
        ballWidth *= 1.2; // Adjust the scale factor as needed
        ballHeight *= 1.2; // Adjust the scale factor as needed
    }

    // Check collision with decrease
    if (bolax + ballWidth > decreaseX && bolax < decreaseX + 50 && bolay + ballHeight > decreaseY && bolay < decreaseY + 50) {
        // Decrease the size of the ball
        ballWidth *= 0.8; // Adjust the scale factor as needed
        ballHeight *= 0.8; // Adjust the scale factor as needed
    }
}

    function animatePlayers() {
        if (isKicking) {
            player1KickIndex++;
            if (player1KickIndex >= player1KickImages.length) {
                player1KickIndex = 0;
                isKicking = false;
            }
        } else if (isMovingForward) {
            player1MoveForwardIndex++;
            if (player1MoveForwardIndex >= player1MoveForwardImages.length) {
                player1MoveForwardIndex = 0;
            }
        } else if (isMovingBackward) {
            player1MoveBackwardIndex++;
            if (player1MoveBackwardIndex >= player1MoveBackwardImages.length) {
                player1MoveBackwardIndex = 0;
            }
        } else {
            player1IdleIndex++;
            if (player1IdleIndex >= player1IdleImages.length) {
                player1IdleIndex = 0;
            }
        }

        if (isKickingPlayer2) {
            player2KickIndex++;
            if (player2KickIndex >= player2KickImages.length) {
                player2KickIndex = 0;
                isKickingPlayer2 = false;
            }
        } else if (isMovingForwardPlayer2) {
            player2MoveForwardIndex++;
            if (player2MoveForwardIndex >= player2MoveForwardImages.length) {
                player2MoveForwardIndex = 0;
            }
        } else if (isMovingBackwardPlayer2) {
            player2MoveBackwardIndex++;
            if (player2MoveBackwardIndex >= player2MoveBackwardImages.length) {
                player2MoveBackwardIndex = 0;
            }
        } else {
            player2IdleIndex++;
            if (player2IdleIndex >= player2IdleImages.length) {
                player2IdleIndex = 0;
            }
        }
        draw();
    }

    backgroundImage.onload = function() {
        draw();
    };

    bola.onload = function() {
        draw();
    };

    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'd': // Move player1 right
                player1x += 10;
                isMovingForward = true;
                break;
            case 'a': // Move player1 left
                player1x -= 10;
                isMovingBackward = true;
                break;
            case 'w': // Move player1 up
                player1y -= 10;
                break;
            case 's': // Move player1 down
                player1y += 10;
                break;
            case 'k': // Player1 kick
                if (player1x + 100 >= bolax && player1x <= bolax + 100 && player1y + 200 >= bolay && player1y <= bolay + 80) {
                    ballTargetX = bolax + 220; // Target position
                ballTargetY = bolay; // Target position
                ballRollFrame = 20; // Number of frames for the rolling animation
            }
            isKicking = true;
            player1KickIndex = 0;
            break;
            case 'ArrowLeft': // Move player2 left
                player2x -= 10;
                isMovingForwardPlayer2 = true;
                break;
            case 'ArrowRight': // Move player2 right
                player2x += 10;
                isMovingBackwardPlayer2 = true;
                break;
            case 'ArrowUp': // Move player2 up
                player2y -= 10;
                break;
            case 'ArrowDown': // Move player2 down
                player2y += 10;
                break;
            case 'm': // Player2 kick
                if (player2x + 100 >= bolax && player2x <= bolax + 100 && player2y + 200 >= bolay && player2y <= bolay + 80) {
                    ballTargetX = bolax - 220; // Target position
                ballTargetY = bolay; // Target position
                ballRollFrame = 20; // Number of frames for the rolling animation
                }
                isKickingPlayer2 = true;
            player2KickIndex = 0;
            break;
        }
        draw(); // Redraw canvas
    });

    document.addEventListener('keyup', function(event) {
        switch (event.key) {
            case 'd': // Stop moving player1 right
            case 'a': // Stop moving player1 left
                isMovingForward = false;
                isMovingBackward = false;
                break;
            case 'ArrowLeft': // Stop moving player2 left
            case 'ArrowRight': // Stop moving player2 right
                isMovingForwardPlayer2 = false;
                isMovingBackwardPlayer2 = false;
                break;
        }
    });

    updateScoreboard();

    containerform.style.display = "none";
    buttonhistory.style.display = "block";
    buttonuser.style.display = "block";
    canvas.style.display = "block";
    form.style.display = "none";
    boardscore.style.display = "block";

    setInterval(animatePlayers, 20); // Change image every 100ms (adjust as needed)
}

