let datas = [10,20,30,15,20,60] // dados a serem armazenados no gráfico. Utilize de ajax para alimentar
let label = ["Jan","Feb","Mar","Apr","May","Jun"] //titulos de cada valor. Utilize de ajax para alimentar
let typeChart = 'bar' /*o tipo pode ser line para linear,pie redondo e bar para barras*/
let title = "Gráfico exemplo de biblioteca" // titulo do gráfico
let ctx = document.getElementById('myChart').getContext('2d') //pegando o id do canvas para usar o gráfico

let chart = new Chart(ctx, {
  
    type: typeChart, 
    data: {
        labels:label,

        datasets:[
            {
                label: '# of Sales',
                data: datas,
                backgroundColor:[
                    '#000',
                    '#fff',
                    '#ccc'
                ],
                borderColor:[
                    '#fff',
                    '#ccc'
                ],
                borderWidth: 1
            }
        ]
    },

    options:{
      title:{
          text: title,
          display:true
      },
      
      scales:{
        yAxes:[
            {
                ticks:{
                    beginAtZero: true
                }
            }
        ]
      }
    }
})
