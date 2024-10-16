import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CartaModal from "../component/cartaModal";
import ReservationModal from "../component/reservationModal";
import OpinionModal from "../component/OpinionModal"; // Importación corregida

import "../../styles/restaurantDetail.css"; // Asegúrate de tener este archivo
import {PaginaDeRestauranteParaReservar} from "./reserva"
// import UploadImageCloudinary from "./components/UploadImageCloudinary";

export const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCartaModalOpen, setIsCartaModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpinionModalOpen, setIsOpinionModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openOpinionModal = () => {
    setIsOpinionModalOpen(true);
  };

  const closeOpinionModal = () => {
    setIsOpinionModalOpen(false);
  };

  const CartaOpenModal = () => {
    setIsCartaModalOpen(true);
  };
  const CartaCloseModal = () => {
    setIsCartaModalOpen(false);
  };

  const opinions = [
    {
      id: 1,
      name: "Carlos Pérez",
      rating: 5,
      comment: "Una experiencia increíble, la comida es deliciosa y el servicio excelente.",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Ana Gómez",
      rating: 4,
      comment: "Me encantaron las tapas, aunque la espera fue un poco larga.",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 3,
      name: "Juan López",
      rating: 5,
      comment: "Un lugar acogedor con un ambiente perfecto para una cena romántica.",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  const nextOpinion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % opinions.length);
  };

  const prevOpinion = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + opinions.length) % opinions.length);
  };

  useEffect(() => {
    const mockRestaurants = [
      { id: 1, name: "Trattoria Bella", tipo: "Italiana", address: "Calle Mayor 45, Madrid", rating: 4.7, priceRange: "€€", image: "https://i0.wp.com/travelandleisure-es.com/wp-content/uploads/2024/04/TAL-ristorante-seating-ITLNRESTAURANTS0424-5403b234cdbd4026b2e98bed659b1634.webp?fit=750%2C500&ssl=1" },
      { id: 2, name: "Pasta Fresca", tipo: "Italiana", address: "Calle de la Paz 10, Valencia", rating: 4.3, priceRange: "€€", image: "https://static.wixstatic.com/media/e7e925_6e8c1ffb4cd8432ea5a37cec591048ad~mv2.jpg/v1/fill/w_2880,h_1598,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e7e925_6e8c1ffb4cd8432ea5a37cec591048ad~mv2.jpg" },
      { id: 3, name: "Osteria del Mare", tipo: "Italiana", address: "Paseo Marítimo 8, Barcelona", rating: 4.5, priceRange: "€€", image: "https://s3.abcstatics.com/abc/www/multimedia/gastronomia/2023/01/16/forneria-RMj62LyNsJZlBCufEion5YK-1200x840@abc.jpg" },

      { id: 4, name: "El Mariachi Loco", tipo: "Mexicana", address: "Avenida de América 23, Madrid", rating: 4.6, priceRange: "€€", image: "https://i0.wp.com/lattin.ca/wp-content/uploads/2016/05/El_Catrin_Inside_51.png?w=1085&ssl=1" },
      { id: 5, name: "Cantina del Cactus", tipo: "Mexicana", address: "Boulevard de los Aztecas 15, Barcelona", rating: 4.2, priceRange: "€€", image: "https://images.ecestaticos.com/kCk1Qljo-a1ll2eVt2ovDfRo7pY=/0x0:1885x900/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc66%2Fa99%2F8d5%2Fc66a998d5952c07d264a23dfdbecdcf2.jpg" },
      { id: 6, name: "Tacos y Más", tipo: "Mexicana", address: "Calle del Carmen 99, Valencia", rating: 4.7, priceRange: "€€", image: "https://www.lavanguardia.com/files/image_990_484/files/fp/uploads/2022/08/04/62ebd8920f8fe.r_d.3275-3425-1343.jpeg" },


      { id: 7, name: "Sakura House", tipo: "Japonesa", address: "Calle Bonsai 12, Madrid", rating: 4.8, priceRange: "€€", image: "https://winegogh.es/wp-content/uploads/2024/08/kelsen-fernandes-2hEcc-4cwZA-unsplash-scaled.jpg" },
      { id: 8, name: "Samurai Sushi", tipo: "Japonesa", address: "Avenida de Japón 23, Barcelona", rating: 4.6, priceRange: "€€", image: "https://imagenes.esdiario.com/files/image_990_660/uploads/2024/06/22/66765b6b14a50.jpeg" },
      { id: 9, name: "Yoko Ramen", tipo: "Japonesa", address: "Calle del Pescador 7, Valencia", rating: 4.4, priceRange: "€€", image: "https://media.timeout.com/images/100614777/1536/864/image.webp" },


      { id: 10, name: "Dragón Rojo", tipo: "China", address: "Calle Pagoda 34, Madrid", rating: 4.5, priceRange: "€€", image: "https://offloadmedia.feverup.com/valenciasecreta.com/wp-content/uploads/2022/01/13123703/restaurantes-chinos-valencia-1024x683.jpg" },
      { id: 11, name: "Dim Sum Palace", tipo: "China", address: "Avenida Oriente 22, Barcelona", rating: 4.3, priceRange: "€€", image: "https://offloadmedia.feverup.com/valenciasecreta.com/wp-content/uploads/2022/01/13123704/277526606_706703347177521_4948663648545209465_n.jpg" },
      { id: 12, name: "Pekin Express", tipo: "China", address: "Calle Muralla 8, Sevilla", rating: 4.2, priceRange: "€€", image: "https://www.lavanguardia.com/files/image_990_484/uploads/2020/01/15/5e9977269a0d4.jpeg" },


      { id: 13, name: "Curry Masala", tipo: "India", address: "Calle Taj Mahal 12, Madrid", rating: 4.6, priceRange: "€€", image: "https://www.sentirsebiensenota.com/wp-content/uploads/2022/04/restaurantes-indios-valencia-1080x640.jpg" },
      { id: 14, name: "Palacio del Sabor", tipo: "India", address: "Avenida Ganges 5, Valencia", rating: 4.4, priceRange: "€€", image: "https://tumediodigital.com/wp-content/uploads/2021/03/comida-india-valencia.jpg" },
      { id: 15, name: "Namaste India", tipo: "India", address: "Boulevard Raj 10, Barcelona", rating: 4.7, priceRange: "€€", image: "https://phantom-elmundo.unidadeditorial.es/7279f37ebecb49cf7738402f76486caa/crop/0x0/1478x985/resize/746/f/webp/assets/multimedia/imagenes/2021/06/15/16237493606773.png" },


      { id: 16, name: "Hard Rock", tipo: "Americana", address: "Avenida de la Libertad 45, Madrid", rating: 4.2, priceRange: "€€", image: "https://ibiza-spotlight1.b-cdn.net/sites/default/files/styles/embedded_auto_740_width/public/article-images/138583/embedded-1901415944.jpeg?itok=oWiIVuDP" },
      { id: 17, name: "Steak House", tipo: "Americana", address: "Calle Ruta 66 77, Barcelona", rating: 4.5, priceRange: "€€", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/34/e2/7d/barbecued-pork-ribs.jpg?w=1200&h=-1&s=1" },
      { id: 18, name: "Bernie's Diner", tipo: "Americana", address: "Calle Manhattan 23, Valencia", rating: 4.3, priceRange: "€€", image: "https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2015/07/09112834/usa-2.jpg" },


      { id: 19, name: "Taberna Flamenca", tipo: "Mediterránea", address: "Calle Sevilla 7, Sevilla", rating: 4.6, priceRange: "€€", image: "https://s1.ppllstatics.com/hoy/www/multimedia/202111/13/media/cortadas/165813563--1968x1310.jpg" },
      { id: 20, name: "Casa del Arroz", tipo: "Mediterránea", address: "Paseo de la Castellana 12, Madrid", rating: 4.4, priceRange: "€€", image: "https://ibiza-spotlight1.b-cdn.net/sites/default/files/styles/embedded_auto_740_width/public/article-images/138301/embedded-1808145593.jpg?itok=06R4cJZd" },
      { id: 21, name: "Sabores del Mar", tipo: "Mediterránea", address: "Plaza del Mar 3, Barcelona", rating: 4.5, priceRange: "€€€", image: "https://imagenes.elpais.com/resizer/v2/D7EEJHYCERGLVFSCY43QPDLO6E.jpg?auth=0dbf855b68440ee29905c103edef7d7cc1add094e50abbc376b2494772c44dd9&width=1200" },


      { id: 22, name: "Oasis del Sabor", tipo: "Arabe", address: "Calle del Desierto 14, Granada", rating: 4.6, priceRange: "€€", image: "https://www.sientemarruecos.viajes/wp-content/uploads/2019/10/El-Restaurante-Al-Mounia-es-un-restaurante-marroqu%C3%AD-en-Madrid.jpg" },
      { id: 23, name: "El Sultán", tipo: "Arabe", address: "Avenida Oasis 18, Córdoba", rating: 4.5, priceRange: "€€", image: "https://www.guiarepsol.com/content/dam/repsol-guia/contenidos-imagenes/comer/nuestros-favoritos/restaurante-el-califa-(vejer,-c%C3%A1diz)/00El_Califa_.jpg" },
      { id: 24, name: "Mezze Lounge", tipo: "Arabe", address: "Boulevard Dubai 25, Madrid", rating: 4.7, priceRange: "€€", image: "https://marruecoshoy.com/wp-content/uploads/2021/09/chebakia.png" },


      { id: 25, name: "Bangkok Delight", tipo: "Tailandesa", address: "Calle Siam 4, Barcelona", rating: 4.4, priceRange: "€€", image: "https://viajeatailandia.com/wp-content/uploads/2018/07/Restaurantes-Tailandia.jpg" },
      { id: 26, name: "Sabai Sabai", tipo: "Tailandesa", address: "Avenida Phuket 21, Madrid", rating: 4.5, priceRange: "€€", image: "https://www.topasiatour.com/pic/thailand/city/Bangkok/guide/jianxing-restaurant.jpg" },
      { id: 27, name: "Thai Spice", tipo: "Tailandesa", address: "Boulevard Chiang Mai 8, Valencia", rating: 4.7, priceRange: "€€", image: "https://www.hola.com/imagenes/viajes/2015030677296/bares-restaurantes-rascacielos-bangkok-tailandia/0-311-16/a_Sirocco---interior-a.jpg" },


      { id: 28, name: "Haller", tipo: "Internacional", address: "Avenida Montmartre 9, Barcelona", rating: 4.7, priceRange: "€€", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/f8/0d/4d/arbol-de-yuca.jpg?w=2400&h=-1&s=1" },
      { id: 29, name: "Sublimotion", tipo: "Internacional", address: "Paseo de la Castellana 13, Madrid", rating: 4.6, priceRange: "€€", image: "https://www.economistjurist.es/wp-content/uploads/sites/2/2023/08/293978.jpeg" },
      { id: 30, name: "Chez Marie", tipo: "Internacional", address: "Calle Napoleón 19, Valencia", rating: 4.5, priceRange: "€€", image: "https://6e131064.rocketcdn.me/wp-content/uploads/2022/08/Girafe%C2%A9RomainRicard-5-1100x650-1.jpeg" },



      { id: 31, name: "Asador Don Julio", tipo: "Argentina", address: "Calle de la Carne 9, Madrid", rating: 4.7, priceRange: "€€", image: "https://media.timeout.com/images/106116523/1536/864/image.webp" },
      { id: 32, name: "Casa del Fernet", tipo: "Argentina", address: "Paseo Marítimo 11, Barcelona", rating: 4.6, priceRange: "€€", image: "https://rio-marketing.com/wp-content/uploads/2024/02/fernet1.webp" },
      { id: 33, name: "Empanadas Locas", tipo: "Argentina", address: "Calle de Verdad 19, Valencia", rating: 4.5, priceRange: "€€", image: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2019/11/comida-tipica-argentina.jpg" },


      { id: 34, name: "Green Delight", tipo: "saludable", address: "Avenida de la Paz 45, Madrid", rating: 4.7, priceRange: "€€", image: "https://menusapiens.com/wp-content/uploads/2017/04/Comida-Sana-Alta-Cocina-MenuSapiens.jpeg" },
      { id: 35, name: "Vida Verde", tipo: "saludable", address: "Calle de la Luna 8, Barcelona", rating: 4.6, priceRange: "€€", image: "https://imagenes.elpais.com/resizer/v2/BSUD6VP76FGXJJE75BHINHYRAY.jpg?auth=2b94a0b2cdda6a164ea7b90ff96035281c2cd1ae8ead08a9d6d24df0d8ad9882&width=1200" },
      { id: 36, name: "Hortaliza Viva", tipo: "saludable", address: "Calle Mayor 21, Valencia", rating: 4.5, priceRange: "€€", image: "https://blog.covermanager.com/wp-content/uploads/2024/05/Como-Crear-un-Menu-Sostenible-para-Restaurantes-2048x1365.jpg" },


      { id: 37, name: "Sabor Latino", tipo: "latinoamerica", address: "Calle de Alcalá 22, Madrid", rating: 4.7, priceRange: "€€", image: "https://www.clarin.com/img/2021/06/03/_32tg_291_1256x620__1.jpg" },
      { id: 38, name: "El Fogón de la Abuela", tipo: "latinoamerica", address: "Calle de la Reina 15, Barcelona", rating: 4.6, priceRange: "€€", image: "https://jotajotafoods.com/wp-content/uploads/2022/05/plato-Bandeja-Paisa.jpg" },
      { id: 39, name: "Casa Caribe", tipo: "latinoamerica", address: "Paseo de la Castellana 33, Valencia", rating: 4.5, priceRange: "€€", image: "https://theobjective.com/wp-content/uploads/2024/04/2022-09-02.webp" }

    ];
    const foundRestaurant = mockRestaurants.find(r => r.id === parseInt(id));

    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
      setLoading(false);
    } else {
      setError("Restaurant not found");
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!restaurant) return <div>No restaurant found</div>;

  return (
    <div className='container-detail'>
      <div className='containel-detail-cards'>
        <div className="area-header">
          <h1 className="titulo-principal">Tu restaurante elegido</h1>
        </div>

        <div className="restaurant-search-container">
          <div className="restaurant-detail-layout">
            {/* Card del restaurante a la izquierda */}
            <div className="restaurant-card">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="restaurant-image"
              />
              <div className="restaurant-info">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address}</p>
                <p><strong>Valoración:</strong> {restaurant.rating} ⭐</p>
                <p><strong>Rango de Precios:</strong> {restaurant.priceRange}</p>
              </div>
            </div>

            {/* Descripción del restaurante a la derecha */}
            <div className="restaurant-description-container">
              <div className="restaurant-description">
                <h2>¿Todavía no nos conoces?</h2>
                <p>
                  <strong>{restaurant.name}</strong> es un acogedor restaurante ubicado en el corazón de la ciudad,
                  especializado en cocina <strong>{restaurant.tipo}</strong> con un toque contemporáneo.
                  El ambiente es cálido y relajado, con una decoración rústica y moderna a la vez,
                  que mezcla tonos de madera natural y luces tenues, creando un espacio perfecto
                  para disfrutar de una comida íntima o una reunión con amigos.
                </p>
              </div>

              {/* Botones fuera del div de la descripción, debajo de ella */}
              <div className="restaurant-buttons">
                <button onClick={openModal} className="action-button">RESERVA AHORA</button>
                <button onClick={CartaOpenModal} className="action-button">VER NUESTRA CARTA</button>
                <button onClick={openOpinionModal} className="action-button">VER OPINIONES</button>
              </div>
            </div>
          </div>

          <PaginaDeRestauranteParaReservar
            isOpen={isModalOpen}
            onClose={closeModal}
            restaurante_id={id}
          />

          <CartaModal
            isOpen={isCartaModalOpen}
            onClose={CartaCloseModal}
          />

          {/* Modal para opiniones */}
          <OpinionModal
            isOpen={isOpinionModalOpen}
            onClose={closeOpinionModal}
            opinions={opinions}
            currentIndex={currentIndex}
            nextOpinion={nextOpinion}
            prevOpinion={prevOpinion}
          />
        </div>
      </div>
    </div>
  );
};
