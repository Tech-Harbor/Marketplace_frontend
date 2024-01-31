import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.dot}></div>
      <div className={s.dot}></div>
      <div className={s.dot}></div>
      <div className={s.dot}></div>
      <div className={s.dot}></div>
      <div className={s.dot}></div>
      <div className={s.dot}></div>
      <div className={s.dot}></div>
    </div>
  );
};

export default Loader;
