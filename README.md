# chart.js_library_graphic_structure_basic
Biblioteca chart.js em javascript para construção de gráficos simples com facilidade de uso. Consulte a documentação. Status (Funcionando)

1 - A biblioteca pode ser usada localmente ou usando o CDN no site oficial link : < https://www.chartjs.org> utilizando-se da tag canvas do html5 para a construção de gráficos:


    <div style="width: 400px; height: 400px;">
         <canvas id="myChart" width="400" height="400" aria-label="Gráfico exemplo" role="img"></canvas>
    </div>

- Definindo-se um tamanho base, o gráfico será criado mas a biblioteca trabalha responsivamente;
- A biblioteca é chamada por um id definido como o exemplo a cima id='mychart';

    Utilizando-se da chamada local da biblioteca e o script definimos as seguintes informações:
    
- Dados a serem armazenados no gráfico. Utilize de ajax para alimentar ou user o array do exemplo.
let datas = [10,20,30,15,20,60] 

-Titulos de cada valor. Utilize de ajax para alimentar ou exemplo de array.
let label = ["Jan","Feb","Mar","Apr","May","Jun"] 

-O tipo de gráfico pode ser line para linear,pie redondo e bar para barras. Teste todos para sua utilidade.
let typeChart = 'bar' 

- Titulo do gráfico.
let title = "Gráfico exemplo de biblioteca" 

-Pegando o id do canvas para usar o gráfico e pelo método getContext como 2D.
let ctx = document.getElementById('myChart').getContext('2d') 

-Define uma variável para receber o objeto new Chart passando o id pegado método getElementById() do javascript.



