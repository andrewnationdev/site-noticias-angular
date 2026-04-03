import { Component } from '@angular/core';
import {PostSummary} from "../post-summary/post-summary"

@Component({
  selector: 'app-favorites-viewer',
  imports: [PostSummary],
  standalone: true,
  templateUrl: './favorites-viewer.html',
  styleUrl: './favorites-viewer.css',
})

export class FavoritesViewer {
  favorites = [
  ];

  /*
  
    {
        id: 1,
        title: "O Renascimento da Tipografia na Era Digital",
        excerpt: "Como o minimalismo visual está ajudando leitores a recuperarem o foco em um mundo saturado de informações e distrações constantes.",
        content: "O texto é a base da civilização. Em um ambiente digital repleto de distrações, pop-ups e vídeos automáticos, o retorno ao design focado puramente na palavra escrita não é apenas uma escolha estética, mas uma necessidade cognitiva. Estudos mostram que layouts mais limpos reduzem o estresse e aumentam a retenção de informações.",
        date: "01 Março, 2026",
        author: "Andrew G. Silva",
        category: "Cultura"
    },
    {
        id: 2,
        title: "Sistemas Embarcados e o Futuro do Jornalismo",
        excerpt: "A tecnologia silenciosa por trás dos servidores de baixa latência que entregam notícias instantâneas em qualquer dispositivo móvel.",
        content: "A infraestrutura é o herói não cantado das notícias. Enquanto o leitor foca no texto, milhares de linhas de código em linguagens de alto desempenho como C e frameworks modernos como Angular trabalham em conjunto para garantir que a experiência seja fluida.",
        date: "28 Fevereiro, 2026",
        author: "Equipe Técnica",
        category: "Tecnologia"
    },
    {
        id: 3,
        title: "Explorando a Gramática Fusha no Século XXI",
        excerpt: "O desafio de manter a tradição do árabe padrão em um ambiente dominado pelos dialetos velozes das redes sociais.",
        content: "A língua é um organismo vivo, mas suas raízes formais garantem a continuidade da história. O Fusha continua sendo a ponte que une o mundo árabe, do Marrocos ao Iraque, em um registro de elegância e precisão inigualáveis.",
        date: "27 Fevereiro, 2026",
        author: "Dpto. de Linguística",
        category: "Educação"
    }
  */

  getFavorites = () => {
      const storage = localStorage.getItem("favs");

      const data: any[] = JSON.parse(storage);

      if(data.length > 0){
        favorites = data;
      }
  }
}
