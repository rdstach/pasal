const pasalHarian = {
  '16-02-2020': 'Matius 1-5',
  '17-02-2020': 'Matius 6-10',
  '18-02-2020': 'Matius 11-15',
  '19-02-2020': 'Matius 16-20',
  '20-02-2020': 'Matius 21-25',
  '21-02-2020': 'Matius 26-28, Markus 1-2',
  '22-02-2020': 'Markus 3-7',
  '23-02-2020': 'Markus 8-12',
  '24-02-2020': 'Markus 13-16, Lukas 1-1',
  '25-02-2020': 'Lukas 2-6',
  '26-02-2020': 'Lukas 7-11',
  '27-02-2020': 'Lukas 12-16',
  '28-02-2020': 'Lukas 17-21',
  '29-02-2020': 'Lukas 22-24, Yohanes 1-2',
  '01-03-2020': 'Yohanes 3-7',
  '02-03-2020': 'Yohanes 8-12',
  '03-03-2020': 'Yohanes 13-17',
  '04-03-2020': 'Yohanes 18-21, Kisah Para Rasul 1-1',
  '05-03-2020': 'Kisah Para Rasul 2-6',
  '06-03-2020': 'Kisah Para Rasul 7-11',
  '07-03-2020': 'Kisah Para Rasul 12-16',
  '08-03-2020': 'Kisah Para Rasul 17-21',
  '09-03-2020': 'Kisah Para Rasul 22-26',
  '10-03-2020': 'Kisah Para Rasul 27-28, Roma 1-3',
  '11-03-2020': 'Roma 4-8',
  '12-03-2020': 'Roma 9-13',
  '13-03-2020': 'Roma 14-16, 1 Korintus 1-2',
  '14-03-2020': '1 Korintus 3-7',
  '15-03-2020': '1 Korintus 8-12',
  '16-03-2020': '1 Korintus 13-16, 2 Korintus 1-1',
  '17-03-2020': '2 Korintus 2-6',
  '18-03-2020': '2 Korintus 7-11',
  '19-03-2020': '2 Korintus 12-13, Galatia 1-3',
  '20-03-2020': 'Galatia 4-6, Efesus 1-2',
  '21-03-2020': 'Efesus 3-6, Filipi 1-1',
  '22-03-2020': 'Filipi 2-4, Kolose 1-2',
  '23-03-2020': 'Kolose 3-4, 1 Tesalonika 1-3',
  '24-03-2020': '1 Tesalonika 4-5, 2 Tesalonika 1-3',
  '25-03-2020': '1 Timotius 1-5',
  '26-03-2020': '1 Timotius 6-6, 2 Timotius 1-4',
  '27-03-2020': 'Titus 1-3, Filemon 1-1, Ibrani 1-1',
  '28-03-2020': 'Ibrani 2-6',
  '29-03-2020': 'Ibrani 7-11',
  '30-03-2020': 'Ibrani 12-13, Yakobus 1-3',
  '31-03-2020': 'Yakobus 4-5, 1 Petrus 1-3',
  '01-04-2020': '1 Petrus 4-5, 2 Petrus 1-3',
  '02-04-2020': '1 Yohanes 1-5',
  '03-04-2020': '2 Yohanes 1-1, 3 Yohanes 1-1, Yudas 1-1, Wahyu 1-2',
  '04-04-2020': 'Wahyu 3-7',
  '05-04-2020': 'Wahyu 8-12',
  '06-04-2020': 'Wahyu 13-17',
  '07-04-2020': 'Wahyu 18-22',
  '08-04-2020': 'Kejadian 1-5',
  '09-04-2020': 'Kejadian 6-10',
  '10-04-2020': 'Kejadian 11-15',
  '11-04-2020': 'Kejadian 16-20',
  '12-04-2020': 'Kejadian 21-25',
  '13-04-2020': 'Kejadian 26-30',
  '14-04-2020': 'Kejadian 31-35',
  '15-04-2020': 'Kejadian 36-40',
  '16-04-2020': 'Kejadian 41-45',
  '17-04-2020': 'Kejadian 46-50',
  '18-04-2020': 'Keluaran 1-5',
  '19-04-2020': 'Keluaran 6-10',
  '20-04-2020': 'Keluaran 11-15',
  '21-04-2020': 'Keluaran 16-20',
  '22-04-2020': 'Keluaran 21-25',
  '23-04-2020': 'Keluaran 26-30',
  '24-04-2020': 'Keluaran 31-35',
  '25-04-2020': 'Keluaran 36-40',
  '26-04-2020': 'Imamat 1-5',
  '27-04-2020': 'Imamat 6-10',
  '28-04-2020': 'Imamat 11-15',
  '29-04-2020': 'Imamat 16-20',
  '30-04-2020': 'Imamat 21-25',
  '01-05-2020': 'Imamat 26-27, Bilangan 1-3',
  '02-05-2020': 'Bilangan 4-8',
  '03-05-2020': 'Bilangan 9-13',
  '04-05-2020': 'Bilangan 14-18',
  '05-05-2020': 'Bilangan 19-23',
  '06-05-2020': 'Bilangan 24-28',
  '07-05-2020': 'Bilangan 29-33',
  '08-05-2020': 'Bilangan 34-36, Ulangan 1-2',
  '09-05-2020': 'Ulangan 3-7',
  '10-05-2020': 'Ulangan 8-12',
  '11-05-2020': 'Ulangan 13-17',
  '12-05-2020': 'Ulangan 18-22',
  '13-05-2020': 'Ulangan 23-27',
  '14-05-2020': 'Ulangan 28-32',
  '15-05-2020': 'Ulangan 33-34, Yosua 1-3',
  '16-05-2020': 'Yosua 4-8',
  '17-05-2020': 'Yosua 9-13',
  '18-05-2020': 'Yosua 14-18',
  '19-05-2020': 'Yosua 19-23',
  '20-05-2020': 'Yosua 24-24, Hakim-hakim 1-4',
  '21-05-2020': 'Hakim-hakim 5-9',
  '22-05-2020': 'Hakim-hakim 10-14',
  '23-05-2020': 'Hakim-hakim 15-19',
  '24-05-2020': 'Hakim-hakim 20-21, Rut 1-3',
  '25-05-2020': 'Rut 4-4, 1 Samuel 1-4',
  '26-05-2020': '1 Samuel 5-9',
  '27-05-2020': '1 Samuel 10-14',
  '28-05-2020': '1 Samuel 15-19',
  '29-05-2020': '1 Samuel 20-24',
  '30-05-2020': '1 Samuel 25-29',
  '31-05-2020': '1 Samuel 30-31, 2 Samuel 1-3',
  '01-06-2020': '2 Samuel 4-8',
  '02-06-2020': '2 Samuel 9-13',
  '03-06-2020': '2 Samuel 14-18',
  '04-06-2020': '2 Samuel 19-23',
  '05-06-2020': '2 Samuel 24-24, 1 Raja-raja 1-4',
  '06-06-2020': '1 Raja-raja 5-9',
  '07-06-2020': '1 Raja-raja 10-14',
  '08-06-2020': '1 Raja-raja 15-19',
  '09-06-2020': '1 Raja-raja 20-22, 2 Raja-raja 1-2',
  '10-06-2020': '2 Raja-raja 3-7',
  '11-06-2020': '2 Raja-raja 8-12',
  '12-06-2020': '2 Raja-raja 13-17',
  '13-06-2020': '2 Raja-raja 18-22',
  '14-06-2020': '2 Raja-raja 23-25, 1 Tawarikh 1-2',
  '15-06-2020': '1 Tawarikh 3-7',
  '16-06-2020': '1 Tawarikh 8-12',
  '17-06-2020': '1 Tawarikh 13-17',
  '18-06-2020': '1 Tawarikh 18-22',
  '19-06-2020': '1 Tawarikh 23-27',
  '20-06-2020': '1 Tawarikh 28-29, 2 Tawarikh 1-3',
  '21-06-2020': '2 Tawarikh 4-8',
  '22-06-2020': '2 Tawarikh 9-13',
  '23-06-2020': '2 Tawarikh 14-18',
  '24-06-2020': '2 Tawarikh 19-23',
  '25-06-2020': '2 Tawarikh 24-28',
  '26-06-2020': '2 Tawarikh 29-33',
  '27-06-2020': '2 Tawarikh 34-36, Ezra 1-2',
  '28-06-2020': 'Ezra 3-7',
  '29-06-2020': 'Ezra 8-10, Nehemia 1-2',
  '30-06-2020': 'Nehemia 3-7',
  '01-07-2020': 'Nehemia 8-12',
  '02-07-2020': 'Nehemia 13-13, Ester 1-4',
  '03-07-2020': 'Ester 5-9',
  '04-07-2020': 'Ester 10-10, Ayub 1-4',
  '05-07-2020': 'Ayub 5-9',
  '06-07-2020': 'Ayub 10-14',
  '07-07-2020': 'Ayub 15-19',
  '08-07-2020': 'Ayub 20-24',
  '09-07-2020': 'Ayub 25-29',
  '10-07-2020': 'Ayub 30-34',
  '11-07-2020': 'Ayub 35-39',
  '12-07-2020': 'Ayub 40-42, Mazmur 1-2',
  '13-07-2020': 'Mazmur 3-7',
  '14-07-2020': 'Mazmur 8-12',
  '15-07-2020': 'Mazmur 13-17',
  '16-07-2020': 'Mazmur 18-22',
  '17-07-2020': 'Mazmur 23-27',
  '18-07-2020': 'Mazmur 28-32',
  '19-07-2020': 'Mazmur 33-37',
  '20-07-2020': 'Mazmur 38-42',
  '21-07-2020': 'Mazmur 43-47',
  '22-07-2020': 'Mazmur 48-52',
  '23-07-2020': 'Mazmur 53-57',
  '24-07-2020': 'Mazmur 58-62',
  '25-07-2020': 'Mazmur 63-67',
  '26-07-2020': 'Mazmur 68-72',
  '27-07-2020': 'Mazmur 73-77',
  '28-07-2020': 'Mazmur 78-82',
  '29-07-2020': 'Mazmur 83-87',
  '30-07-2020': 'Mazmur 88-92',
  '31-07-2020': 'Mazmur 93-97',
  '01-08-2020': 'Mazmur 98-102',
  '02-08-2020': 'Mazmur 103-107',
  '03-08-2020': 'Mazmur 108-112',
  '04-08-2020': 'Mazmur 113-117',
  '05-08-2020': 'Mazmur 118-122',
  '06-08-2020': 'Mazmur 123-127',
  '07-08-2020': 'Mazmur 128-132',
  '08-08-2020': 'Mazmur 133-137',
  '09-08-2020': 'Mazmur 138-142',
  '10-08-2020': 'Mazmur 143-147',
  '11-08-2020': 'Mazmur 148-150, Amsal 1-2',
  '12-08-2020': 'Amsal 3-7',
  '13-08-2020': 'Amsal 8-12',
  '14-08-2020': 'Amsal 13-17',
  '15-08-2020': 'Amsal 18-22',
  '16-08-2020': 'Amsal 23-27',
  '17-08-2020': 'Amsal 28-31, Pengkhotbah 1-1',
  '18-08-2020': 'Pengkhotbah 2-6',
  '19-08-2020': 'Pengkhotbah 7-11',
  '20-08-2020': 'Pengkhotbah 12-12, Kidung Agung 1-4',
  '21-08-2020': 'Kidung Agung 5-8, Yesaya 1-1',
  '22-08-2020': 'Yesaya 2-6',
  '23-08-2020': 'Yesaya 7-11',
  '24-08-2020': 'Yesaya 12-16',
  '25-08-2020': 'Yesaya 17-21',
  '26-08-2020': 'Yesaya 22-26',
  '27-08-2020': 'Yesaya 27-31',
  '28-08-2020': 'Yesaya 32-36',
  '29-08-2020': 'Yesaya 37-41',
  '30-08-2020': 'Yesaya 42-46',
  '31-08-2020': 'Yesaya 47-51',
  '01-09-2020': 'Yesaya 52-56',
  '02-09-2020': 'Yesaya 57-61',
  '03-09-2020': 'Yesaya 62-66',
  '04-09-2020': 'Yeremia 1-5',
  '05-09-2020': 'Yeremia 6-10',
  '06-09-2020': 'Yeremia 11-15',
  '07-09-2020': 'Yeremia 16-20',
  '08-09-2020': 'Yeremia 21-25',
  '09-09-2020': 'Yeremia 26-30',
  '10-09-2020': 'Yeremia 31-35',
  '11-09-2020': 'Yeremia 36-40',
  '12-09-2020': 'Yeremia 41-45',
  '13-09-2020': 'Yeremia 46-50',
  '14-09-2020': 'Yeremia 51-52, Ratapan 1-3',
  '15-09-2020': 'Ratapan 4-5, Yehezkiel 1-3',
  '16-09-2020': 'Yehezkiel 4-8',
  '17-09-2020': 'Yehezkiel 9-13',
  '18-09-2020': 'Yehezkiel 14-18',
  '19-09-2020': 'Yehezkiel 19-23',
  '20-09-2020': 'Yehezkiel 24-28',
  '21-09-2020': 'Yehezkiel 29-33',
  '22-09-2020': 'Yehezkiel 34-38',
  '23-09-2020': 'Yehezkiel 39-43',
  '24-09-2020': 'Yehezkiel 44-48',
  '25-09-2020': 'Daniel 1-5',
  '26-09-2020': 'Daniel 6-10',
  '27-09-2020': 'Daniel 11-12, Hosea 1-3',
  '28-09-2020': 'Hosea 4-8',
  '29-09-2020': 'Hosea 9-13',
  '30-09-2020': 'Hosea 14-14, Yoel 1-3, Amos 1-1',
  '01-10-2020': 'Amos 2-6',
  '02-10-2020': 'Amos 7-9, Obaja 1-1, Yunus 1-1',
  '03-10-2020': 'Yunus 2-4, Mikha 1-2',
  '04-10-2020': 'Mikha 3-7',
  '05-10-2020': 'Nahum 1-3, Habakuk 1-2',
  '06-10-2020': 'Habakuk 3-3, Zefanya 1-3, Hagai 1-1',
  '07-10-2020': 'Hagai 2-2, Zakharia 1-4',
  '08-10-2020': 'Zakharia 5-9',
  '09-10-2020': 'Zakharia 10-14',
  '10-10-2020': 'Maleakhi 1-4'
}