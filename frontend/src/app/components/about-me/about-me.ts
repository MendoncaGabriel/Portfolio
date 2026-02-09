import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  profileImageUrl:string = "assets/gabriel.png";
  referencesLinks = {
    "ubuntu server": "https://ubuntu.com/server",
    "nextcloud": "https://nextcloud.com/",
    "jellyfin": "https://jellyfin.org/",
    "pdfding": "https://pdfding.com/",
    "immich": "https://immich.app/",
    "O Livro dos Cinco Anéis": "https://www.amazon.com.br/Livro-dos-Cinco-An%C3%A9is-Acompanha/dp/6585168348/ref=sr_1_2?adgrpid=126183150453&dib=eyJ2IjoiMSJ9.aFu1w2K0MVvy1OLgRp3YQht3bsQgFhi_NQIY9jYueGJ0mcG-8byOjeWXIG7NRDhsgA6dgN50NBJmrkGo_IfbLdz7Dl6jRVlvQN3vc1Gu13SFMZp1rPJIVRpit43gKUOArC7VH9rhzmh_Csybpmv1nN7VTcw2CFZMDIVU0bOZBPP5zErzRgoHvCwgPZGGzVDHBOHmJNKy4gpf0MVFBVVxIstVhZthMIMKrb1QgpOt90sAo7jbavptW35mbtkV5VJZaYMqBGWX4AwCLaqI2EWvDMy1B1Q1yrwkyA0DrfP_w2A.UFBkaXkMzNjzAthiglaJVrcJdmpeW2J0iQ2LxwJvuK4&dib_tag=se&hvadid=595919776538&hvdev=c&hvlocphy=9101689&hvnetw=g&hvqmt=e&hvrand=13087370147888733809&hvtargid=kwd-340676168353&hydadcr=12602_13418913&keywords=o+livro+dos+cinco+an%C3%A9is&mcid=788594c05d3439d58c4804710fba5dc9&qid=1770604919&sr=8-2",
  }
}
  