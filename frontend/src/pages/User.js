import { useState } from 'react'
import Nav from '../components/Nav'

const User = () => {

    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        handicap: "",
        email: "",
        url: "",
        about: "",
        matches: []
    })
    const handleSubmit = () => {
        console.log('submitted')
    }
    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name
        console.log('value' + value, 'name' + name)

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div>
            <Nav 
                setShowState={() => {}}
                showState={false}
            />
            <div className='user-profile'>
                <h2>Add Your Information</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor='first_name'>First Name</label>
                            <input
                                id='first_name'
                                type='text'
                                name='first_name'
                                placeholder='First Name'
                                required={true}
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        <label>Birthday</label>
                            <div className='dob'>
                                <input
                                    id='dob_day'
                                    type='number'
                                    name='dob_day'
                                    placeholder='DD'
                                    required={true}
                                    value={formData.dob_day}
                                    onChange={handleChange}
                                />
                                <input
                                    id='dob_month'
                                    type='number'
                                    name='dob_month'
                                    placeholder='MM'
                                    required={true}
                                    value={formData.dob_month}
                                    onChange={handleChange}
                                />
                                
                                <input
                                    id='dob_year'
                                    type='number'
                                    name='dob_year'
                                    placeholder='YYYY'
                                    required={true}
                                    value={formData.dob_year}
                                    onChange={handleChange}
                                />
                            </div>
                            <label>Handicap</label>
                                <input
                                    id='handicap'
                                    type='number'
                                    name='handicap'
                                    placeholder='Beginners ~ 30+'
                                    required={true}
                                    value={formData.handicap}
                                    onChange={handleChange}
                                />

                            <label htmlFor='about'>Tell us about yourself</label>
                            <input 
                                id='about'
                                type='text'
                                name='about'
                                required= {true}
                                placeholder='Intermediate player with 4 years...'
                                value={formData.about}
                                onChange={handleChange}
                            />
                        <input type='submit' />
                    </section>
                    <section>
                        <label htmlFor='about'>Profile Pic</label>
                            <input 
                                type='url'
                                name='url'
                                id='url'
                                placeholder='Paste image url'
                                onChange={handleChange}
                                required={true}
                            />
                        <div className='photograph'>
                            <img src={formData.url} alt="profile_pic"/>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default User