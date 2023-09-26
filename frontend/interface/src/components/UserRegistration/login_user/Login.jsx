import styles from "./Login.module.css"
import logo from "../../../assets/img/logo.png"
function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.background_side}>
      </div>
      <div className={styles.form}>

        <form action="#" method="post">
          <div className={styles.logo}> <img src={logo} alt="logo" /> </div>

          <div class="form-group">
            <input type="text" name="username" placeholder="Usuário" required />
          </div>
          <div class="form-group">
            <input type="password" name="password" placeholder="Senha" required />
          </div>
          <div class="form-group">
            <button type="submit">Entrar</button>
          </div>
        </form>
      
      </div>

    </div>
  )
}

export default Login