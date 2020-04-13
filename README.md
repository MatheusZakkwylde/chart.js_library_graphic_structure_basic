# chart.js_library_graphic_structure_basic
Biblioteca chart.js em javascript para construção de gráficos simples mas com facilidade de uso. Consulte a documentação. Status (Funcionando)

1 - A biblioteca pode ser usada localmente ou usando o CDN no site oficial link : < https://www.chartjs.org> utilizando-se da tag canvas do
html5 para a construção de gráficos:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="width: 400px; height: 400px;">
         <canvas id="myChart" width="400" height="400" aria-label="Gráfico exemplo" role="img"></canvas>
    </div>

    <script src="/chart.js/dist/Chart.js"></script>
    <script src="/graphic.js"></script>
</body>
</html>

- Definindo-se um tamanho base, o gráfico será criado mas a biblioteca trabalha responsivamente;
- A biblioteca é chamada por um id definido como o exemplo a cima id='mychart';

    Utilizando-se da chamada local da biblioteca e o script definimos as seguintes informações:
    
let datas = [10,20,30,15,20,60] // dados a serem armazenados no gráfico. Utilize de ajax para alimentar ou user o array do exemplo.
    
let label = ["Jan","Feb","Mar","Apr","May","Jun"] //Titulos de cada valor. Utilize de ajax para alimentar ou exemplo de array.

let typeChart = 'bar' /*O tipo de gráfico pode ser line para linear,pie redondo e bar para barras. Teste todos para sua utilidade.*/

let title = "Gráfico exemplo de biblioteca" // Titulo do gráfico.

let ctx = document.getElementById('myChart').getContext('2d') //Pegando o id do canvas para usar o gráfico e pelo método getContext como
2D.

#Define uma variável para receber o objeto new Chart passando o id pegado método getElementById() do javascript.
let chart = new Chart(ctx, {
    #Dentro do json passado como parâmetro:
    type: typeChart, #Definição do tipo de gráfico.
    #data - json de informaçẽos.
    data: {
        labels:label, //Titulo de cada barra.
        #Informaçẽos do chart (Gráfico).
        datasets:[
            {
                label: '# of Sales',
                data: datas, #Dados a ser armazenadas em cada barra do gráfico.
                backgroundColor:[ #Definição das cores de cada barra por sequência.
                    '#000',
                    '#fff',
                    '#ccc'
                ],
                borderColor:[#Definição das bordas das barras por sequência.
                    '#fff',
                    '#ccc'
                ],
                borderWidth: 1 #tamanho das bordas.
            }
        ]
    },
    
    #Opçẽos de definição.
    options:{
      title:{
          text: title, #Titulo principal do grafico
          display:true
      },
      
      scales:{
        yAxes:[
            {
                ticks:{
                    beginAtZero: true #Defindo que o eixo y comecará do nivel 0
                }
            }
        ]
      }
    }
})

Consulte a documentação para mais informações, pois é bem intuitiva e explicativa. link: <https://www.chartjs.org>


