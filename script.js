// задаем случайый массив по методу .map (задает 3 значения) рандомный
/*const array =  Array(20).fill(null).map(() => Math.floor
(Math.random() *2000) - 1000)*/

/*const array = 
[-699,
  -184,
  2,
  -785,
  -890,
  460,
  -206,
  -371,
  979,
  -869,
  304,
  75,
  -715,
  -527,
  152,
  909,
  -132,
  -266,
  -131,
  696]*/

const sorted = bubbleSort(
  Array(20).fill(null).map(() => Math.floor(Math.random() * 2000) - 1000)
)
console.log(sorted)

function bubbleSort(array) {
  for (let n = 0; n < array.length; n++) { //создаем цикл для цикла замены
    for (let i = 0; i < array.length - 1 - n; i++) { //создаем цикл для замены + добавляем -n чтобы цикл каждый раз не проходил уже отфильтрованное
      //если нынешнее айное число больше ай+1, тогда
      if (array[i] > array[i + 1]) {
        // 3 строчки алгоритм для того чтобы поменять числа местами 
        const buff = array[i]
        array[i] = array[i + 1]
        array[i + 1] = buff
      }

    }

  }

  return array
}