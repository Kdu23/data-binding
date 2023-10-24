import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
//------------------------------------------------------------------
url:string = 'http://loiane.traning'
//------------------------------------------------------------------
cursoAngular: boolean = true;
//------------------------------------------------------------------
urlImagem = 'https://loremflickr.com/320/240';
//------------------------------------------------------------------

getValor() {
return 1
}

//------------------------------------------------------------------
getCurtirCurso() {
  return true
}

//------------------------------------------------------------------
getValor2() {
  return 1
}

}
