import s from './list.module.css';

import { calculateAge } from '../calcsFuncs/calcsQuotes/calculateAge';
import { ofzResponseMock } from '../ofzResponseMock';
import { fetchOfzBonds } from '../requests/fetchList';
import { useState, useEffect } from 'react';
import { positionX, positionY } from '../calcsFuncs/calcsQuotes/positionX';
import { generateStripX } from '../calcsFuncs/calcsQuotes/plusOneAge';
import { ofzs26 } from '../transformHelpers/filterOfz26';
import { findMaxMinPersents , generateStripY } from '../calcsFuncs/calcsQuotes/findMaxMinPersents';
import { Route } from 'react-router-dom';
export function ChartQuotes() {
    const [ListData, setListData] = useState([])

    useEffect(() => {
        fetchOfzBonds().then(data => {
            
            const filterYield = data.filter(obj => obj['yield'] > 0) //фильтрую по доходности 

             console.log(filterYield, data, 'DATA')
            setListData(filterYield)
        })
    }, [])
    if (ListData.length === 0) {
        return <div>...Loading</div>
    }
    
    const maxYearsToEnd = calculateAge(ListData).maxYearsToEnd;
    const minYearsToEnd = calculateAge(ListData).minYearsToEnd;
    
    const maxRate = findMaxMinPersents(ListData).maxPersent;
    const minRate = findMaxMinPersents(ListData).minPersent;
    
    // const listIncreaseRate = ListData.map(ofz => Number(ofz.yield)).sort((a, b) => a - b)

    // const maxRate = listIncreaseRate.at(-1);
    // const minRate = listIncreaseRate.find(num => num > 0)
console.log(maxRate, minRate, '___________')
    console.log(
        //  {maxYearsToEnd, minYearsToEnd, yearsBottomLine},
        // [listIncreaseRate.length, ListData.length],
        ListData
        , '***')
    return (
        <>
            <div className={s.mainSquare}>
                
                {ListData.map((obj, i )=> {
                     const fixedCupon = obj['name'].startsWith('26',4)

                    //console.log(obj.yield, maxRate, minRate, '👄', positionY(obj.yield, maxRate, minRate))
                    // if (fixedCupon && obj['name'] !== 'ОФЗ 26231' ) {
                        return (
                            
                            <span
                                className={s.printPoint}
                                style={{
                                    left: `${positionX(minYearsToEnd, maxYearsToEnd, obj.endDate)}%`,
                                    bottom: `${positionY(obj.yield, maxRate, minRate)}%`,
                                    //  zIndex: `${1}`,
                                }}
                            >  
                                <div className={s.printInformation}>
                                   <h3>{obj.name}</h3> 
                                   <div>{`Лет до погаш: ${obj['yearsToEnd']}`}</div> 
                                   <div>{`Доходнсть: ${obj.yield}%`}</div>
                                </div>
                                <div className={s.arrow}> ❯</div>
                                <div className={s.nameOfPoint}>
                                    {obj.name}
                                </div>
                            </span>
                        )
                    // }

                })}
                {/* отисока шкалы доходности */}
                
                    <div style={{ position: 'absolute', left: '-120px', top: '45%', transform: 'rotate(-90deg)'}} > Доходность % </div>
                
                
                <div>
                    {generateStripY(maxRate, minRate).map(rate => {
                        return (
                            <div
                            className={s.stripY}
                            style={{
                                bottom: `${positionY(rate, maxRate, minRate)}%`
                            }}
                            >
                             {rate}   
                                <div className={s.stickY}></div>
                            </div>
                        )
                    })}
                </div>
                {/* отрисовка линии года */}
                <div>
                    {generateStripX(minYearsToEnd, maxYearsToEnd).map((date, i) => {
                        return (<div 
                            className={s.stripYears}
                            style = {{
                                left: `${positionX(minYearsToEnd, maxYearsToEnd, date)}%`
                            }}
                            >
                                <div className={s.stick}></div>
                                {i}
                            </div>)
                    })}
                </div>
            </div>
            <div style={{margin: '50px 400px', whiteSpace: 'nowrap'}} > Лет до погашения </div>
        </>
    )
}