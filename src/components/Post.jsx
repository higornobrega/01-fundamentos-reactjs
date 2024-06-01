import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/higornobrega.png" />
                    <div className={styles.authorInfo}>
                        <strong>Higor Nóbrega</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='31 de Maio às 16:00h' dateTime="2024-05-11 16:00:30">Publicação há 1h</time>
            </header>

        <div className={styles.content}>
            <p>Lorem ipsum</p>
            <p>Dolor sit amet consectetur adipisicing elit. Suscipit asperiores praesentium cum culpa eveniet totam atque nisi quisquam iste voluptatem voluptas, consequuntur possimus quidem voluptates eligendi amet sapiente exercitationem beatae!</p>
            <p><a href=""> Lorem ipsum dolor sit, amet</a></p>
            <p>
                <a href=""> Consectetur </a>{' '}
                <a href="">Adipisicing </a>{' '}
                <a href=""> elit.</a>{' '}
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus numquam eius delectus impedit quo amet dolor quia eaque quaerat dignissimos, fuga atque porro ducimus a dolore reprehenderit? Doloribus, commodi?
        </div>
        </article>
    )
}