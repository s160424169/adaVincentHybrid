import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false,
})
export class ProfilPage implements OnInit {
  constructor(private animationCtrl: AnimationController) { }

  growAndShrinkAvatar() {
    const avatarElement = document.querySelector('.profile-avatar') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(5000)
      .iterations(3)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' }
      ])
    animation.play();
  }

  ionViewDidEnter() {

    this.growAndShrinkAvatar();
  }

  ngOnInit() {
  }

}
