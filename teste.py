import pyperclip
import pyautogui
import time
import keyboard


# Código CSS a ser formatado e digitado
codigo_css = """
#contact {
  padding-top: 3rem;
  background-color: var(--dark-background-strong);
  width: 100%;
  box-shadow: var(--shadow-insent-M);
}

#contact h2 {
  margin-bottom: 3rem;
}

.contactCards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  gap: 5px;
  width: 95%;
  max-width: 1000px;
}
.ContactField {
  box-shadow: var(--shadow-G);
  border: 1px solid var(--black-1);
}
fieldset {
  padding: 20px;
  background-color: var(--dark-background-strong);
  border: 1px solid var(--black-1);
  border-radius: 3px;
}
legend {
  font-weight: normal;
}
.ContactField > legend {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}
/*Card contact*/
.ContactCard {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.ContactCard ul {
  list-style-type: none;
}
.contactLink {
  display: flex;
  align-items: center;
}
.contactLink a {
  color: white;
  transition: 0.3s ease;
}
.contactLink i {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin: 8px;
  outline: 1px solid var(--black-3);
  border-radius: 5px;
}
.contactLink a:hover {
  color: var(--primary-color);
  transition: 0.3s ease;
}
/*Email form*/
.emailContact {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.formGroup {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1rem;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  outline: 1px solid var(--black-2);
  border: 1px solid transparent;
  border-radius: 4px;
  color: var(--white-2);
  background-color: var(--background-color);
  transition: 0.3s ease;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
  -o-transition: 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: var(--primary-color);
  transition: 0.3s ease;
}
input:hover,
textarea:hover {
  outline: 1px solid var(--black-5);
  transition: 0.3s ease;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
  -o-transition: 0.3s ease;
}

input:invalid:not(:placeholder-shown),
textarea:invalid:not(:placeholder-shown) {
  border-color: red;
}

input:invalid:not(:placeholder-shown):focus,
textarea:invalid:not(:placeholder-shown):focus {
  border-color: red;
}

textarea {
  height: 120px;
  resize: vertical;
}

.btn-submit {
  background-color: var(--primary-color);
  font-size: 1rem;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: var(--secondary-color);
}
"""

# Aguarda 20 segundos antes de começar a digitar
time.sleep(10)

# Percorre cada linha do código CSS e cola no editor de texto
for line in codigo_css.split("\n"):
    pyperclip.copy(line)
    pyautogui.hotkey("ctrl", "v")
    pyautogui.press("enter")
    # Aguarda 0.1 segundo entre cada linha (ajuste conforme necessário)
    time.sleep(0.9)

    # Verifica se a tecla Esc foi pressionada para interromper a digitação
    if keyboard.is_pressed('esc'):
        break

# Aguarda 1 segundo antes de salvar o arquivo
time.sleep(1)

# Simula o pressionamento de Ctrl + S para salvar o arquivo
pyautogui.hotkey("ctrl", "s")

# Aguarda 2 segundos antes de finalizar o script
time.sleep(2)
