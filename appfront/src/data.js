export const productos = [
    {
        id:1,
        name:'Pollo + papas + Gaseosa',
        category: 'Restaurante',
        origin_name: 'Sazón Peruana',
        description: '1 pollo con 1 porcion grande + 1 gaseosa de 3L',
        price:63.5,
        delivery_time: '50 min',
        delivery_price: 7.5,
        imgUrl:'1Pollo.png'
      },
      {
        id:2,
        name:'Especial Criollo',
        category:'Restaurante',
        origin_name: 'Sazón Peruana',
        description: 'Causa + Huancaina + anticucho + humita + papa rellena',
        price:90,
        delivery_time: '50 min',
        delivery_price: 8.5,
        imgUrl:'CausaEspecial.jpg'
      },
      {
        id:3,
        name:'Ensalada Espechal',
        category:'Restaurante',
        origin_name: 'Healthy Bites',
        description: 'Ensalada + salsas',
        price:19.5,
        delivery_time: '50 min',
        delivery_price: 5.0,
        imgUrl:'Ensalada.jpg'
      },
      {
        id:4,
        name:'1/2 Pollo + papas',
        category:'Restaurante',
        origin_name: 'Sazón Peruana',
        description: '1/2 Pollo con porcion mediana de papas',
        price:30.5,
        delivery_time: '50 min',
        delivery_price: 7.5,
        imgUrl:'MedioPollo.jpg'
        
      },
      {
        id:5,
        name:'Combo Parrillero',
        category:'Restaurante',
        origin_name: 'Sazón Peruana',
        description: '1 Carne + papas + ensalada + 2L Chicha',
        price:55.5,
        delivery_time: '50 min',
        delivery_price: 8.0,
        imgUrl:'Parrilla.jpg'
        
      },
      {
        id:6,
        name:'3 Tacos + papas',
        category:'Restaurante',
        origin_name: 'Delicias Caseras',
        description: '3 Tacos + papas',
        price:32.5,
        delivery_time: '50 min',
        delivery_price: 8.0,
        imgUrl:'tacos.jpg'
      },
      {
        id:7,
        name:'Lomo Saltado',
        category:'Restaurante',
        origin_name: 'Tradiciones Peruanas',
        description: 'Lomo Saltado',
        price: 50,
        delivery_time: '50 min',
        delivery_price: 8.0,
        imgUrl:'LomoSaltado.jpg'
      },
      {
        id:8,
        name:'Salchipapa',
        category:'Restaurante',
        origin_name: 'Sazón Peruana',
        description: 'Salchipapa',
        price: 15,
        delivery_time: '50 min',
        delivery_price: 8.0,
        imgUrl:'Salchipapa.jpg'
      },
      {
        id:9,
        name:'Milanesa',
        category:'Restaurante',
        origin_name: 'Cocina Italiana',
        description: 'Milanesa',
        price: 30,
        delivery_time: '50 min',
        delivery_price: 8.0,
        imgUrl:'Milanesa.jpg'
        
      },
      {
        id:10,
        name:'Pizza',
        category:'Restaurante',
        origin_name: 'Cocina Italiana',
        description: 'Pizza',
        price: 30,
        delivery_time: '50 min',
        delivery_price: 8.0,
        imgUrl:'Pizza.jpg'
      },
      {
        id:11,
        name:'Hamburgesa',
        category:'Restaurante',
        origin_name: 'Delicias Caseras',
        description: 'Hamburgesa',
        price: 14.5,
        delivery_time: '50 min',
        delivery_price: 8.0,
        imgUrl:'Hamburgesa.jpg'
      },
      {
        id:12,
        name:'Curri',
        category:'Restaurante',
        origin_name: 'Delicias Caseras',
        description: 'Curri',
        price: 22.5,
        delivery_time: '50 min',
        delivery_price: 8.0,
        imgUrl:'Curri.jpg'
      },
      {
        id:13,
        name:'Sushi',
        category:'Restaurante',
        origin_name: 'Sazón Oriental',
        description: 'Sushi',
        price: 20,
        delivery_time: '50 min',
        delivery_price: 8.0,
        imgUrl:'Sushi.jpg'
      },
      {
        id:14,
        name:'Ajinome de Pollo',
        category:'Supermercado',
        origin_name: 'Supermercado Tottus',
        description: 'Ajinome de Pollo',
        price: 5,
        delivery_time: '15 min',
        delivery_price: 2.0,
        imgUrl:'Ajinomen.jpg'
      },
      {
        id:15,
        name:'Chocoton',
        category:'Supermercado',
        origin_name: 'Supermercado Wong',
        description: 'Chocoton',
        price: 25,
        delivery_time: '15 min',
        delivery_price: 2.0,
        imgUrl:'Chocoton.jpg'
      },
      {
        id:16,
        name:'Colgate',
        category:'Supermercado',
        origin_name: 'Supermercado Metro',
        description: 'Colgate',
        price: 7,
        delivery_time: '15 min',
        delivery_price: 2.0,
        imgUrl:'Colgate.jpg'
      },
      {
        id:17,
        name:'Guarana 3L',
        category:'Supermercado',
        origin_name: 'Supermercado Wong',
        description: 'Guarana 3L',
        price: 10.0,
        delivery_time: '15 min',
        delivery_price: 2.5,
        imgUrl:'Guarana.jpg'
      },
      {
        id:18,
        name:'Leche Gloria 1L',
        category:'Supermercado',
        origin_name: 'Supermercado Tottus',
        description: 'Leche Gloria 1L',
        price: 12,
        delivery_time: '15 min',
        delivery_price: 2.5,
        imgUrl:'LecheGloria.jpg'
      },
      {
        id:19,
        name:'Pan Bimbo',
        category:'Supermercado',
        origin_name: 'Supermercado Plaza Vea',
        description: 'Pan Bimbo',
        price: 15,
        delivery_time: '15 min',
        delivery_price: 2.5,
        imgUrl:'PanBimbo.jp g'
      },
];

export const categorias = [
  { name:'RESTAURANTE',
    imgUrl:''
  },
  { name:'SUPERMERCADO',
    imgUrl:''
  }
];

export const vendedores =[
  {
    category:'RESTAURANTE',
    name: 'Tradiciones Andinas'
  },
  {
    category:'RESTAURANTE',
    name: 'Sazón Peruana'
  },
  {
    category:'RESTAURANTE',
    name: 'La Nonna Italiana'
  },
  {
    category:'RESTAURANTE',
    name: 'Sazón Oriental'
  },
  {
    category:'RESTAURANTE',
    name: 'Cocina Tradicional'
  },
  {
    category:'RESTAURANTE',
    name: 'El Rincón Marino'
  },
  {
    category:'RESTAURANTE',
    name: 'Pizzería Napolitana'
  },
  {
    category:'RESTAURANTE',
    name: 'Tradiciones Peruanas'
  },

  {
    category:'RESTAURANTE',
    name: 'Cocina Italiana'
  },
  {
    category:'RESTAURANTE',
    name: 'Delicias Caseras'
  },
  {
    category:'RESTAURANTE',
    name: 'Healthy Bites'
  },
  {
    category:'SUPERMERCADO',
    name: 'Wong'
  },
  {
    category:'SUPERMERCADO',
    name: 'Metro'
  },

  {
    category:'SUPERMERCADO',
    name: 'Plaza Vea'
  },
  {
    category:'SUPERMERCADO',
    name: 'Tottus'
  },
];