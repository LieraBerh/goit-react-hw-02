import clsx from "clsx";
import s from "./CoffeeMachine.module.css";

const CoffeeMachine = () => {
  return (
    <div className={s.container}>
      <div className={s.coffee_header}>
        <div
          className={clsx(
            s.coffee_header__buttons,
            s.coffee_header__button_one
          )}
        ></div>
        <div
          className={clsx(
            s.coffee_header__buttons,
            s.coffee_header__button_two
          )}
        ></div>
        <div className={s.coffee_header__display}></div>
        <div className={s.coffee_header__details}></div>
      </div>
      <div className={s.coffee_medium}>
        <div className={s.coffee_medium__exit}></div>
        <div className={s.coffee_medium__arm}></div>
        <div className={s.coffee_medium__liquid}></div>
        <div
          className={clsx(s.coffee_medium__smoke, s.coffee_medium__smoke_one)}
        ></div>
        <div
          className={clsx(s.coffee_medium__smoke, s.coffee_medium__smoke_two)}
        ></div>
        <div
          className={clsx(s.coffee_medium__smoke, s.coffee_medium__smoke_three)}
        ></div>
        <div
          className={clsx(s.coffee_medium__smoke, s.coffee_medium__smoke_for)}
        ></div>
        <div className={s.coffee_medium__cup}></div>
      </div>
      <div className={s.coffee_footer}></div>
    </div>
  );
};

export default CoffeeMachine;
