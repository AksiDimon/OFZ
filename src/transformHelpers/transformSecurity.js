import {yearsToMaturity} from '../calcsFuncs/yearsToMaturity';
import {getCouponYield} from '../calcsFuncs/getCouponYield.js';

// 1) достаю данные и привожу их в порядок давая каждому значению ключ
export function transformResponse({ columns, data }) {
  const arr = [];

  for (const values of data) {
    const obj = {};
    let i = 0;
    for (const column of columns) {
      obj[column] = values[i];
      i += 1;
    }
    arr.push(obj);
  }
  return arr;
}



//2)Для слияния в один объект из marketdata и securities для каждой офз
export function fusionTransform (marketdata, securities) {
  const obj = {}
  for(let i = 0; i < marketdata.length; i += 1 ) {
      obj[marketdata[i].SECID] = {...marketdata[i], ...securities[i]}
  // console.log(marketdata[i].SECID)
  }
    console.log(obj, 'fusionTransform')
  return obj
}

//3) даю ключам русские названия
export function transformSecurity(obj) { // заготовка что бы верхний then, логику вынести в функцию 
  const result = [];
  let num = 1
for (let bond in obj) {
  const myObj = {
      '№': '',
      'SECID': '-',
      'Имя':'-',
      'Погашение' : '-',
      'Лет до погашения': '?',
      'Доходность': '-',
      'Год. куп. дох.' : '-',
      'Куп. дох. посл.' : '?',
      'Цена' : '-',
      'Купон, руб.' : '-',
      'Частота раз в год' : '-',
      'НКД': '-',
      'Дюрация' : '-',
      'Дата купона' : '-',
      'ISIN'  : '-',
      'Номинал облигации'  : '-',
  }; 

  myObj['№'] = num
  myObj['SECID'] = bond
  myObj['Имя'] = obj[bond].SHORTNAME
  myObj['Погашение'] = obj[bond].MATDATE
  myObj['Лет до погашения'] = yearsToMaturity(obj[bond].MATDATE) // функция yearsToMaturity(obj[bond].MATDATE)
  myObj['Доходность'] = `${obj[bond].YIELD}%` 
  myObj['Год. куп. дох.'] =  obj[bond].COUPONPERCENT !== null ? `${obj[bond].COUPONPERCENT}%` : `0%`
  myObj['Куп. дох. посл.'] =  getCouponYield(obj[bond].MARKETPRICE, obj[bond].COUPONPERCENT)
  myObj['Цена'] = obj[bond].MARKETPRICE
  myObj['Купон, руб.'] = obj[bond].COUPONVALUE
  myObj['Частота раз в год'] = (365/  obj[bond].COUPONPERIOD).toFixed()
  myObj['НКД'] = obj[bond].ACCRUEDINT
  myObj['Дюрация'] = obj[bond].DURATION
  myObj['Дата купона'] = obj[bond].NEXTCOUPON
  myObj['ISIN'] = obj[bond].ISIN
  myObj['Номинал облигации'] = obj[bond].LOTVALUE
  result.push(myObj)
  num += 1

  
}

const headerNamesRUS = [
  '№',
  'SECID',
  'Имя',
  'Погашение',
  'Лет до погашения',
  'Доходность',
  'Год. куп. дох.',
  'Куп. дох. посл.',
  'Цена',
  'Купон, руб.',
  'Частота раз в год',
  'НКД',
  'Дюрация',
  'Дата купона',
  'ISIN',
  'Номинал облигации',
]

//для вывода нужного мне порядка в объекте
const mainObj = []
for(const obj of result) {
  const orderedEntries = headerNamesRUS.map(key => [key, obj[key]])
  const orderedObj = Object.fromEntries(orderedEntries)
  mainObj.push(orderedObj)
}

console.log(result, 'transformSecurity')
return result

}

