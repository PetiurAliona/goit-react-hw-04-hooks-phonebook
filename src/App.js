import React, { Component } from "react"
import ContactForm from "./components/ContactForm/ContactForm"
import Filter from "./components/Filter/Filter"
import ContactsList from "./components/ContactsList/ContactsList"

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts")
    const parseCont = JSON.parse(contacts)

    if (parseCont) {
      this.setState({ contacts: parseCont })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  addContact = (contact) => {
    const { contacts } = this.state
    if (contacts.find((item) => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`)
      return false
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }))
    return true
  }

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }))
  }

  handleChange = (e) => {
    const { value, name } = e.currentTarget
    this.setState({ [name]: value })
  }

  filterContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase()
    return this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))
  }

  render() {
    const { filter } = this.state
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactsList contacts={this.filterContact()} remove={this.deleteContact} />
      </>
    )
  }
}

export default App
