import { bandaInterface } from 'src/app/interface/banda.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  public banda1: bandaInterface;

  constructor() { 

    this.banda1 = {

      nombre: "John Lennon",
      vida: "Liverpool, 9 de octubre de 1940-Nueva York, 8 de diciembre de 1980",
      resumen: "Nació en Liverpool, donde siendo adolescente se vio inmerso en el boom británico del skiffle; formó la banda The Quarrymen en 1956, que posteriormente en 1960 se convertiría en The Beatles. Cuando el grupo se desintegró a finales de esa década, Lennon inició una carrera como solista en la que publicó varios álbumes como John Lennon/Plastic Ono Band e Imagine, y canciones como «Give Peace a Chance» e «Imagine»; la mayoría de ellas expresan sus ideas liberales y pacifistas. Después de contraer matrimonio con Yoko Ono en 1969 cambió su nombre a John Ono Lennon. Se retiró de la escena musical en 1975 para criar a su pequeño hijo Sean, pero resurgió junto con Ono en 1980 con el nuevo álbum Double Fantasy. Fue asesinado tres semanas después de su lanzamiento",
      foto: "https://biografiasehistoria.files.wordpress.com/2018/04/walls_bridges_1974_gruen_johnlennon-home-slider-min.jpg"

    }
  }

  ngOnInit(): void {
  }

}
