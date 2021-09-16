class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1a = createElement('h4');
    this.input1 = createInput(" ");
    this.input2a = createElement('h4');
    this.input2 = createInput(" ")
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1a.hide();
    this.input2a.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- Which room has no doors and no windows? " );
    this.question.position(150, 80);
    this.option1.html("1: Jailroom " );
    this.option1.position(150, 100);
    this.option2.html("2: Mushroom" );
    this.option2.position(150, 120);
    this.option3.html("3: Bathroom " );
    this.option3.position(150, 140);
    this.option4.html("4: Locked-room" );
    this.option4.position(150, 160);

    this.input1a.html("Enter Your Name Below");
    this.input1a.position(150, 230);
    this.input1.position(150, 280);
    this.input2a.html("Enter Correct Option No below");
    this.input2a.position(450, 230);
    this.input2.position(450, 280)
    this.button.position(290, 370);
    this.button2.position(360, 370);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.input1a.hide();
      this.input2a.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
