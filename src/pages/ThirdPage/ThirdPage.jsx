import ProductCardList from '../../components/ProductCardList/ProductCardList';
import styles from './ThirdPage.module.css';

const db = [
  {
    id: 1,
    category: 'Телефони',
    title: 'Samsung',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 20000,
    image: 'https://loremflickr.com/320/500',
  },
  {
    id: 2,
    category: 'Телефони',
    title: 'Nokia',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 10000,
    image: 'https://loremflickr.com/320/501',
  },
  {
    id: 3,
    category: 'Телефони',
    title: 'Iphone',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 30000,
    image: 'https://loremflickr.com/320/502',
  },
  {
    id: 4,
    category: 'Телефони',
    title: 'Samsung',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 20000,
    image: 'https://loremflickr.com/320/503',
  },
];

const ThirdPage = () => {
  return (
    <div className={styles.thirdPageContainer}>
      <div className={styles.filterNav}></div>
      <div className={styles.productCard}>
        <ProductCardList db={db} />
      </div>
    </div>
  );
};

export default ThirdPage;
