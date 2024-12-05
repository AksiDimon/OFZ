import s from './list.module.css';
import { calculateAge } from '../calcsFuncs/calcsQuotes/calculateAge';
import { ofzResponseMock } from '../ofzResponseMock';
export function ChartQuotes () {
    return (
        <>
        <div className={s.mainSquare}>
        Chart
            <div style={{width: '100%', height: '95%'}}>
                <div style={{ width: '100%', borderBottom: '1px solid black'}} > </div>
            </div>
            
            <div style={{display: 'flex',justifyContent: 'space-between'}} >
                {calculateAge(ofzResponseMock).map((num,i)=> {
                    return (<div style={{ }}>{num}</div>)
                })}
            </div>
        </div>
        <div > Лет до погашения </div>
        </>
    )
}