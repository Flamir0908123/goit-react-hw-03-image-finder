import React, { Component } from 'react'
import styles from './Form.module.css'
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default class Form extends Component {
    state = {
      name: '',
      number: ''
    }
    onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({[name]: value})
    }
      onSubmit = (e) => {
    e.preventDefault()
    const contact = {
        id: shortid.generate(),
        name: this.state.name,
        number:this.state.number
    };
    this.props.onSubmit(contact) 
    this.reset()
    }
    reset = () => {this.setState({ name: '', number: ''})}

    render() {
        return (
            <form className={styles.form} onSubmit={this.onSubmit}>
                <label>
                Name
                <input
                        onChange={this.onInputChange}
                        value={this.state.name}
                        className={styles.inputNameLabel}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                />
                </label>
                <label>
                    Phone
                    <input
                        value={this.state.number}
                        className={styles.inputNameLabel}
                        onChange={this.onInputChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>
                <button type='submit'>Add contacts</button>
            </form>
        )
    }
}
Form.propTypes  = {
    onSubmit: PropTypes.func.isRequired,
}