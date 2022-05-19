import type { NextComponentType } from 'next';
import styles from '../styles/styles.module.scss';

const ControlPanel: NextComponentType = () => {
  return (
    <div className={ styles.controlPanel }>
      <form>
        <input type="text" name="" id="" />
        <select name="" id="">
          <option value="">Nome</option>
          <option value="">Email</option>
        </select>
        <button type="submit">
          Pesquisar
        </button>
      </form>
      <button>
        Registrar novo usuário
      </button>
    </div>
  )
};

export default ControlPanel;