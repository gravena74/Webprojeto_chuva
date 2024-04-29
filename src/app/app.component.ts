import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DevChuva';

  ngOnInit(): void {
    const botaoExpandir = document.querySelector('.botao_expandir') as HTMLElement;
    const textoCurto = document.querySelector('.texto_curto') as HTMLElement;
    const textoLongo = document.querySelector('.texto_longo') as HTMLElement;
    const botaoMenos = document.querySelector('.botao_verMenos') as HTMLElement;

    const botaoCriacao = document.querySelector('.botaoCriacao') as HTMLElement;
    const cria_topico = document.querySelector('.cria_topico') as HTMLElement;
    const forms_cria = document.querySelector('.forms_cria') as HTMLElement;

    const botao_envia = document.querySelector('.botao_envia') as HTMLElement;
    const forms_enviado = document.querySelector('.forms_enviado') as HTMLElement;

    const botaoCriacaoNovo = document.querySelector('.botaoCriacaoNovo') as HTMLElement;

    const topicoPronto2 = document.querySelector('#topicoPronto2') as HTMLElement;
    const comentarios = document.querySelector('.comentarios') as HTMLElement;

    let verifica: boolean = false;
    let expandido: boolean = false;

    botaoExpandir.addEventListener('click', () => {
      if (expandido) {
        textoCurto.style.display = 'block';
        textoLongo.style.display = 'none';
        botaoExpandir.textContent = 'Ver mais';
        expandido = false;
      } else {
        textoCurto.style.display = 'none';
        textoLongo.style.display = 'block';
        botaoExpandir.textContent = 'Ver menos';
        expandido = true;
      }
    });

    botaoMenos.addEventListener('click', () => {
      if (expandido) {
        textoCurto.style.display = 'block';
        textoLongo.style.display = 'none';
        botaoExpandir.textContent = 'Ver mais';
        expandido = false;
      } else {
        textoCurto.style.display = 'none';
        textoLongo.style.display = 'block';
        botaoExpandir.textContent = 'Ver menos';
        expandido = true;
      }
    });

    botaoCriacao.addEventListener('click', () => {
      forms_cria.style.display = "block";
      cria_topico.style.display = "none";
    });

    botao_envia.addEventListener('click', () => {
      forms_cria.style.display = "none";
      forms_enviado.style.display = "block";
    });

    botaoCriacaoNovo.addEventListener('click', () => {
      forms_cria.style.display = "block";
      forms_enviado.style.display = "none";
    });

    topicoPronto2.addEventListener('click', () => {
      if (verifica) {
        comentarios.style.display = "none";
        verifica = false;
      } else {
        comentarios.style.display = "block";
        verifica = true;
      }
    });

    comentarios.addEventListener('click', ()=>{
      comentarios.style.display = "none"
    });
  }
}