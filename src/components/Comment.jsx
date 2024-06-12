import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/higornobrega.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Higor Nóbrega</strong>
                            <time title='31 de Maio às 16:00h' dateTime="2024-05-11 16:00:30">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! :) ;)</p>
                    
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
  }