var free_boxes = ["first_row_one","first_row_two","first_row_three",
                  "second_row_one","second_row_two","second_row_three",
                  "thirth_row_one","thirth_row_two","thirth_row_three"];
var tic_store = [];
var tac_store = [];
var i;
var tic = true;
var first_player_score = 0;
var second_player_score = 0;
var first_player = '';
var second_player = '';
var counter;

function play(clicked_id){
  box_counter(clicked_id);
  if ((tic_store.length >= 3) || (tac_store.length >= 3)){
    who_win();
  }
  change_picture();
  queue();
}

function box_counter(img_id){
  for (i = 0; i < free_boxes.length; i++){
    if (img_id == free_boxes[i]){
      document.getElementById(free_boxes[i]).style.cursor = 'text';
      document.getElementById(free_boxes[i]).parentElement.style.opacity = '1';
      document.getElementById(free_boxes[i]).setAttribute("onclick", '');
      if (tic){
        tic_store[tic_store.length] = free_boxes[i];
      }
      else {
        tac_store[tac_store.length] = free_boxes[i];
      }
      free_boxes.splice(i, 1)
    }
  }
}

function change_picture(){
  if (tic){
    for (i = 0; i < free_boxes.length; i++){
      document.getElementById(free_boxes[i]).setAttribute("src", 'tac.jpg');
    }
    tic = !tic;
  }
  else {
    for (i = 0; i < free_boxes.length; i++){
      document.getElementById(free_boxes[i]).setAttribute("src", 'tic.png');
    }
    tic = !tic;
  }
}

function who_win(){
  if (free_boxes.length == 0){end_game("nobody");}
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tic_store[i] == "first_row_one"){
      counter+=1;
    }
    else if (tic_store[i] == "first_row_two") {
      counter+=1;
    }
    else if (tic_store[i] == "first_row_three") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('first_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tic_store[i] == "second_row_one"){
      counter+=1;
    }
    else if (tic_store[i] == "second_row_two") {
      counter+=1;
    }
    else if (tic_store[i] == "second_row_three") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('first_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tic_store[i] == "thirth_row_one"){
      counter+=1;
    }
    else if (tic_store[i] == "thirth_row_two") {
      counter+=1;
    }
    else if (tic_store[i] == "thirth_row_three") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('first_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tic_store[i] == "first_row_one"){
      counter+=1;
    }
    else if (tic_store[i] == "second_row_one") {
      counter+=1;
    }
    else if (tic_store[i] == "thirth_row_one") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('first_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tic_store[i] == "first_row_two"){
      counter+=1;
    }
    else if (tic_store[i] == "second_row_two") {
      counter+=1;
    }
    else if (tic_store[i] == "thirth_row_two") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('first_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tic_store[i] == "first_row_three"){
      counter+=1;
    }
    else if (tic_store[i] == "second_row_three") {
      counter+=1;
    }
    else if (tic_store[i] == "thirth_row_three") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('first_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tic_store[i] == "first_row_one"){
      counter+=1;
    }
    else if (tic_store[i] == "second_row_two") {
      counter+=1;
    }
    else if (tic_store[i] == "thirth_row_three") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('first_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tic_store[i] == "first_row_three"){
      counter+=1;
    }
    else if (tic_store[i] == "second_row_two") {
      counter+=1;
    }
    else if (tic_store[i] == "thirth_row_one") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('first_player');
  }

  counter = 0;
  for (i = 0; i < 9; i++){
    if (tac_store[i] == "first_row_one"){
      counter+=1;
    }
    else if (tac_store[i] == "first_row_two") {
      counter+=1;
    }
    else if (tac_store[i] == "first_row_three") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('second_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tac_store[i] == "second_row_one"){
      counter+=1;
    }
    else if (tac_store[i] == "second_row_two") {
      counter+=1;
    }
    else if (tac_store[i] == "second_row_three") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('second_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tac_store[i] == "thirth_row_one"){
      counter+=1;
    }
    else if (tac_store[i] == "thirth_row_two") {
      counter+=1;
    }
    else if (tac_store[i] == "thirth_row_three") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('second_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tac_store[i] == "first_row_one"){
      counter+=1;
    }
    else if (tac_store[i] == "second_row_one") {
      counter+=1;
    }
    else if (tac_store[i] == "thirth_row_one") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('second_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tac_store[i] == "first_row_two"){
      counter+=1;
    }
    else if (tac_store[i] == "second_row_two") {
      counter+=1;
    }
    else if (tac_store[i] == "thirth_row_two") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('second_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tac_store[i] == "first_row_three"){
      counter+=1;
    }
    else if (tac_store[i] == "second_row_three") {
      counter+=1;
    }
    else if (tac_store[i] == "thirth_row_three") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('second_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tac_store[i] == "first_row_one"){
      counter+=1;
    }
    else if (tac_store[i] == "second_row_two") {
      counter+=1;
    }
    else if (tac_store[i] == "thirth_row_three") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('second_player');
  }
  counter = 0;
  for (i = 0; i < 9; i++){
    if (tac_store[i] == "first_row_three"){
      counter+=1;
    }
    else if (tac_store[i] == "second_row_two") {
      counter+=1;
    }
    else if (tac_store[i] == "thirth_row_one") {
      counter+=1;
    }
  }
  if (counter == 3){
    end_game('second_player');
  }
}

function end_game(winner){
  if (winner == "nobody"){
    first_player_score += 1;
    second_player_score += 1;
    document.getElementById('main').innerHTML = "<h1 id='annonce'>"+"No winner!"+"</h1>";
  }
  else if (winner == "first_player") {
    first_player_score += 1;
    document.getElementById('main').innerHTML = "<h1 id='annonce'>"+first_player+" is win!"+"</h1>";
  }
  else if (winner == "second_player") {
    second_player_score += 1;
    document.getElementById('main').innerHTML = "<h1 id='annonce'>"+second_player+" is win!"+"</h1>";
  }
  for (i = 0; i < 9; i++){
    try {
      document.getElementById(free_boxes[i]).setAttribute("onclick", '');
    } catch (e) {
      continue;
    }
  }
  document.getElementById('game').style.pointerEvents = 'none';
  document.getElementById('queue').style.display = 'none';
  document.getElementById('restart').style.display = "inline";
  document.getElementById('restart_again').style.display = "inline";
}

function start(){
  var form = document.forms['form'];
  first_player = form['first_player'].value;
  second_player = form['second_player'].value;
  document.getElementById('game').style.display = "block";
  document.getElementsByClassName('liter')[0].style.display = 'none';
  document.getElementsByClassName('liter')[1].style.display = 'none';
  queue();
}

function queue(){
  if (tic){
    document.getElementById('queue').innerHTML = '<p>' + "Now player: " + first_player + " is tic" + '</p>';
  }
  else{
    document.getElementById('queue').innerHTML = '<p>' + "Now player: " + second_player + " is tac" + '</p>';
  }
  var text = first_player + "`s score : " + first_player_score + '<br>' + second_player + "`s score : " + second_player_score;
  document.getElementById('results').innerHTML = text;
}

function restart(){
  document.getElementById('queue').style.display = 'block';
  document.getElementById('annonce').remove();
  document.getElementById('game').style.pointerEvents = '';
  document.getElementById('restart').style.display = "none";
  document.getElementById('restart_again').style.display = "none";

  free_boxes = ["first_row_one","first_row_two","first_row_three",
                    "second_row_one","second_row_two","second_row_three",
                    "thirth_row_one","thirth_row_two","thirth_row_three"];
  tic_store = [];
  tac_store = [];

  for (i = 0; i < free_boxes.length; i++){
    document.getElementById(free_boxes[i]).setAttribute("src", 'tic.png');
    document.getElementById(free_boxes[i]).style.cursor = 'pointer';
    document.getElementById(free_boxes[i]).parentElement.style.opacity = '0.3';
    document.getElementById(free_boxes[i]).setAttribute("onclick", 'play(this.id)');
  }
  tic = true;
}

document.getElementById('game').style.display = "none";  //It is for registration
document.getElementById('restart').style.display = "none";
document.getElementById('restart_again').style.display = "none";

