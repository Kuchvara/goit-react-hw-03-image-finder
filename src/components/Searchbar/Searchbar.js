import { Component } from "react";
import styles from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        search: '',
    }

    handleChange = event => {
        this.setState({search: event.currentTarget.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.search);
        this.setState({ search: '' })
    }

render() {
    return (
        <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
        value={this.state.search}
        onChange={this.handleChange}
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"/>
        </form>
        </header>      
    )
}}

export default Searchbar;