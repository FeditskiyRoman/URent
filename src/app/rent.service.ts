export class RentService {
  private list = [
    {
      address: 'West India Quay, Poplar, E14',
      beds: 3,
      bath: 2,
      price: 2000,
      update: new Date(),
      imgs: [
        '../assets/test/0cdb4058d2c54a0ab2e85579ea737aa0.jpg',
        '../assets/test/30b0c94f62aa4f7ab8a65e1d06d13ae1.jpg'
      ]
    },
    {
      address: 'Wetherell Road, South Hackney, E9',
      beds: 1,
      bath: 1,
      price: 2000,
      update: new Date(2018, 6, 11),
      imgs: [
        '../../assets/test/30b0c94f62aa4f7ab8a65e1d06d13ae1.jpg',
        '../../assets/test/483556b111cb4fa9810763804d8f3df3.jpg'
      ]
    },
    {
      address: 'Charles Hayward Building, Haggerston, E2',
      beds: 3,
      bath: 0,
      price: 2000,
      update: new Date(2018, 7, 3),
      imgs: [
        '../../assets/test/962f6141c4d54d74b771de68ec369644.jpg',
        '../../assets/test/a8099e0dcebc4d54a7ad71acb0e02645.jpg'
      ]
    },
    {
      address: 'West India Quay, Poplar, E14',
      beds: 3,
      bath: 2,
      price: 2000,
      update: new Date(),
      imgs: [
        '../assets/test/0cdb4058d2c54a0ab2e85579ea737aa0.jpg',
        '../assets/test/30b0c94f62aa4f7ab8a65e1d06d13ae1.jpg'
      ]
    },
    {
      address: 'Wetherell Road, South Hackney, E9',
      beds: 1,
      bath: 1,
      price: 2000,
      update: new Date(2018, 6, 11),
      imgs: [
        '../../assets/test/30b0c94f62aa4f7ab8a65e1d06d13ae1.jpg',
        '../../assets/test/483556b111cb4fa9810763804d8f3df3.jpg'
      ]
    },
    {
      address: 'Charles Hayward Building, Haggerston, E2',
      beds: 3,
      bath: 0,
      price: 2000,
      update: new Date(2018, 7, 3),
      imgs: [
        '../../assets/test/962f6141c4d54d74b771de68ec369644.jpg',
        '../../assets/test/a8099e0dcebc4d54a7ad71acb0e02645.jpg'
      ]
    },
    {
      address: 'West India Quay, Poplar, E14',
      beds: 3,
      bath: 2,
      price: 2000,
      update: new Date(),
      imgs: [
        '../assets/test/0cdb4058d2c54a0ab2e85579ea737aa0.jpg',
        '../assets/test/30b0c94f62aa4f7ab8a65e1d06d13ae1.jpg'
      ]
    },
    {
      address: 'Wetherell Road, South Hackney, E9',
      beds: 1,
      bath: 1,
      price: 2000,
      update: new Date(2018, 6, 11),
      imgs: [
        '../../assets/test/30b0c94f62aa4f7ab8a65e1d06d13ae1.jpg',
        '../../assets/test/483556b111cb4fa9810763804d8f3df3.jpg'
      ]
    },
    {
      address: 'Charles Hayward Building, Haggerston, E2',
      beds: 3,
      bath: 0,
      price: 2000,
      update: new Date(2018, 7, 3),
      imgs: [
        '../../assets/test/962f6141c4d54d74b771de68ec369644.jpg',
        '../../assets/test/a8099e0dcebc4d54a7ad71acb0e02645.jpg'
      ]
    },
    {
      address: 'West India Quay, Poplar, E14',
      beds: 3,
      bath: 2,
      price: 2000,
      update: new Date(),
      imgs: [
        '../assets/test/0cdb4058d2c54a0ab2e85579ea737aa0.jpg',
        '../assets/test/30b0c94f62aa4f7ab8a65e1d06d13ae1.jpg'
      ]
    },
    {
      address: 'Wetherell Road, South Hackney, E9',
      beds: 1,
      bath: 1,
      price: 2000,
      update: new Date(2018, 6, 11),
      imgs: [
        '../../assets/test/30b0c94f62aa4f7ab8a65e1d06d13ae1.jpg',
        '../../assets/test/483556b111cb4fa9810763804d8f3df3.jpg'
      ]
    },
    {
      address: 'Charles Hayward Building, Haggerston, E2',
      beds: 3,
      bath: 0,
      price: 2000,
      update: new Date(2018, 7, 3),
      imgs: [
        '../../assets/test/962f6141c4d54d74b771de68ec369644.jpg',
        '../../assets/test/a8099e0dcebc4d54a7ad71acb0e02645.jpg'
      ]
    },
    {
      address: 'West India Quay, Poplar, E14',
      beds: 3,
      bath: 2,
      price: 2000,
      update: new Date(),
      imgs: [
        '../assets/test/0cdb4058d2c54a0ab2e85579ea737aa0.jpg',
        '../assets/test/30b0c94f62aa4f7ab8a65e1d06d13ae1.jpg'
      ]
    },
    {
      address: 'Wetherell Road, South Hackney, E9',
      beds: 1,
      bath: 1,
      price: 2000,
      update: new Date(2018, 6, 11),
      imgs: [
        '../../assets/test/30b0c94f62aa4f7ab8a65e1d06d13ae1.jpg',
        '../../assets/test/483556b111cb4fa9810763804d8f3df3.jpg'
      ]
    },
    {
      address: 'Charles Hayward Building, Haggerston, E2',
      beds: 3,
      bath: 0,
      price: 2000,
      update: new Date(2018, 7, 3),
      imgs: [
        '../../assets/test/962f6141c4d54d74b771de68ec369644.jpg',
        '../../assets/test/a8099e0dcebc4d54a7ad71acb0e02645.jpg'
      ]
    },
  ];

  getRentList() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.list);
        }, 800);
      }
    );
  }
}
