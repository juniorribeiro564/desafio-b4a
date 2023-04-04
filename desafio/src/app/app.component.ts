import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'desafio';
  instagram: any;
  contexto: any;
  clickEmail: boolean = false;

  produtoLista = [
    {
      img: "../assets/img/image 3.svg",
      instagram: "@caroll_cassis",
      contexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },
    {
      img: "../assets/img/image 4.svg",
      instagram: "@bypalomasoares",
      contexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."

    },
    {
      img: "../assets/img/image 6.svg",
      instagram: "@carolaine_moreira",
      contexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."

    },
    {
      img: "../assets/img/image 7.svg",
      instagram: "@thaysnrezende",
      contexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."

    },
    {
      img: "../assets/img/image 8.svg",
      instagram: "@laissaorsano",
      contexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },
    {
      img: "../assets/img/image 9.svg",
      instagram: "@laissaorsano",
      contexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },
    {
      img: "../assets/img/image 10.svg",
      instagram: "@laissaorsano",
      contexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },
    {
      img: "../assets/img/image 11.svg",
      instagram: "@laissaorsano",
      contexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },
    {
      img: "../assets/img/image 12.svg",
      instagram: "@laissaorsano",
      contexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },
    {
      img: "../assets/img/image 13.svg",
      instagram: "@laissaorsano",
      contexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    }
  ]

  constructor(
  ) { }


  ngOnInit(): void {
    const controls = document.querySelectorAll(".control");
    let currentItem = 0;
    const items = document.querySelectorAll(".item");
    // const items = this.produtoLista;
    const maxItems = items.length;

    controls.forEach((control) => {
      control.addEventListener("click", (e: any) => {
        let isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
          currentItem -= 1;
        } else {
          currentItem += 1;
        }

        if (currentItem >= maxItems) {
          currentItem = 0;
        }

        if (currentItem < 0) {
          currentItem = maxItems - 1;
        }

        console.log("currentItem ->", currentItem)

        items.forEach((img) => img.classList.remove("current-item"));

        items[currentItem].scrollIntoView({
          behavior: "smooth",
          inline: "center"
        });

        items[currentItem].classList.add("current-item");
      });
    });
  }

  enviarEmail() {
    this.clickEmail = true;
  }
}
