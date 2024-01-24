import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

function Filters() {
    const { t } = useTranslation()

    const [categories, setCategories] = useState(['all', 'laptops', 'smarthphones'])

    const [selectedCategory, setSelectedCategory] = useState('all')
    const [price, setPrice] = useState(0)

    function handlePrice (event: FormEvent<HTMLInputElement>) {
        setPrice(parseInt(event.currentTarget.value))
    }

    return <section className="filters flex justify-between items-center">
        <div>
            <label htmlFor='price'>{t('price')}</label>
            <input id='price' type='range' min={0} max={1000} value={price} onInput={event => handlePrice(event)} />
        </div>
        <div>
            <label htmlFor='category'>{t('category')}</label>
            <select id='category' value={selectedCategory} onChange={event => setSelectedCategory(event.target.value)}>
                {
                    categories.map(category => (
                        <option value={category}>{category}</option>
                    ))
                }
            </select>
        </div>
    </section>
}
export default Filters