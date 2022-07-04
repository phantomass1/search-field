import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  onClick(event: Event){
    const search = document.querySelector('.search');
    const page = document.documentElement;
    const change = document.getElementById('change')
    const button = document.getElementById("submit")
    const right = document.getElementById('right');
    if(search && change && button){
      search.addEventListener('click', function (event){
        event.stopPropagation()
        change.style.visibility = "hidden";
        search.classList.add('search--active');
        button.style.visibility = "hidden";
      })
    }
    if(page && search  && change && button){
      page.addEventListener('click', function (){
        search.classList.remove('search--active')
        change.style.visibility = "visible";
        button.style.visibility = "visible";
      })
    }
    if(window.matchMedia("(max-width: 414px)").matches && right && search){
         right.style.display = "none";

    }
    else if(window.matchMedia("(min-width: 415px)").matches && right && search && page){
        right.style.display = "inherit";
    }
  }

  onFocus(){
    const filter = document.getElementById("filter")
    const page = document.documentElement;
    if(filter){
      if(filter && page){
        page.addEventListener('click', function (){
          filter.style.display = "none"
        })
      }
      if (window.matchMedia("(max-width: 414px)").matches) {
        filter.style.display = "none"
      } else {
        filter.style.display = "block"
      }
    }


  }

  ngOnInit(): void {
  }

}
