import styles from './Score.module.css'

const ScoreBoard=({score,maxScore})=>{
    return(
        <div className={styles.Score}>
            <span>Sore:{score}</span>
            <br />
            <span>Max Score:{maxScore}</span>
        </div>
    )
}
export default ScoreBoard