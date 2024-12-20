 //import { ofzResponseMock } from "../../ofzResponseMock";
export function findMaxMinPersents (ofzResponseMock) {
    const sort =  ofzResponseMock.map(obj => obj['yield']).sort((a,b) => a - b);
    return {
       maxPersent: sort.at(-1),
       minPersent: sort[0]
    }
}


// console.log(findMaxMinPersents(ofzResponseMock), 'findMaxMinPersents')


export function generateStripY (max, min) {
    const overMax = max + 1;
    let arrPersents = []; 
    for(let persent = min; persent <= overMax; persent += 1) {
        arrPersents.push(persent)
    }
    return arrPersents ;
}

console.log(generateStripY( 22.15, 8.78), 'generateStripY') 




const ofzs26 = [
    {
        "№": 20,
        "SECID": "SU26238RMFS4",
        "Имя": "ОФЗ 26238",
        "Погашение": "2041-05-15",
        "Лет до погашения": "16.4",
        "Доходность": 15.95,
        "Год. куп. дох.": 7.1,
        "Куп. дох. посл.": "14.0%",
        "Цена": 50.691,
        "Купон, руб.": 35.4,
        "Частота раз в год": "2",
        "НКД": 1.36,
        "Дюрация": "7.33",
        "Дата купона": "2025-06-04",
        "ISIN": "RU000A1038V6",
        "Номинал облигации": 1000
    },
    {
        "№": 30,
        "SECID": "SU26248RMFS3",
        "Имя": "ОФЗ 26248",
        "Погашение": "2040-05-16",
        "Лет до погашения": "15.4",
        "Доходность": 17.48,
        "Год. куп. дох.": 12.25,
        "Куп. дох. посл.": "16.2%",
        "Цена": 75.516,
        "Купон, руб.": 61.08,
        "Частота раз в год": "2",
        "НКД": 2.35,
        "Дюрация": "6.19",
        "Дата купона": "2025-06-04",
        "ISIN": "RU000A108EH4",
        "Номинал облигации": 1000
    },
    {
        "№": 29,
        "SECID": "SU26247RMFS5",
        "Имя": "ОФЗ 26247",
        "Погашение": "2039-05-11",
        "Лет до погашения": "14.4",
        "Доходность": 17.46,
        "Год. куп. дох.": 12.25,
        "Куп. дох. посл.": "16.1%",
        "Цена": 75.996,
        "Купон, руб.": 61.08,
        "Частота раз в год": "2",
        "НКД": 4.7,
        "Дюрация": "6.10",
        "Дата купона": "2025-05-28",
        "ISIN": "RU000A108EF8",
        "Номинал облигации": 1000
    },
    {
        "№": 12,
        "SECID": "SU26230RMFS1",
        "Имя": "ОФЗ 26230",
        "Погашение": "2039-03-16",
        "Лет до погашения": "14.3",
        "Доходность": 16.59,
        "Год. куп. дох.": 7.7,
        "Куп. дох. посл.": "14.2%",
        "Цена": 54.142,
        "Купон, руб.": 38.39,
        "Частота раз в год": "2",
        "НКД": 14.77,
        "Дюрация": "6.72",
        "Дата купона": "2025-04-02",
        "ISIN": "RU000A100EF5",
        "Номинал облигации": 1000
    },
    {
        "№": 25,
        "SECID": "SU26243RMFS4",
        "Имя": "ОФЗ 26243",
        "Погашение": "2038-05-19",
        "Лет до погашения": "13.4",
        "Доходность": 17.18,
        "Год. куп. дох.": 9.8,
        "Куп. дох. посл.": "15.3%",
        "Цена": 64.146,
        "Купон, руб.": 48.87,
        "Частота раз в год": "2",
        "НКД": 1.88,
        "Дюрация": "6.34",
        "Дата купона": "2025-06-04",
        "ISIN": "RU000A106E90",
        "Номинал облигации": 1000
    },
    {
        "№": 22,
        "SECID": "SU26240RMFS0",
        "Имя": "ОФЗ 26240",
        "Погашение": "2036-07-30",
        "Лет до погашения": "11.6",
        "Доходность": 16.4,
        "Год. куп. дох.": 7,
        "Куп. дох. посл.": "13.0%",
        "Цена": 53.815,
        "Купон, руб.": 34.9,
        "Частота раз в год": "2",
        "НКД": 22.82,
        "Дюрация": "6.45",
        "Дата купона": "2025-02-12",
        "ISIN": "RU000A103BR0",
        "Номинал облигации": 1000
    },
    {
        "№": 28,
        "SECID": "SU26246RMFS7",
        "Имя": "ОФЗ 26246",
        "Погашение": "2036-03-12",
        "Лет до погашения": "11.3",
        "Доходность": 17.54,
        "Год. куп. дох.": 12,
        "Куп. дох. посл.": "15.8%",
        "Цена": 76.144,
        "Купон, руб.": 59.84,
        "Частота раз в год": "2",
        "НКД": 25.32,
        "Дюрация": "5.59",
        "Дата купона": "2025-03-26",
        "ISIN": "RU000A108EE1",
        "Номинал облигации": 1000
    },
    {
        "№": 52,
        "SECID": "SU46020RMFS2",
        "Имя": "ОФЗ 46020",
        "Погашение": "2036-02-06",
        "Лет до погашения": "11.2",
        "Доходность": 17.13,
        "Год. куп. дох.": 6.9,
        "Куп. дох. посл.": "12.9%",
        "Цена": 53.398,
        "Купон, руб.": 34.41,
        "Частота раз в год": "2",
        "НКД": 22.5,
        "Дюрация": "6.13",
        "Дата купона": "2025-02-12",
        "ISIN": "RU000A0GN9A7",
        "Номинал облигации": 1000
    },
    {
        "№": 27,
        "SECID": "SU26245RMFS9",
        "Имя": "ОФЗ 26245",
        "Погашение": "2035-09-26",
        "Лет до погашения": "10.8",
        "Доходность": 16.62,
        "Год. куп. дох.": 12,
        "Куп. дох. посл.": "15.0%",
        "Цена": 79.839,
        "Купон, руб.": 59.84,
        "Частота раз в год": "2",
        "НКД": 20.71,
        "Дюрация": "5.64",
        "Дата купона": "2025-04-09",
        "ISIN": "RU000A108EG6",
        "Номинал облигации": 1000
    },
    {
        "№": 15,
        "SECID": "SU26233RMFS5",
        "Имя": "ОФЗ 26233",
        "Погашение": "2035-07-18",
        "Лет до погашения": "10.6",
        "Доходность": 15.97,
        "Год. куп. дох.": 6.1,
        "Куп. дох. посл.": "11.7%",
        "Цена": 52.117,
        "Купон, руб.": 30.42,
        "Частота раз в год": "2",
        "НКД": 22.23,
        "Дюрация": "6.49",
        "Дата купона": "2025-01-29",
        "ISIN": "RU000A101F94",
        "Номинал облигации": 1000
    },
    {
        "№": 35,
        "SECID": "SU29010RMFS4",
        "Имя": "ОФЗ 29010",
        "Погашение": "2034-12-06",
        "Лет до погашения": "10.0",
        "Доходность": 17.36,
        "Год. куп. дох.": 17.31,
        "Куп. дох. посл.": "16.8%",
        "Цена": 103.083,
        "Купон, руб.": 86.31,
        "Частота раз в год": "2",
        "НКД": 82.99,
        "Дюрация": "4.77",
        "Дата купона": "2024-12-18",
        "ISIN": "RU000A0JV4Q1",
        "Номинал облигации": 1000
    },
    {
        "№": 8,
        "SECID": "SU26225RMFS1",
        "Имя": "ОФЗ 26225",
        "Погашение": "2034-05-10",
        "Лет до погашения": "9.4",
        "Доходность": 17.12,
        "Год. куп. дох.": 7.25,
        "Куп. дох. посл.": "12.8%",
        "Цена": 56.636,
        "Купон, руб.": 36.15,
        "Частота раз в год": "2",
        "НКД": 4.17,
        "Дюрация": "6.01",
        "Дата купона": "2025-05-21",
        "ISIN": "RU000A0ZYUB7",
        "Номинал облигации": 1000
    },
    {
        "№": 26,
        "SECID": "SU26244RMFS2",
        "Имя": "ОФЗ 26244",
        "Погашение": "2034-03-15",
        "Лет до погашения": "9.3",
        "Доходность": 17.12,
        "Год. куп. дох.": 11.25,
        "Куп. дох. посл.": "14.9%",
        "Цена": 75.557,
        "Купон, руб.": 56.1,
        "Частота раз в год": "2",
        "НКД": 23.73,
        "Дюрация": "5.30",
        "Дата купона": "2025-03-26",
        "ISIN": "RU000A1074G2",
        "Номинал облигации": 1000
    },
    {
        "№": 57,
        "SECID": "SU52005RMFS4",
        "Имя": "ОФЗ 52005",
        "Погашение": "2033-05-11",
        "Лет до погашения": "8.4",
        "Доходность": 8.78,
        "Год. куп. дох.": 2.5,
        "Куп. дох. посл.": "3.9%",
        "Цена": 63.859,
        "Купон, руб.": 14.23,
        "Частота раз в год": "2",
        "НКД": 1.64,
        "Дюрация": "7.38",
        "Дата купона": "2025-05-21",
        "ISIN": "RU000A105XV1",
        "Номинал облигации": 1137.3
    },
    {
        "№": 6,
        "SECID": "SU26221RMFS0",
        "Имя": "ОФЗ 26221",
        "Погашение": "2033-03-23",
        "Лет до погашения": "8.3",
        "Доходность": 17.13,
        "Год. куп. дох.": 7.7,
        "Куп. дох. посл.": "12.6%",
        "Цена": 61.013,
        "Купон, руб.": 38.39,
        "Частота раз в год": "2",
        "НКД": 14.77,
        "Дюрация": "5.49",
        "Дата купона": "2025-04-02",
        "ISIN": "RU000A0JXFM1",
        "Номинал облигации": 1000
    },
    {
        "№": 23,
        "SECID": "SU26241RMFS8",
        "Имя": "ОФЗ 26241",
        "Погашение": "2032-11-17",
        "Лет до погашения": "7.9",
        "Доходность": 17.67,
        "Год. куп. дох.": 9.5,
        "Куп. дох. посл.": "13.9%",
        "Цена": 68.125,
        "Купон, руб.": 47.37,
        "Частота раз в год": "2",
        "НКД": 3.64,
        "Дюрация": "5.20",
        "Дата купона": "2025-05-28",
        "ISIN": "RU000A105FZ9",
        "Номинал облигации": 1000
    },
    {
        "№": 34,
        "SECID": "SU29009RMFS6",
        "Имя": "ОФЗ 29009",
        "Погашение": "2032-05-05",
        "Лет до погашения": "7.4",
        "Доходность": 19.13,
        "Год. куп. дох.": 18.85,
        "Куп. дох. посл.": "18.5%",
        "Цена": 102.109,
        "Купон, руб.": 93.99,
        "Частота раз в год": "2",
        "НКД": 14.46,
        "Дюрация": "4.25",
        "Дата купона": "2025-05-14",
        "ISIN": "RU000A0JV4N8",
        "Номинал облигации": 1000
    },
    {
        "№": 56,
        "SECID": "SU52004RMFS7",
        "Имя": "ОФЗ 52004",
        "Погашение": "2032-03-17",
        "Лет до погашения": "7.3",
        "Доходность": 9.36,
        "Год. куп. дох.": 2.5,
        "Куп. дох. посл.": "3.9%",
        "Цена": 64.076,
        "Купон, руб.": 16.58,
        "Частота раз в год": "2",
        "НКД": 6.99,
        "Дюрация": "6.46",
        "Дата купона": "2025-03-26",
        "ISIN": "RU000A103MX5",
        "Номинал облигации": 1325.71
    },
    {
        "№": 4,
        "SECID": "SU26218RMFS6",
        "Имя": "ОФЗ 26218",
        "Погашение": "2031-09-17",
        "Лет до погашения": "6.8",
        "Доходность": 18.06,
        "Год. куп. дох.": 8.5,
        "Куп. дох. посл.": "13.0%",
        "Цена": 65.459,
        "Купон, руб.": 42.38,
        "Частота раз в год": "2",
        "НКД": 17.93,
        "Дюрация": "4.75",
        "Дата купона": "2025-03-26",
        "ISIN": "RU000A0JVW48",
        "Номинал облигации": 1000
    },
    {
        "№": 21,
        "SECID": "SU26239RMFS2",
        "Имя": "ОФЗ 26239",
        "Погашение": "2031-07-23",
        "Лет до погашения": "6.6",
        "Доходность": 18,
        "Год. куп. дох.": 6.9,
        "Куп. дох. посл.": "11.5%",
        "Цена": 60.187,
        "Купон, руб.": 34.41,
        "Частота раз в год": "2",
        "НКД": 25.15,
        "Дюрация": "4.81",
        "Дата купона": "2025-01-29",
        "ISIN": "RU000A103901",
        "Номинал облигации": 1000
    },
    {
        "№": 17,
        "SECID": "SU26235RMFS0",
        "Имя": "ОФЗ 26235",
        "Погашение": "2031-03-12",
        "Лет до погашения": "6.3",
        "Доходность": 17.96,
        "Год. куп. дох.": 5.9,
        "Куп. дох. посл.": "10.2%",
        "Цена": 57.604,
        "Купон, руб.": 29.42,
        "Частота раз в год": "2",
        "НКД": 13.58,
        "Дюрация": "4.84",
        "Дата купона": "2025-03-19",
        "ISIN": "RU000A1028E3",
        "Номинал облигации": 1000
    },
    {
        "№": 55,
        "SECID": "SU52003RMFS9",
        "Имя": "ОФЗ 52003",
        "Погашение": "2030-07-17",
        "Лет до погашения": "5.6",
        "Доходность": 10.44,
        "Год. куп. дох.": 2.5,
        "Куп. дох. посл.": "3.7%",
        "Цена": 68.102,
        "Купон, руб.": 17.64,
        "Частота раз в год": "2",
        "НКД": 13.52,
        "Дюрация": "5.10",
        "Дата купона": "2025-01-22",
        "ISIN": "RU000A102069",
        "Номинал облигации": 1410.13
    },
    {
        "№": 10,
        "SECID": "SU26228RMFS5",
        "Имя": "ОФЗ 26228",
        "Погашение": "2030-04-10",
        "Лет до погашения": "5.3",
        "Доходность": 18.33,
        "Год. куп. дох.": 7.65,
        "Куп. дох. посл.": "11.5%",
        "Цена": 66.623,
        "Купон, руб.": 38.15,
        "Частота раз в год": "2",
        "НКД": 11.74,
        "Дюрация": "4.18",
        "Дата купона": "2025-04-16",
        "ISIN": "RU000A100A82",
        "Номинал облигации": 1000
    },
    {
        "№": 33,
        "SECID": "SU29008RMFS8",
        "Имя": "ОФЗ 29008",
        "Погашение": "2029-10-03",
        "Лет до погашения": "4.8",
        "Доходность": 18.23,
        "Год. куп. дох.": 18.08,
        "Куп. дох. посл.": "17.8%",
        "Цена": 101.784,
        "Купон, руб.": 90.15,
        "Частота раз в год": "2",
        "НКД": 31.21,
        "Дюрация": "3.33",
        "Дата купона": "2025-04-09",
        "ISIN": "RU000A0JV4P3",
        "Номинал облигации": 1000
    },
    {
        "№": 51,
        "SECID": "SU46012RMFS9",
        "Имя": "ОФЗ 46012",
        "Погашение": "2029-09-05",
        "Лет до погашения": "4.8",
        "Доходность": 10.59,
        "Год. куп. дох.": 6.517,
        "Куп. дох. посл.": "7.5%",
        "Цена": 87.417,
        "Купон, руб.": 61.74,
        "Частота раз в год": "1",
        "НКД": 15.44,
        "Дюрация": "3.44",
        "Дата купона": "2025-09-10",
        "ISIN": "RU0002868001",
        "Номинал облигации": 950
    },
    {
        "№": 24,
        "SECID": "SU26242RMFS6",
        "Имя": "ОФЗ 26242",
        "Погашение": "2029-08-29",
        "Лет до погашения": "4.7",
        "Доходность": 18.88,
        "Год. куп. дох.": 9,
        "Куп. дох. посл.": "12.5%",
        "Цена": 71.974,
        "Купон, руб.": 44.88,
        "Частота раз в год": "2",
        "НКД": 24.17,
        "Дюрация": "3.67",
        "Дата купона": "2025-03-05",
        "ISIN": "RU000A105RV3",
        "Номинал облигации": 1000
    },
    {
        "№": 7,
        "SECID": "SU26224RMFS4",
        "Имя": "ОФЗ 26224",
        "Погашение": "2029-05-23",
        "Лет до погашения": "4.4",
        "Доходность": 18.85,
        "Год. куп. дох.": 6.9,
        "Куп. дох. посл.": "10.3%",
        "Цена": 66.718,
        "Купон, руб.": 34.41,
        "Частота раз в год": "2",
        "НКД": 2.65,
        "Дюрация": "3.75",
        "Дата купона": "2025-05-28",
        "ISIN": "RU000A0ZYUA9",
        "Номинал облигации": 1000
    },
    {
        "№": 19,
        "SECID": "SU26237RMFS6",
        "Имя": "ОФЗ 26237",
        "Погашение": "2029-03-14",
        "Лет до погашения": "4.3",
        "Доходность": 19.39,
        "Год. куп. дох.": 6.7,
        "Куп. дох. посл.": "10.2%",
        "Цена": 65.929,
        "Купон, руб.": 33.41,
        "Частота раз в год": "2",
        "НКД": 15.42,
        "Дюрация": "3.56",
        "Дата купона": "2025-03-19",
        "ISIN": "RU000A1038Z7",
        "Номинал облигации": 1000
    },
    {
        "№": 18,
        "SECID": "SU26236RMFS8",
        "Имя": "ОФЗ 26236",
        "Погашение": "2028-05-17",
        "Лет до погашения": "3.4",
        "Доходность": 20.37,
        "Год. куп. дох.": 5.7,
        "Куп. дох. посл.": "8.5%",
        "Цена": 66.742,
        "Купон, руб.": 28.42,
        "Частота раз в год": "2",
        "НКД": 3.28,
        "Дюрация": "3.08",
        "Дата купона": "2025-05-21",
        "ISIN": "RU000A102BT8",
        "Номинал облигации": 1000
    },
    {
        "№": 54,
        "SECID": "SU52002RMFS1",
        "Имя": "ОФЗ 52002",
        "Погашение": "2028-02-02",
        "Лет до погашения": "3.2",
        "Доходность": 12.12,
        "Год. куп. дох.": 2.5,
        "Куп. дох. посл.": "3.3%",
        "Цена": 76.185,
        "Купон, руб.": 19.4,
        "Частота раз в год": "2",
        "НКД": 13.39,
        "Дюрация": "2.99",
        "Дата купона": "2025-02-05",
        "ISIN": "RU000A0ZYZ26",
        "Номинал облигации": 1550.98
    },
    {
        "№": 3,
        "SECID": "SU26212RMFS9",
        "Имя": "ОФЗ 26212",
        "Погашение": "2028-01-19",
        "Лет до погашения": "3.1",
        "Доходность": 20.18,
        "Год. куп. дох.": 7.05,
        "Куп. дох. посл.": "9.8%",
        "Цена": 72.292,
        "Купон, руб.": 35.15,
        "Частота раз в год": "2",
        "НКД": 27.04,
        "Дюрация": "2.69",
        "Дата купона": "2025-01-22",
        "ISIN": "RU000A0JTK38",
        "Номинал облигации": 1000
    },
    {
        "№": 14,
        "SECID": "SU26232RMFS7",
        "Имя": "ОФЗ 26232",
        "Погашение": "2027-10-06",
        "Лет до погашения": "2.8",
        "Доходность": 20.69,
        "Год. куп. дох.": 6,
        "Куп. дох. посл.": "8.4%",
        "Цена": 71.378,
        "Купон, руб.": 29.92,
        "Частота раз в год": "2",
        "НКД": 10.36,
        "Дюрация": "2.56",
        "Дата купона": "2025-04-09",
        "ISIN": "RU000A1014N4",
        "Номинал облигации": 1000
    },
    {
        "№": 32,
        "SECID": "SU29007RMFS0",
        "Имя": "ОФЗ 29007",
        "Погашение": "2027-03-03",
        "Лет до погашения": "2.3",
        "Доходность": 17.51,
        "Год. куп. дох.": 17.45,
        "Куп. дох. посл.": "17.3%",
        "Цена": 101.078,
        "Купон, руб.": 87.01,
        "Частота раз в год": "2",
        "НКД": 46.85,
        "Дюрация": "1.86",
        "Дата купона": "2025-03-05",
        "ISIN": "RU000A0JV4M0",
        "Номинал облигации": 1000
    },
    {
        "№": 2,
        "SECID": "SU26207RMFS9",
        "Имя": "ОФЗ 26207",
        "Погашение": "2027-02-03",
        "Лет до погашения": "2.2",
        "Доходность": 21.42,
        "Год. куп. дох.": 8.15,
        "Куп. дох. посл.": "10.2%",
        "Цена": 79.577,
        "Купон, руб.": 40.64,
        "Частота раз в год": "2",
        "НКД": 28.14,
        "Дюрация": "1.93",
        "Дата купона": "2025-02-05",
        "ISIN": "RU000A0JS3W6",
        "Номинал облигации": 1000
    },
    {
        "№": 9,
        "SECID": "SU26226RMFS9",
        "Имя": "ОФЗ 26226",
        "Погашение": "2026-10-07",
        "Лет до погашения": "1.8",
        "Доходность": 21.41,
        "Год. куп. дох.": 7.95,
        "Куп. дох. посл.": "9.7%",
        "Цена": 81.607,
        "Купон, руб.": 39.64,
        "Частота раз в год": "2",
        "НКД": 13.72,
        "Дюрация": "1.70",
        "Дата купона": "2025-04-09",
        "ISIN": "RU000A0ZZYW2",
        "Номинал облигации": 1000
    },
    {
        "№": 5,
        "SECID": "SU26219RMFS4",
        "Имя": "ОФЗ 26219",
        "Погашение": "2026-09-16",
        "Лет до погашения": "1.8",
        "Доходность": 21.43,
        "Год. куп. дох.": 7.75,
        "Куп. дох. посл.": "9.5%",
        "Цена": 81.955,
        "Купон, руб.": 38.64,
        "Частота раз в год": "2",
        "НКД": 17.83,
        "Дюрация": "1.64",
        "Дата купона": "2025-03-19",
        "ISIN": "RU000A0JWM07",
        "Номинал облигации": 1000
    },
    {
        "№": 53,
        "SECID": "SU46023RMFS6",
        "Имя": "ОФЗ 46023",
        "Погашение": "2026-07-23",
        "Лет до погашения": "1.6",
        "Доходность": 17.85,
        "Год. куп. дох.": 8.16,
        "Куп. дох. посл.": "8.7%",
        "Цена": 93.47,
        "Купон, руб.": 8.14,
        "Частота раз в год": "2",
        "НКД": 6.22,
        "Дюрация": "0.76",
        "Дата купона": "2025-01-23",
        "ISIN": "RU000A0JRTL6",
        "Номинал облигации": 200
    },
    {
        "№": 11,
        "SECID": "SU26229RMFS3",
        "Имя": "ОФЗ 26229",
        "Погашение": "2025-11-12",
        "Лет до погашения": "0.9",
        "Доходность": 22.15,
        "Год. куп. дох.": 7.15,
        "Куп. дох. посл.": "8.1%",
        "Цена": 88.704,
        "Купон, руб.": 35.65,
        "Частота раз в год": "2",
        "НКД": 5.48,
        "Дюрация": "0.90",
        "Дата купона": "2025-05-14",
        "ISIN": "RU000A100EG3",
        "Номинал облигации": 1000
    },
    {
        "№": 16,
        "SECID": "SU26234RMFS3",
        "Имя": "ОФЗ 26234",
        "Погашение": "2025-07-16",
        "Лет до погашения": "0.6",
        "Доходность": 22.06,
        "Год. куп. дох.": 4.5,
        "Куп. дох. посл.": "4.9%",
        "Цена": 90.965,
        "Купон, руб.": 22.44,
        "Частота раз в год": "2",
        "НКД": 18.12,
        "Дюрация": "0.58",
        "Дата купона": "2025-01-15",
        "ISIN": "RU000A101QE0",
        "Номинал облигации": 1000
    },
    {
        "№": 31,
        "SECID": "SU29006RMFS2",
        "Имя": "ОФЗ 29006",
        "Погашение": "2025-01-29",
        "Лет до погашения": "0.1",
        "Доходность": 21.95,
        "Год. куп. дох.": 16.99,
        "Куп. дох. посл.": "17.1%",
        "Цена": 99.418,
        "Купон, руб.": 84.72,
        "Частота раз в год": "2",
        "НКД": 61.91,
        "Дюрация": "0.13",
        "Дата купона": "2025-01-29",
        "ISIN": "RU000A0JV4L2",
        "Номинал облигации": 1000
    }
]