import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

import ProductCard from '../../components/ProductCard/ProductCard';
import SideBar from '../../components/SideBar/SideBar';
import Slider from '../../ui_reuse/slider/Slider';
import CardList from '../../components/CardList/CardList';

import styles from './SecondPage.module.css';

const SecondCPage = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const [title, setTitle] = useState('');
  const [dataToShow, setDataToShow] = useState([]);

  const getTitleAndDataByPath = currentPage => {
    switch (currentPage) {
      case '/mobiles':
        setTitle('Телефони та аксесуари');
        setDataToShow([
          {
            id: 1,
            name: 'Мобільні телефони та смартфони',
            image: 'https://loremflickr.com/320/240',
            path: 'smartphones',
          },
          {
            id: 2,
            name: 'Чохли, захисні плівки та скло',
            image: 'https://loremflickr.com/320/245',
            path: 'cases_glass',
          },
          {
            id: 3,
            name: 'Bluetooth гарнітури',
            image: 'https://loremflickr.com/320/241',
            path: 'bluetooth',
          },
          {
            id: 4,
            name: 'Все для selfie',
            image: 'https://loremflickr.com/320/246',
            path: 'selfies',
          },
          {
            id: 5,
            name: 'Комплектуючі',
            image: 'https://loremflickr.com/320/247',
            path: 'components',
          },
          {
            id: 6,
            name: 'Носимі гаджети та аксесуари',
            image: 'https://loremflickr.com/320/248',
            path: 'gadgets',
          },
          {
            id: 7,
            name: 'Кабелі та адаптери',
            image: 'https://loremflickr.com/320/249',
            path: 'cables_adapters',
          },
          {
            id: 8,
            name: 'Карти пам’яті',
            image: 'https://loremflickr.com/320/250',
            path: 'memory_cards',
          },
          {
            id: 9,
            name: 'Тримачі в машину',
            image: 'https://loremflickr.com/320/251',
            path: 'holders ',
          },
          {
            id: 10,
            name: 'Зарядні пристрої',
            image: 'https://loremflickr.com/320/252',
            path: 'chargers',
          },
        ]);
        break;

      case '/desktops':
        setTitle('Комп’ютери та комплектуючі');
        setDataToShow([
          {
            id: 11,
            name: 'Моноблоки та компьютери',
            image: 'https://loremflickr.com/320/250',
            path: 'computers',
          },
          {
            id: 12,
            name: 'Монітори',
            image: 'https://loremflickr.com/320/251',
            path: 'monitors',
          },
          {
            id: 13,
            name: 'Системні блоки',
            image: 'https://loremflickr.com/320/241',
            path: 'system_blocks',
          },
          {
            id: 14,
            name: 'Комплектуючі',
            image: 'https://loremflickr.com/320/252',
            path: 'components',
          },
          {
            id: 15,
            name: 'Серверне обладнання',
            image: 'https://loremflickr.com/320/253',
            path: 'server_equipments',
          },
          {
            id: 16,
            name: 'Мережеве обладнання',
            image: 'https://loremflickr.com/320/254',
            path: 'network_equipments',
          },
          {
            id: 17,
            name: 'Аксесуари',
            image: 'https://loremflickr.com/320/255',
            path: 'accessories',
          },
          {
            id: 18,
            name: 'Носії інформації',
            image: 'https://loremflickr.com/320/256',
            path: 'disk',
          },
          {
            id: 19,
            name: 'Офісна техніка',
            image: 'https://loremflickr.com/320/257',
            path: 'office_equipments',
          },
          {
            id: 20,
            name: 'Кабелі та перехідники',
            image: 'https://loremflickr.com/320/258',
            path: 'Cables_and_adapters',
          },
        ]);
        break;

      case '/foto':
        setTitle('Фото та відео');
        setDataToShow([
          {
            id: 21,
            name: 'Фотоапарати та цифрові відеокамери',
            image: 'https://loremflickr.com/320/261',
            path: 'cameras ',
          },
          {
            id: 22,
            name: 'Аксесуари для фото та відео',
            image: 'https://loremflickr.com/320/262',
            path: 'accessories',
          },

          {
            id: 23,
            name: 'Студійне обладнання',
            image: 'https://loremflickr.com/320/263',
            path: 'studio_equipments',
          },
          {
            id: 24,
            name: 'Квадрокоптери та аксесуари',
            image: 'https://loremflickr.com/320/264',
            path: 'quadcopters',
          },
          {
            id: 25,
            name: 'Екшн-камери та аксесуари',
            image: 'https://loremflickr.com/320/265',
            path: 'action_cameras',
          },
          {
            id: 26,
            name: 'Об`єктиви',
            image: 'https://loremflickr.com/320/267',
            path: 'lenses',
          },
          {
            id: 27,
            name: 'Камери відеоспостереження',
            image: 'https://loremflickr.com/320/268',
            path: 'security',
          },
          {
            id: 28,
            name: 'Карти пам’яті',
            image: 'https://loremflickr.com/320/269',
            path: 'memory_cards',
          },
          {
            id: 29,
            name: 'Запчастини для фото та відео',
            image: 'https://loremflickr.com/320/270',
            path: 'details_foto',
          },
          {
            id: 30,
            name: 'Запчастини  для квадракоптерів',
            image: 'https://loremflickr.com/320/241',
            path: 'details_quadcopters',
          },
        ]);
        break;
      case '/tvs':
        setTitle('ТВ та відеотехніка');
        setDataToShow([
          {
            id: 31,
            name: 'Телевізори та аксесуари',
            image: 'https://loremflickr.com/320/271',
            path: 'televisions',
          },
          {
            id: 32,
            name: 'Домашні кінотеатри',
            image: 'https://loremflickr.com/320/272',
            path: 'home_cinemas',
          },

          {
            id: 33,
            name: 'Проектори',
            image: 'https://loremflickr.com/320/273',
            path: 'projectors',
          },
          {
            id: 34,
            name: 'Інтерактивні дошки',
            image: 'https://loremflickr.com/320/274',
            path: 'interactive_boards',
          },
          {
            id: 35,
            name: 'Медіаплеєри',
            image: 'https://loremflickr.com/320/275',
            path: 'mediaplayers',
          },
          {
            id: 36,
            name: 'Караоке-системи',
            image: 'https://loremflickr.com/320/276',
            path: 'karaoke',
          },
          {
            id: 37,
            name: 'Супутникове, кабельне телебачення',
            image: 'https://loremflickr.com/320/277',
            path: 'cable_televisions',
          },
          {
            id: 38,
            name: 'Комплектуючі',
            image: 'https://loremflickr.com/320/278',
            path: 'details',
          },
          {
            id: 39,
            name: 'Тюнери та ресивери',
            image: 'https://loremflickr.com/320/279',
            path: 'tuners_receivers',
          },
        ]);
        break;

      case '/audio':
        setTitle('Аудіотехніка');
        setDataToShow([
          {
            id: 40,
            name: 'Акустичні системи',
            image: 'https://loremflickr.com/320/280',
            path: 'acoustic_systems',
          },
          {
            id: 41,
            name: 'Портативні колонки',
            image: 'https://loremflickr.com/320/281',
            path: 'portable_speakers',
          },

          {
            id: 42,
            name: 'Музичні центри, магнітоли',
            image: 'https://loremflickr.com/320/282',
            path: 'music_centers_radios',
          },
          {
            id: 43,
            name: 'Навушники та аксесуари',
            image: 'https://loremflickr.com/320/283',
            path: 'headphones',
          },
          {
            id: 44,
            name: 'Програвачі вінілу',
            image: 'https://loremflickr.com/320/284',
            path: 'vinyl_players',
          },
          {
            id: 45,
            name: 'МР3, МР4-плеєри',
            image: 'https://loremflickr.com/320/285',
            path: 'mp3_mp4_players',
          },
          {
            id: 46,
            name: 'Радіоприймачі',
            image: 'https://loremflickr.com/320/286',
            path: 'radios',
          },
          {
            id: 47,
            name: 'Електронні перекладачі',
            image: 'https://loremflickr.com/320/287',
            path: 'electronic_translators',
          },
          {
            id: 48,
            name: 'Диктофони',
            image: 'https://loremflickr.com/320/288',
            path: 'recorders',
          },
          {
            id: 49,
            name: 'Запчастини та аксесуари',
            image: 'https://loremflickr.com/320/289',
            path: 'details',
          },
        ]);
        break;

      case '/games':
        setTitle('Ігрові приставки та пристрої');
        setDataToShow([
          {
            id: 50,
            name: 'Ігрові приставки',
            image: 'https://loremflickr.com/320/290',
            path: 'game_consoles',
          },
          {
            id: 51,
            name: 'Ігрові ноутбуки',
            image: 'https://loremflickr.com/320/291',
            path: 'gaming_laptops',
          },

          {
            id: 52,
            name: 'Ігрові комп’ютери',
            image: 'https://loremflickr.com/320/292',
            path: 'gaming_computers',
          },
          {
            id: 53,
            name: 'Ігрові монітори',
            image: 'https://loremflickr.com/320/293',
            path: 'gaming_monitors',
          },
          {
            id: 54,
            name: 'Аксесуари для геймерів',
            image: 'https://loremflickr.com/320/294',
            path: 'accessories',
          },
          {
            id: 55,
            name: 'Ігрові комплектуючі',
            image: 'https://loremflickr.com/320/295',
            path: 'game_components',
          },
          {
            id: 56,
            name: 'Ігрові маршрутизатори',
            image: 'https://loremflickr.com/320/296',
            path: 'gaming_routers',
          },
          {
            id: 57,
            name: 'Окуляри та шоломи VR',
            image: 'https://loremflickr.com/320/297',
            path: 'vr_glasses',
          },
          {
            id: 58,
            name: 'Ігри',
            image: 'https://loremflickr.com/320/298',
            path: 'games',
          },
        ]);
        break;

      case '/tablets':
        setTitle('Планшети та електронні книги');
        setDataToShow([
          {
            id: 59,
            name: 'Дитячі планшети',
            image: 'https://loremflickr.com/320/300',
            path: 'children_tablets',
          },
          {
            id: 60,
            name: 'Графічні планшети',
            image: 'https://loremflickr.com/320/301',
            path: 'graphics_tablets',
          },

          {
            id: 61,
            name: 'Бюджетні планшети',
            image: 'https://loremflickr.com/320/302',
            path: 'budget_tablets',
          },
          {
            id: 62,
            name: 'Планшети інших категорій',
            image: 'https://loremflickr.com/320/303',
            path: 'tablets',
          },
          {
            id: 63,
            name: 'Стилуси',
            image: 'https://loremflickr.com/320/304',
            path: 'stylus',
          },
          {
            id: 64,
            name: 'Чохли для планшетів',
            image: 'https://loremflickr.com/320/305',
            path: 'cases',
          },
          {
            id: 65,
            name: 'Захистне скло',
            image: 'https://loremflickr.com/320/306',
            path: 'glasses',
          },
          {
            id: 66,
            name: 'Аксесуари',
            image: 'https://loremflickr.com/320/307',
            path: 'accessories',
          },
          {
            id: 67,
            name: 'Електронні книги',
            image: 'https://loremflickr.com/320/308',
            path: 'electronic_books',
          },
          {
            id: 68,
            name: 'Аксесуари для електронних книг',
            image: 'https://loremflickr.com/320/309',
            path: 'accessories_electronic_books',
          },
        ]);
        break;

      case '/laptops':
        setTitle('Ноутбуки та аксесуари');
        setDataToShow([
          {
            id: 70,
            name: 'Ноутбуки для роботи',
            image: 'https://loremflickr.com/320/310',
            path: 'laptops_work',
          },
          {
            id: 71,
            name: 'Ноутбуки для навчання',
            image: 'https://loremflickr.com/320/311',
            path: 'laptops_learning',
          },

          {
            id: 72,
            name: 'Маленькі ноутбуки',
            image: 'https://loremflickr.com/320/312',
            path: 'small_laptops',
          },
          {
            id: 73,
            name: 'Ноутбуки з сенсорним екраном',
            image: 'https://loremflickr.com/320/313',
            path: 'laptops_touch_screen',
          },
          {
            id: 74,
            name: 'Іншу ноутбуки',
            image: 'https://loremflickr.com/320/314',
            path: 'other_laptops',
          },
          {
            id: 75,
            name: 'Аксесуари',
            image: 'https://loremflickr.com/320/315',
            path: 'accessories',
          },
          {
            id: 76,
            name: 'Підставки',
            image: 'https://loremflickr.com/320/316',
            path: 'stands',
          },
          {
            id: 77,
            name: 'Акумулятори',
            image: 'https://loremflickr.com/320/317',
            path: 'accumulators',
          },
          {
            id: 78,
            name: 'Зарядні присторої',
            image: 'https://loremflickr.com/320/318',
            path: 'charging_devices',
          },
          {
            id: 79,
            name: 'Блоки живлення',
            image: 'https://loremflickr.com/320/319',
            path: 'power_supply_units',
          },
        ]);
        break;

      case '/kitchen':
        setTitle('Техніка для кухні');
        setDataToShow([
          {
            id: 80,
            name: 'Холодильники та морозильники',
            image: 'https://loremflickr.com/320/320',
            path: 'refrigerators',
          },
          {
            id: 81,
            name: 'Посудомийні машини',
            image: 'https://loremflickr.com/320/321',
            path: 'dishwashers',
          },

          {
            id: 82,
            name: 'Електрогрилі, печі, духовки',
            image: 'https://loremflickr.com/320/322',
            path: 'ovens',
          },
          {
            id: 83,
            name: 'Мультиварки',
            image: 'https://loremflickr.com/320/323',
            path: 'multicookers',
          },
          {
            id: 84,
            name: 'Комбайни, міксери, м’ясорубки',
            image: 'https://loremflickr.com/320/324',
            path: 'mixers',
          },
          {
            id: 85,
            name: 'Кавомашини, кавомолки',
            image: 'https://loremflickr.com/320/325',
            path: 'coffee_machines',
          },
          {
            id: 86,
            name: 'Електроплити, поверхні та витяжки',
            image: 'https://loremflickr.com/320/326',
            path: 'electric_stoves',
          },
          {
            id: 87,
            name: 'Соковижималки',
            image: 'https://loremflickr.com/320/327',
            path: 'juicers',
          },
          {
            id: 88,
            name: 'Електрочайники',
            image: 'https://loremflickr.com/320/328',
            path: 'electric_kettles',
          },
          {
            id: 89,
            name: 'Мікрохвильові печі',
            image: 'https://loremflickr.com/320/329',
            path: 'microwave_ovens',
          },
        ]);
        break;

      case '/home':
        setTitle('Техніка для дому');
        setDataToShow([
          {
            id: 90,
            name: 'Електрокаміни',
            image: 'https://loremflickr.com/320/317',
            path: 'electric_fireplaces',
          },
          {
            id: 91,
            name: 'Пральні машини',
            image: 'https://loremflickr.com/320/336',
            path: 'washing_machines',
          },

          {
            id: 92,
            name: 'Водонагрівачі',
            image: 'https://loremflickr.com/320/322',
            path: 'water_heaters',
          },
          {
            id: 93,
            name: 'Пилососи, роботи-пилососи',
            image: 'https://loremflickr.com/320/333',
            path: 'vacuum_cleaners',
          },
          {
            id: 94,
            name: 'Пароочистники',
            image: 'https://loremflickr.com/320/331',
            path: 'steam_cleaners',
          },
          {
            id: 95,
            name: 'Праски, відпарювачі',
            image: 'https://loremflickr.com/320/317',
            path: 'irons',
          },
          {
            id: 96,
            name: 'Швейна техніка',
            image: 'https://loremflickr.com/320/312',
            path: 'sewing_equipments',
          },
          {
            id: 97,
            name: 'Фени, прилади для укладення волосся',
            image: 'https://loremflickr.com/320/338',
            path: 'hair_dryers',
          },
          {
            id: 98,
            name: 'Електромасажери',
            image: 'https://loremflickr.com/320/334',
            path: 'electric_massagers',
          },
          {
            id: 99,
            name: 'Дрібна побутова техніка',
            image: 'https://loremflickr.com/320/333',
            path: 'small_household_appliances',
          },
        ]);
        break;

      case '/climate':
        setTitle('Кліматичне обладнання');
        setDataToShow([
          {
            id: 100,
            name: 'Обігрівачі',
            image: 'https://loremflickr.com/320/340',
            path: 'heaters',
          },
          {
            id: 101,
            name: 'Кліматичні комплекси',
            image: 'https://loremflickr.com/320/341',
            path: 'climatic_complexes',
          },

          {
            id: 102,
            name: 'Очисники повітря',
            image: 'https://loremflickr.com/320/342',
            path: 'air_purifiers',
          },
          {
            id: 103,
            name: 'Зволожувачі повітря',
            image: 'https://loremflickr.com/320/343',
            path: 'air_humidifiers',
          },
          {
            id: 104,
            name: 'Осушувачі повітря',
            image: 'https://loremflickr.com/320/344',
            path: 'air_dryers',
          },
          {
            id: 105,
            name: 'Кондиціонери',
            image: 'https://loremflickr.com/320/345',
            path: 'air_conditioners',
          },
          {
            id: 106,
            name: 'Вентилятори',
            image: 'https://loremflickr.com/320/346',
            path: 'fans',
          },
          {
            id: 107,
            name: 'Котли опалення',
            image: 'https://loremflickr.com/320/347',
            path: 'heating_boilers',
          },
          {
            id: 108,
            name: 'Запчастини та аксесуари',
            image: 'https://loremflickr.com/320/348',
            path: 'details',
          },
        ]);
        break;

      case '/charging_stations':
        setTitle('Зарядні станції');
        setDataToShow([
          {
            id: 110,
            name: 'Портативні зарядні станції',
            image: 'https://loremflickr.com/320/351',
            path: 'portable_charging_stations',
          },
          {
            id: 111,
            name: 'З.с. від сонячних батарей',
            image: 'https://loremflickr.com/320/351',
            path: 'cs_solar_panels',
          },

          {
            id: 112,
            name: 'З.с. від розетки',
            image: 'https://loremflickr.com/320/352',
            path: 'cs_sockets',
          },
          {
            id: 113,
            name: 'Додаткові батареї',
            image: 'https://loremflickr.com/320/353',
            path: 'additional_batteries',
          },
          {
            id: 114,
            name: 'Комплекти енергонезалежності',
            image: 'https://loremflickr.com/320/354',
            path: 'energy_independences',
          },
          {
            id: 115,
            name: 'З.с. автомобільний адаптер',
            image: 'https://loremflickr.com/320/355',
            path: 'car_adapters',
          },
          {
            id: 116,
            name: 'Павербенки',
            image: 'https://loremflickr.com/320/356',
            path: 'powerbanks',
          },
          {
            id: 117,
            name: 'Сонячні панелі для зарядних станцій',
            image: 'https://loremflickr.com/320/357',
            path: 'solar_panels',
          },
          {
            id: 118,
            name: 'Генератори',
            image: 'https://loremflickr.com/320/358',
            path: 'generators',
          },
          {
            id: 119,
            name: 'Подовжувачі',
            image: 'https://loremflickr.com/320/359',
            path: 'extension_cords',
          },
        ]);
        break;

      default:
        setTitle('');
        setDataToShow([]);
        break;
    }
  };

  useEffect(() => {
    getTitleAndDataByPath(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className={styles.item__container}>
        <SideBar />
        <div className={styles.item__content}>
          <h2 className={styles.item__title}>{title}</h2>
          <CardList data={dataToShow} />
        </div>
      </div>
      <Slider
        settings={{ type: 'carousel', startAt: 0, perView: 5 }}
        title="Новинки"
        slideSArray={[
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
        ]}
      />
    </>
  );
};

export default SecondCPage;
