# chart.js_library_graphic_structure_basic
Biblioteca chart.js em javascript para construção de gráficos simples com facilidade de uso. Consulte a documentação. Status (Funcionando)

Requisitos: Conhecimento de javascript, css básico, o que é um objeto, array ou json conceitos.

1 - A biblioteca pode ser usada localmente ou usando o CDN no site oficial link : < https://www.chartjs.org> utilizando-se da tag canvas do html5 para a construção de gráficos:


    <div style="width: 400px; height: 400px;">
         <canvas id="myChart" width="400" height="400" aria-label="Gráfico exemplo" role="img"></canvas>
    </div>

- Definindo-se um tamanho base, o gráfico será criado mas a biblioteca trabalha responsivamente;
- A biblioteca é chamada por um id definido como o exemplo a cima id='mychart';

    Utilizando-se da chamada local da biblioteca e o script definimos as seguintes informações:
    
- **let datas = [10,20,30,15,20,60]** - Dados a serem armazenados no gráfico. Utilize de ajax para alimentar ou user o array do exemplo;
- **let label = ["Jan","Feb","Mar","Apr","May","Jun"]** - Titulos de cada valor. Utilize de ajax para alimentar ou exemplo de array;
- **let typeChart = 'bar'** - O tipo do gráfico pode ser line para linear,pie redondo e bar para barras. Teste todos para sua utilidade;
- **let title = "Gráfico exemplo de biblioteca"** - Titulo do gráfico;
- **let ctx = document.getElementById('myChart').getContext('2d')** - Pegando o id do canvas para usar o gráfico e pelo método getContext como 2D.

let chart = new Chart(ctx, { //Criação do objeto Chart 
  
    type: typeChart, //Recebe o tipo de chart.
    data: {
        labels:label, //O nome de cada barra.

        datasets:[
            {
                label: '# of Sales',
                data: datas,//Dados de cada barra.
                backgroundColor:[ //Definição de cores de cada barra.
                    '#000',
                    '#fff',
                    '#ccc'
                ],
                borderColor:[ //Definição de cada borda de cada barra.
                    '#fff',
                    '#ccc'
                ],
                borderWidth: 1 //Tamanho da borda.
            }
        ]
    },

    options:{
      title:{
          text: title, //Titulo princial do chart.
          display:true
      },
      
      scales:{
        yAxes:[
            {
                ticks:{
                    beginAtZero: true //Definição do do eixo y começando de zero.
                }
            }
        ]
      }
    }
})

**Site oficial link :** < https://www.chartjs.org >

