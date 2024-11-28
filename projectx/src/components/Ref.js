/*import React,{Component} from "react";
class Ref extends Component {
  constructor(props) {
    super(props);
    // Crée une référence pour stocker l’élément DOM textInput
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

 focusTextInput() {
    // Donne explicitement le focus au champ texte en utilisant l’API DOM native.
    // Remarque : nous utilisons `current` pour cibler le nœud DOM
  this.textInput.current.focus();
  }

  render() {
    // Dit à React qu’on veut associer la ref `textInput` créée
    // dans le constructeur avec le `<input>`.
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Donner le focus au champ texte"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
 }
 export default Ref;*/