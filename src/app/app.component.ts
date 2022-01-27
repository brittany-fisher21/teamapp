import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newMemberName="";
  members: string [] =[];

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);//displays new member name
  }

  addMember(){
    console.log('I CLICKED IT'); //confirmed the click!
    this.members.push(this.newMemberName);
    console.log(this.members);//displays empty string

  }
}
