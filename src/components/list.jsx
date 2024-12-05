import s from './list.module.css'
import {fetchOfzBonds ,fetchList, headers, durationReqest } from '../requests/fetchList.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import { calculateAge } from '../calcsFuncs/calcsQuotes/calculateAge';


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
];
const headerNamesEN = ['№', 'SECID', 'SHORTNAME', 'MATDATE', 'YIELDATPREVWAPRICE', 'Profitability', 'COUPONPERCENT', 'PREVWAPRICE', 'ISSUESIZE', 'COUPONVALUE', 'COUPONPERIOD', 'ACCRUEDINT', 'DURATION', 'NEXTCOUPON', 'ISIN', 'LOTVALUE']

export function List() {
    // const [headerNames, setHeaderNames] = useState([]);

    const [ListData, setListData] = useState([])
    const [durationReqest, setDurationReqest] = useState()
    useEffect(() => {
        // headers().then(data => setHeaderNames(data))
        // durationReqest().then(val => setDurationReqest(val))
        fetchOfzBonds().then(val => setListData(val))
    }, [])

    // console.log(ListData, '👹')


    // return (
    //     <>
    //         <div>
    //             <div className={s.tableContainer}>

    //                 <div className= {s.flexContainer}>
    //                     {headerNamesRUS.map(name => {
    //                         return (
    //                             <div className={s.dataContainer} > {name} </div>
    //                         )
    //                     })}

    //                 </div>
    //                 <div className= {s.flexContainer} style={{borderTop: '0px'}}>
    //                     {headerNamesEN.map(name => {
    //                         return (
    //                             <div className={s.dataContainer} style={{fontSize: '5px'}} > {name} </div>
    //                         )
    //                     })}
    //                 </div>

    //                 <div> List

    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
    return (
        <div className={s.tableContainer}>
            <table className={s.table} style={{ width: '50vh' }}>
                <thead>
                    <tr>
                        {headerNamesRUS.map((name, index) => (
                            <th key={index}>{name}</th>
                        ))}
                    </tr>
                    <tr>
                        {headerNamesEN.map((name, index) => (
                            <th key={index}>{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {ListData.map(arrBond => {
                        return (
                            // console.log(arrBond,' ___')
                            <tr>
                                {Object.values(arrBond).map((val, index)=> {
                                    return (
                                        
                                            <td key = {index} >
                                                {index === 2 ? (
                                                    <Link to = {`detales`} style={{display: 'inline' }}>
                                                {val}
                                                </Link>
                                                ) : (
                                                    val
                                                )}
                                                
                                            </td>
                                        
                                    )
                                })}
                            </tr>
                        )

                    })}
                    {/* <tr>
                        <td>List</td>
                        <td>cecec</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );


}